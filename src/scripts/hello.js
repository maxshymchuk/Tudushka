import '../styles/hello.css';

export const initHello = () => {
  // localStorage.clear();
  const isVisited = localStorage.getItem('visited');
  if (!isVisited) {
    const templateItem = document.getElementById('template__hello');
    const clone = templateItem.content.cloneNode(true);

    let hello = clone.querySelector('.hello');

    document.body.appendChild(hello);
    localStorage.setItem('visited', true);

    hello.querySelector('input[type="button"]').addEventListener('click', () => {
      document.body.removeChild(hello);
      hello = null;
    });
  }
};
