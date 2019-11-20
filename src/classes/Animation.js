export const AnimeDir = {
  Normal: 'normal',
  Reverse: 'reverse'
};

export class Animation {
  static Animate(object, props, callback) {
    if (!object) return;
    if (!props.time) props.time = 500;
    if (!props.animeType) props.animeType = 'ease-in-out';
    if (!props.dir) props.dir = AnimeDir.Normal;
    object.style.animation = [props.name, `${props.time / 1000}s`, props.dir, props.animeType].join(' ');
    object.style.pointerEvents = 'none';
    setTimeout(() => {
      object.style.animation = '';
      object.style.pointerEvents = 'auto';
      if (callback) callback();
    }, props.time);
  }
}
