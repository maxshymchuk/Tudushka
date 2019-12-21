import { Utils } from './Utils';
import { Editor } from '../classes/Editor';
import { grid } from '../scripts/grid';
import { breadcrumbs } from '../scripts/breadcrumbs';
import { Animation, AnimeDir } from './Animation';
import { list } from '../scripts/list';

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
    this.title = 'Title';
    this.content = 'Content';

    const randNum = Utils.rand(0, colors.length - 1);
    this.backgroundColor = colors[randNum][0];
    this.color = colors[randNum][1];
  }

  itemSelect(e) {
    if (e.target.checked) {
      grid.Select(this);
    } else {
      grid.Unselect(this);
    }
  }

  itemDragOver(e) {
    e.preventDefault();
  }

  itemDragStart() {
    if (this.itemType === ItemType.note || this.folderType === FolderType.folder) {
      if (!grid.isSelected(this)) grid.Select(this);
    }

    console.log('Item drag started');
  }

  itemDragEnd() {
    grid.UnselectAll();

    console.log('Item drag ended');
  }

  itemOption(e) {
    e.preventDefault();
  }

  itemOpen() {
    switch (this.itemType) {
      case ItemType.folder:
        if (this.folderType === FolderType.backFolder) {
          grid.CurrentDir = this.prevFolder;
          breadcrumbs.RemovePath(this.title);
        } else {
          grid.CurrentDir = this;
          breadcrumbs.AddPath(this.title);
        }
        break;
      case ItemType.note:
        new Editor(this);
        break;
    }

    console.log('Item opened');
  }

  itemComplete() {
    list.Add(this);

    Animation.Animate(this.item, { name: 'disappearing', dir: AnimeDir.Normal }, () => {
      grid.RemoveItem(this);
    });

    console.log('Item completed');
  }

  itemDrop(e) {
    e.preventDefault();
    if (grid.Selected) {
      for (let i = 0; i < grid.Selected.length; i++) {
        if (grid.Selected[i] === this) continue;
        switch (grid.Selected[i].itemType) {
          case ItemType.note:
            switch (this.folderType) {
              case FolderType.folder:
                this.notes.push(grid.Selected[i]);
                break;
              case FolderType.backFolder:
                this.prevFolder.notes.push(grid.Selected[i]);
                break;
            }
            break;
          case ItemType.folder:
            switch (this.folderType) {
              case FolderType.folder:
                grid.Selected[i].folders.forEach(f => (f.prevFolder = this));
                this.folders.push(grid.Selected[i]);
                break;
              case FolderType.backFolder:
                grid.Selected[i].folders.forEach(f => (f.prevFolder = this.prevFolder));
                this.prevFolder.folders.push(grid.Selected[i]);
                break;
            }
            break;
        }
        grid.RemoveItem(grid.Selected[i]);
        Animation.Animate(this.item, { name: 'shaking', dir: AnimeDir.Normal, time: 300 });
      }
    }

    grid.UnselectAll();

    console.log('Item dropped');
  }

  CreateNote(title, content) {
    this.itemType = ItemType.note;

    if (title) this.title = title;
    if (content) this.content = content;

    const templateItem = document.getElementById('template__grid_note');
    const clone = templateItem.content.cloneNode(true);

    this.item = clone.querySelector('.item');
    this.item.setAttribute('id', this.id);

    this.completeElem = clone.querySelector('.complete');
    this.checkboxElem = clone.querySelector('.checkbox');
    this.checkboxLabelElem = clone.querySelector('.checkbox__label');
    this.titleSectionElem = clone.querySelector('.title-section');
    this.contentElem = clone.querySelector('.content');
    this.footerElem = clone.querySelector('.footer');

    this.item.style.backgroundColor = this.backgroundColor;
    this.item.style.color = this.color;
    this.titleSectionElem.style.borderColor = this.color;

    this.checkboxElem.setAttribute('id', `checkbox_${this.id}`);
    this.checkboxLabelElem.setAttribute('for', `checkbox_${this.id}`);

    this.titleSectionElem.querySelector('.title').innerText = this.title;
    this.contentElem.innerHTML = marked(this.content);

    this.completeElem.addEventListener('click', e => {
      e.stopPropagation();
      this.itemComplete();
    });
    this.checkboxElem.addEventListener('change', e => this.itemSelect(e));
    this.checkboxLabelElem.addEventListener('dblclick', e => e.stopPropagation());

    this.item.addEventListener('dragstart', () => this.itemDragStart());
    this.item.addEventListener('dragend', () => this.itemDragEnd());
    this.item.addEventListener('dblclick', () => this.itemOpen());
    this.item.addEventListener('contextmenu', e => this.itemOption(e));

    Animation.Animate(this.item, {
      name: 'bubble',
      dir: AnimeDir.Normal,
      animeType: 'cubic-bezier(1.000, 1.030, 0.045, 1.475)'
    });

    console.log('Note created');
  }

  CreateFolder(folderType, title) {
    this.itemType = ItemType.folder;
    this.folderType = folderType;

    if (title) this.title = title;

    const templateItem = document.getElementById('template__grid_folder');
    const clone = templateItem.content.cloneNode(true);

    this.item = clone.querySelector('.item');
    this.item.setAttribute('id', this.id);

    this.checkboxElem = clone.querySelector('.checkbox');
    this.checkboxLabelElem = clone.querySelector('.checkbox__label');
    this.titleSectionElem = clone.querySelector('.title-section');

    this.checkboxElem.setAttribute('id', `checkbox_${this.id}`);
    this.checkboxLabelElem.setAttribute('for', `checkbox_${this.id}`);

    this.titleSectionElem.querySelector('.title').innerText = this.title;

    if (this.folderType === FolderType.backFolder) {
      this.prevFolder = grid.CurrentDir;
    }
    this.folders = [];
    this.notes = [];

    if (this.folderType === FolderType.backFolder) {
      this.item.removeAttribute('draggable');
      this.titleSectionElem.removeChild(this.checkboxElem);
      this.titleSectionElem.removeChild(this.checkboxLabelElem);
    } else {
      this.checkboxElem.addEventListener('change', e => this.itemSelect(e));
      this.checkboxLabelElem.addEventListener('dblclick', e => e.stopPropagation());
    }

    this.item.addEventListener('dragstart', () => this.itemDragStart());
    this.item.addEventListener('drop', e => this.itemDrop(e));
    this.item.addEventListener('dragover', e => this.itemDragOver(e));
    this.item.addEventListener('dragend', () => this.itemDragEnd());
    this.item.addEventListener('dblclick', () => this.itemOpen());
    this.item.addEventListener('contextmenu', e => this.itemOption(e));

    Animation.Animate(this.item, {
      name: 'bubble',
      dir: AnimeDir.Normal,
      animeType: 'cubic-bezier(1.000, 1.030, 0.045, 1.475)'
    });

    console.log(`Folder created - ${this.folderType}`);
  }

  get Element() {
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

  set Title(title) {
    this.title = title;
    this.titleSectionElem.querySelector('.title').innerText = this.title;
  }

  get Content() {
    return this.content;
  }

  set Content(content) {
    this.content = content;
    this.contentElem.innerHTML = marked(this.content);
  }
}
