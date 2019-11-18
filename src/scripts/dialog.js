import '../styles/dialog.css';

export const initDialog = () => {
  const templateItem = document.getElementById('template__dialog');
  const clone = templateItem.content.cloneNode(true);
  console.log('Dialog inited');

  return clone.querySelector('.dialog-container');
};
