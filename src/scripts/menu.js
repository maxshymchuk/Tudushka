import '../styles/menu.css';

import { grid } from './grid';
import { createEditor } from './editor';
import { Dialog } from '../classes/Dialog';

export const initMenu = () => {
  const templateMenu = document.getElementById('template__menu');
  const clone = templateMenu.content.cloneNode(true);

  document.body.insertAdjacentElement('afterbegin', clone.querySelector('.menu'));

  document.getElementById('menu__create_note').addEventListener('click', () => createEditor(document.body));
  document
    .getElementById('menu__create_folder')
    .addEventListener('click', () => Dialog.Prompt('Folder name:', grid.AddFolder.bind(grid)));

  console.log('Menu inited');
};
