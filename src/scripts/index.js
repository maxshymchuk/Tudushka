import '../styles/index.css';

import { initHello } from './hello';

const initApp = () => {
  document.addEventListener('DOMContentLoaded', () => {
    initHello();

    console.log('App inited');
  });
};

initApp();
