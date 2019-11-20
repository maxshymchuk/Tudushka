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
    if (!props.count) props.count = 1;
    if (!props.fillMode) props.fillMode = 'forwards';
    object.style.animation = [
      props.name,
      `${props.time / 1000}s`,
      props.dir,
      props.animeType,
      props.count,
      props.fillMode
    ].join(' ');
    object.style.pointerEvents = 'none';
    setTimeout(() => {
      if (callback) callback();
      object.style.animation = '';
      object.style.pointerEvents = 'auto';
    }, props.time);
  }
}
