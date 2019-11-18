import { Utils } from './Utils';
import { grid } from '../scripts/grid';

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

export class GridItem {
  constructor() {
    this.id = Utils.generateId(16);
    this.item = null;
    this.title = 'Title';
    this.content = 'Content';

    const randNum = Utils.rand(0, colors.length - 1);
    this.backgroundColor = colors[randNum][0];
    this.color = colors[randNum][1];
  }

  createNote(title, content) {
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
    this.item.style.borderColor = 'red'; //this.color; // make color darker
    this.titleElem.style.borderColor = this.color;

    this.titleElem.innerText = this.title;
    this.contentElem.innerHTML = `<span>${this.content}</span>`;

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
  createFolder(title) {
    if (title) this.title = title;

    const templateItem = document.getElementById('template__grid_folder');
    const clone = templateItem.content.cloneNode(true);

    this.item = clone.querySelector('.item');
    this.item.setAttribute('id', this.id);

    this.item.innerText = this.title;

    this.prevFolder = grid.CurrentDir;
    this.folders = [];
    this.notes = [];

    this.item.addEventListener('dblclick', () => {
      if (this.Title === '...') {
        // MUST BE FIXED!!!!!
        grid.CurrentDir = this.prevFolder;
      } else {
        grid.CurrentDir = this;
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

  get Title() {
    return this.title;
  }

  get Content() {
    return this.content;
  }
}
