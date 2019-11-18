import '../styles/index.css';

import { initHello } from './hello';
import { initMenu } from './menu';
import { initGrid } from './grid';

const initApp = () => {
  document.addEventListener('DOMContentLoaded', () => {
    initHello();
    initGrid();
    initMenu();

    console.log('App inited');
  });
};

initApp();
