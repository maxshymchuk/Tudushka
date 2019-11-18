import '../styles/grid.css';
import { Grid } from '../classes/Grid';
import { GridItem } from '../classes/GridItem';

export let grid = null;

export const initGrid = () => {
  const gridElem = document.createElement('section');
  const path = document.createElement('span');

  gridElem.setAttribute('class', 'grid');
  gridElem.setAttribute('id', 'grid');

  path.setAttribute('class', 'grid__path');
  path.setAttribute('id', 'grid__path');

  document.body.insertAdjacentElement('afterbegin', path);

  document.body.appendChild(gridElem);

  grid = new Grid(gridElem);
  grid.CurrentDir = new GridItem();
  grid.CurrentDir.createFolder('root');

  console.log('Grid inited');
};
