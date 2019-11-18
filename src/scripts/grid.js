import '../styles/grid.css';

import { Grid } from '../classes/Grid';
import { GridItem, FolderType } from '../classes/GridItem';

export let grid = null;

export const initGrid = () => {
  const gridElem = document.createElement('section');

  gridElem.setAttribute('class', 'grid');
  gridElem.setAttribute('id', 'grid');

  document.body.appendChild(gridElem);

  grid = new Grid(gridElem);
  grid.CurrentDir = new GridItem();
  grid.CurrentDir.createFolder(FolderType.folder, 'root');

  console.log('Grid inited');
};
