import '../styles/menu.css';
import '../styles/custom.css';

import { ItemType } from '../classes/GridItem';
import { createEditor } from './editor';

export const initMenu = () => {
  const templateMenu = document.getElementById('template__menu');
  const clone = templateMenu.content.cloneNode(true);

  document.body.insertAdjacentElement('afterbegin', clone.querySelector('.menu'));

  document.getElementById('menu__create_note').addEventListener('click', () => createEditor(ItemType.note));
  document.getElementById('menu__create_folder').addEventListener('click', () => createEditor(ItemType.folder));

  console.log('Menu inited');
}