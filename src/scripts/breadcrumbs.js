import '../styles/breadcrumbs.css';

import { Breadcrumbs } from '../classes/Breadcrumbs';

export let breadcrumbs;

export const initBreadcrumbs = () => {
  const breadcrumbsElem = document.getElementById('breadcrumbs');

  breadcrumbs = new Breadcrumbs(breadcrumbsElem);
};
