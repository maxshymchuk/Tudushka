import { grid } from './grid';
import { Editor } from '../classes/Editor';

let editor = null;

export const createEditor = parent => {
  editor = new Editor(parent);
  initEditor();
};

export const initEditor = () => {
  document.getElementById('editor__submit').addEventListener('click', () => {
    grid.AddNote(
      editor.Handle.querySelector('.input__note_title').value,
      editor.Handle.querySelector('.textarea__note_content').value
    );
    editor.close();
  });

  document.getElementById('editor__close').addEventListener('click', () => {
    editor.close();
  });

  console.log('Editor reinited');
};
