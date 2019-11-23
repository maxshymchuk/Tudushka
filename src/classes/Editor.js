import '../styles/editor.css';

import { grid } from '../scripts/grid';
import { Animation, AnimeDir } from './Animation';

export class Editor {
  constructor(target) {
    this.title = target ? target.Title : '';
    this.content = target ? target.Content : '';

    const templateItem = document.getElementById('template__editor');
    const clone = templateItem.content.cloneNode(true);

    this.editor = clone.querySelector('.editor');

    this.note = this.editor.querySelector('.note');
    this.textarea = this.editor.querySelector('.textarea__note_content');
    this.inputTitle = this.editor.querySelector('.input__note_title');
    this.submit = this.editor.querySelector('.submit');
    this.reject = this.editor.querySelector('.reject');

    if (target) {
      this.inputTitle.value = this.title;
      this.textarea.value = this.content;

      this.textarea.style.color = target.color;
      this.textarea.style.backgroundColor = target.backgroundColor;
    }

    this.submit.addEventListener('click', e => {
      if (target) {
        target.Title = this.inputTitle.value;
        target.Content = this.textarea.value;
      } else {
        grid.AddNote(this.inputTitle.value, this.textarea.value);
      }
      this.close();
    });

    this.reject.addEventListener('click', e => {
      this.close();
    });

    document.body.appendChild(this.editor);

    Animation.Animate(this.editor, { name: 'fading', dir: AnimeDir.Normal });
    Animation.Animate(this.note, { name: 'fading-moving-top', dir: AnimeDir.Normal });

    console.log('Editor created');
  }

  close() {
    Animation.Animate(this.note, { name: 'fading-moving-top', dir: AnimeDir.Reverse });
    Animation.Animate(this.editor, { name: 'fading', dir: AnimeDir.Reverse }, () => {
      document.body.removeChild(this.editor);
    });
  }
}
