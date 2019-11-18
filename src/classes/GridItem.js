import { Utils } from './Utils';
import { grid } from '../scripts/grid';
import { breadcrumbs } from '../scripts/breadcrumbs';

const colors = [
  ['#EDE604', '#000'],
  ['#FFCC01', '#000'],
  ['#FEAC00', '#000'],
  ['#FF8100', '#FFF'],
  ['#FF5800', '#FFF'],
  ['#FF3BA7', '#FFF'],
  ['#CC42A2', '#FFF'],
  ['#9F49AC', '#FFF'],
  ['#486EAF', '#FFF'],
  ['#179067', '#FFF'],
  ['#50B517', '#FFF'],
  ['#9ED112', '#000']
];

export const ItemType = {
  note: 'note',
  folder: 'folder'
};

export const FolderType = {
  backFolder: 'backFolder',
  folder: 'folder'
};

export class GridItem {
  constructor() {
    this.id = Utils.generateId(16);
    this.item = null;
    this.title = 'Title';
    this.content = 'Content';
    this.itemType = null;

    const randNum = Utils.rand(0, colors.length - 1);
    this.backgroundColor = colors[randNum][0];
    this.color = colors[randNum][1];
  }

  createNote(title, content) {
    this.itemType = ItemType.note;

    if (title) this.title = title;
    if (content) this.content = content;

    const templateItem = document.getElementById('template__grid_note');
    const clone = templateItem.content.cloneNode(true);

    this.item = clone.querySelector('.item');
    this.item.setAttribute('id', this.id);

    this.titleElem = this.item.querySelector('.title');
    this.contentElem = this.item.querySelector('.content');
    this.footerElem = this.item.querySelector('.footer');

    this.item.style.backgroundColor = this.backgroundColor;
    this.item.style.color = this.color;
    this.titleElem.style.borderColor = this.color;

    this.titleElem.innerText = this.title;
    this.contentElem.innerHTML = `<span>${this.content}</span>`;

    this.item.addEventListener('dragstart', e => {
      e.dataTransfer.setData(
        'text',
        JSON.stringify({
          type: this.itemType,
          id: this.id
        })
      );
    });

    this.item.addEventListener('dblclick', () => {
      alert(this.Id);
    });

    console.log('Note created');
  }

  // folder = {
  //   title: string;
  //   prevFolder: GridItem;
  //   folders: [];
  //   notes: [];
  // }
  createFolder(folderType, title) {
    this.itemType = ItemType.folder;
    this.folderType = folderType;

    if (title) this.title = title;

    const templateItem = document.getElementById('template__grid_folder');
    const clone = templateItem.content.cloneNode(true);

    this.item = clone.querySelector('.item');
    this.item.setAttribute('id', this.id);

    this.item.innerText = this.title;

    this.prevFolder = grid.CurrentDir;
    this.folders = [];
    this.notes = [];

    this.item.addEventListener('dragstart', e => {
      if (this.folderType === FolderType.folder) {
        e.dataTransfer.setData(
          'text',
          JSON.stringify({
            type: this.itemType,
            id: this.id
          })
        );
      }
    });

    this.item.addEventListener('dragover', e => e.preventDefault());

    this.item.addEventListener('drop', e => {
      e.preventDefault();
      let elem = null;
      const data = JSON.parse(e.dataTransfer.getData('text'));
      console.log(data);
      switch (data.type) {
        case ItemType.note:
          elem = grid.currentDir.notes.filter(n => n.Id === data.id)[0];
          this.notes.push(elem);
          break;
        case ItemType.folder:
          elem = grid.currentDir.folders.filter(f => f.Id === data.id)[0];
          elem.folders.forEach(f => (f.prevFolder = this));
          this.folders.push(elem);
          break;
      }
      grid.RemoveItem(data.type, elem);
    });

    this.item.addEventListener('dblclick', () => {
      if (this.folderType === FolderType.backFolder) {
        grid.CurrentDir = this.prevFolder;
        breadcrumbs.RemovePath(this.title);
      } else {
        grid.CurrentDir = this;
        breadcrumbs.AddPath(this.title);
      }
    });

    console.log('Folder created');
  }

  get Handle() {
    return this.item;
  }

  get Id() {
    return this.id;
  }

  get Type() {
    return this.itemType;
  }

  get Title() {
    return this.title;
  }

  get Content() {
    return this.content;
  }
}
