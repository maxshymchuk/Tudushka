import '../styles/menu.css';

import { grid } from './grid';
import { Editor } from '../classes/Editor';
import { Dialog } from '../classes/Dialog';

export const initMenu = () => {
  const templateMenu = document.getElementById('template__menu');
  const clone = templateMenu.content.cloneNode(true);

  document.body.insertAdjacentElement('afterbegin', clone.querySelector('.menu'));

  document.getElementById('menu__create_note').addEventListener('click', () => new Editor());
  document
    .getElementById('menu__create_folder')
    .addEventListener('click', () => Dialog.Prompt('Folder name:', grid.AddFolder.bind(grid)));

  console.log('Menu inited');
};
