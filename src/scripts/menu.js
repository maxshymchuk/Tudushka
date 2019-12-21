import '../styles/menu.css';

import { grid } from './grid';
import { Editor } from '../classes/Editor';
import { Dialog } from '../classes/Dialog';
import { Animation, AnimeDir } from '../classes/Animation';
import { list } from './list';

export const initMenu = () => {
  const menu = document.querySelector('header .menu');

  menu.querySelector('.menu__create_note').addEventListener('click', () => new Editor());
  menu
    .querySelector('.menu__create_folder')
    .addEventListener('click', () => Dialog.Prompt('Folder name:', grid.AddFolder.bind(grid)));
  menu.querySelector('.menu__open_completed').addEventListener('click', () => list.Show());

  Animation.Animate(menu, { name: 'fading-moving-left', dir: AnimeDir.Normal }, () => {
    menu.style.opacity = 1;
  });

  console.log('Menu inited');
};
