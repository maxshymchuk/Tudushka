import '../styles/menu.css';

import { grid } from './grid';
import { Editor } from '../classes/Editor';
import { Dialog } from '../classes/Dialog';
import { Animation, AnimeDir } from '../classes/Animation';

export const initMenu = () => {
  const templateMenu = document.getElementById('template__menu');
  const clone = templateMenu.content.cloneNode(true);

  const menu = clone.querySelector('.menu');

  document.body.insertAdjacentElement('afterbegin', menu);

  document.getElementById('menu__create_note').addEventListener('click', () => new Editor());
  document
    .getElementById('menu__create_folder')
    .addEventListener('click', () => Dialog.Prompt('Folder name:', grid.AddFolder.bind(grid)));

  Animation.Animate(menu, { name: 'fading-moving-left', dir: AnimeDir.Normal });

  console.log('Menu inited');
};
