import '../styles/breadcrumbs.css';

import { Breadcrumbs } from '../classes/Breadcrumbs';

export let breadcrumbs = null;

export const initBreadcrumbs = () => {
  const breadcrumbsElem = document.createElement('span');
  breadcrumbsElem.setAttribute('class', 'breadcrumbs');
  breadcrumbsElem.setAttribute('id', 'breadcrumbs');

  document.body.insertAdjacentElement('afterbegin', breadcrumbsElem);

  breadcrumbs = new Breadcrumbs(breadcrumbsElem);
};
