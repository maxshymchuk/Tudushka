import '../styles/index.css';

import { initHello } from './hello';
import { initMenu } from './menu';
import { initGrid } from './grid';
import { initBreadcrumbs } from './breadcrumbs';

const initApp = () => {
  document.addEventListener('DOMContentLoaded', () => {
    initBreadcrumbs();
    initHello();
    initGrid();
    initMenu();

    console.log('App inited');
  });
};

initApp();
