import '../styles/list.css';

import { List } from '../classes/List';

export let list = null;

export const initList = () => {
  list = new List();
};
