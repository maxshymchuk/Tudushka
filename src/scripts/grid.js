import '../styles/grid.css';

export const initGrid = () => {
  const grid = document.createElement('section');
  grid.setAttribute('class', 'grid');
  grid.setAttribute('id', 'grid');
  document.body.appendChild(grid);

  console.log('Grid inited');
};
