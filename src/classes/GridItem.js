import { Utils } from './Utils';

const colors = [
  ['#EDE604', '#000'], ['#FFCC01', '#000'], ['#FEAC00', '#000'], ['#FF8100', '#FFF'],
  ['#FF5800', '#FFF'], ['#FF3BA7', '#FFF'], ['#CC42A2', '#FFF'], ['#9F49AC', '#FFF'],
  ['#486EAF', '#FFF'], ['#179067', '#FFF'], ['#50B517', '#FFF'], ['#9ED112', '#000'],
];

export class GridItem {
  constructor(parent, itemType) {
    this.id = Utils.generateId(16);

    switch (itemType) {
      case ItemType.note: {
        const templateItem = document.getElementById('template__grid_note');
        const clone = templateItem.content.cloneNode(true);

        this.item = clone.querySelector('.item');
        this.titleElem = this.item.querySelector('.title');
        this.contentElem = this.item.querySelector('.content');
        this.footerElem = this.item.querySelector('.footer');

        const randNum = Utils.rand(0, colors.length - 1);
        this.item.style.backgroundColor = colors[randNum][0];
        this.item.style.color = colors[randNum][1];
        this.titleElem.style.borderColor = colors[randNum][1];
        break;
      }
      case ItemType.folder: {
        const templateItem = document.getElementById('template__grid_folder');
        const clone = templateItem.content.cloneNode(true);

        this.item = clone.querySelector('.item');
        this.titleElem = this.item;
        break;
      }
    }

    this.item.setAttribute('id', this.id);

    parent.appendChild(this.item);

    console.log('GridItem added');
  }

  set Title(str) {
    if (str) this.titleElem.innerText = str;
  }

  set Content(str) {
    if (str) this.contentElem.innerHTML = `<span>${str}</span>`;
  }
}

export const ItemType = {
  note: 'note',
  folder: 'folder'
}