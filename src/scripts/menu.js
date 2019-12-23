import '../styles/menu.css';

import { grid } from './grid';
import { Editor } from '../classes/Editor';
import { Dialog } from '../classes/Dialog';
import { Animation, AnimeDir } from '../classes/Animation';
import { list } from './list';

export const initMenu = () => {
  const header = document.querySelector('header');
  const menu = header.querySelector('.menu');

  menu.querySelector('.menu__create_note').addEventListener('click', () => new Editor());
  menu
    .querySelector('.menu__create_folder')
    .addEventListener('click', () => Dialog.Prompt('Folder name:', grid.AddFolder.bind(grid)));
  menu.querySelector('.menu__open_completed').addEventListener('click', () => list.Show());

  Animation.Animate(header, { name: 'fading-moving-bottom', dir: AnimeDir.Normal }, () => {
    header.style.opacity = 1;
  });

  console.log('Menu inited');
};
