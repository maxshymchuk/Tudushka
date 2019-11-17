import '../styles/editor.css';
import { throws } from 'assert';
import { ItemType } from './GridItem';

export class Editor {
  constructor(parent, itemType) {
    this.parent = parent;
    this.itemType = itemType;

    let templateItem = null;
    switch (this.itemType) {
      case ItemType.note:
        templateItem = document.getElementById('template__editor_note');
        break;
      case ItemType.folder:
        templateItem = document.getElementById('template__editor_folder');
        break;
    }

    const clone = templateItem.content.cloneNode(true);
    this.editor = clone.querySelector('.editor');

    this.parent.appendChild(this.editor);

    console.log('Editor created');
  }

  get Handle() {
    return this.editor;
  }

  get Type() {
    return this.itemType;
  }

  get Parent() {
    return this.parent;
  }

  close() {
    this.parent.removeChild(this.editor);
    this.editor = null;
  }
}