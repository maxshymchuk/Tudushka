import { Animation, AnimeDir } from '../classes/Animation';
import { grid } from '../scripts/grid';

export class List {
  constructor() {
    this.list = [];

    const templateItem = document.getElementById('template__list');
    const clone = templateItem.content.cloneNode(true);

    this.listSectionElem = clone.querySelector('.list-section');
    this.listElem = clone.querySelector('.list');
    this.reject = clone.querySelector('.reject');

    this.reject.addEventListener('click', () => {
      this.listSectionElem.style.overflowY = 'hidden';
      Animation.Animate(this.listSectionElem, { name: 'fading', dir: AnimeDir.Reverse }, () => {
        document.body.removeChild(this.listSectionElem);
      });
      Animation.Animate(this.listElem, { name: 'fading-moving-top', dir: AnimeDir.Reverse });
    });
  }

  Add(record) {
    grid.Unselect(record);
    record.item.removeAttribute('draggable');
    this.list.push(record);
  }

  Remove(record) {
    this.list.splice(this.list.indexOf(record), 1);
  }

  Show() {
    this.list.forEach(i => {
      this.listElem.appendChild(i.Element);
    });
    document.body.appendChild(this.listSectionElem);

    Animation.Animate(this.listSectionElem, { name: 'fading', dir: AnimeDir.Normal }, () => {
      this.listSectionElem.style.overflowY = 'auto';
    });
    Animation.Animate(this.listElem, { name: 'fading-moving-top', dir: AnimeDir.Normal });
  }
}
