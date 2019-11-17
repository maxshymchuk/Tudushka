import { GridItem, ItemType } from '../classes/GridItem';
import { Editor } from '../classes/Editor';

let editor = null;

export const createEditor = (itemType) => {
  editor = new Editor(document.body, itemType);
  initEditor();
}

export const initEditor = () => {
  document.getElementById('editor__submit').addEventListener('click', () => {
    const grid = document.getElementById('grid');
    switch (editor.Type) {
      case ItemType.note: {
        const gridItem = new GridItem(grid, ItemType.note);
        gridItem.Title = editor.Handle.querySelector('.input__note_title').value;
        gridItem.Content = editor.Handle.querySelector('.textarea__note_content').value;
        break;
      }
      case ItemType.folder: {
        const gridItem = new GridItem(grid, ItemType.folder);
        gridItem.Title = editor.Handle.querySelector('.input__folder_title').value;
        break;
      }
    }

    editor.close();
  })

  document.getElementById('editor__close').addEventListener('click', () => {
    editor.close();
  })

  console.log('Editor reinited');
}