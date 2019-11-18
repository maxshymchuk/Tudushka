import '../styles/editor.css';

export class Editor {
  constructor(parent) {
    this.parent = parent;

    const templateItem = document.getElementById('template__editor');
    const clone = templateItem.content.cloneNode(true);
    this.editor = clone.querySelector('.editor');

    this.parent.appendChild(this.editor);

    console.log('Editor created');
  }

  get Handle() {
    return this.editor;
  }

  get Parent() {
    return this.parent;
  }

  close() {
    this.parent.removeChild(this.editor);
    this.editor = null;
  }
}
