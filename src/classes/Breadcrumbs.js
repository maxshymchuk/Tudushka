import { Animation, AnimeDir } from './Animation';

export class Breadcrumbs {
  constructor(element) {
    this.path = ['root'];
    this.element = element;
    Animation.Animate(this.element, { name: 'fading-moving-left', dir: AnimeDir.Normal });
    this.Redraw();
  }

  AddPath(path) {
    this.path.push(path);
    this.Redraw();
    Animation.Animate(this.element, {
      name: 'bubble',
      dir: AnimeDir.Normal,
      animeType: 'cubic-bezier(1.000, 1.030, 0.045, 1.475)'
    });
  }

  RemovePath() {
    this.path.pop();
    this.Redraw();
    Animation.Animate(this.element, {
      name: 'bubble',
      dir: AnimeDir.Normal,
      animeType: 'cubic-bezier(1.000, 1.030, 0.045, 1.475)'
    });
  }

  Redraw() {
    this.element.innerText = this.path.join(' / ');
  }
}
