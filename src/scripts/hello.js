import '../styles/hello.css';

import { initGrid } from './grid';
import { initBreadcrumbs } from './breadcrumbs';
import { initMenu } from './menu';
import { initList } from './list';
import { Animation, AnimeDir } from '../classes/Animation';

function loadApp(hello) {
  initBreadcrumbs();
  initGrid();
  initMenu();
  initList();
  Animation.Animate(hello, { name: 'fading', dir: AnimeDir.Reverse }, () => {
    document.body.removeChild(hello);
    hello = null;
  });
}

export const initHello = () => {
  localStorage.clear();
  const isVisited = localStorage.getItem('visited');
  if (!isVisited) {
    const templateItem = document.getElementById('template__hello');
    const clone = templateItem.content.cloneNode(true);

    let hello = clone.querySelector('.hello');

    document.body.appendChild(hello);
    Animation.Animate(hello, { name: 'fading', dir: AnimeDir.Normal });
    localStorage.setItem('visited', true);

    hello.querySelector('input[type="button"]').addEventListener('click', () => {
      loadApp(hello);
    });
  } else {
    loadApp();
  }
};
