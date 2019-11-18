export class Breadcrumbs {
  constructor(element) {
    this.path = ['root'];
    this.element = element;
    this.Redraw();
  }

  AddPath(path) {
    this.path.push(path);
    this.Redraw();
  }

  RemovePath() {
    this.path.pop();
    this.Redraw();
  }

  Redraw() {
    this.element.innerText = this.path.join(' / ');
  }
}
