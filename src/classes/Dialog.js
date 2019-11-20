import { initDialog } from '../scripts/dialog';
import { Animation, AnimeDir } from './Animation';

export class Dialog {
  static Prompt(question, callback) {
    this.dialogTemplate = initDialog();

    this.dialog = this.dialogTemplate.querySelector('.dialog');
    const input = document.createElement('input');
    const submit = document.createElement('button');
    const reject = document.createElement('button');
    input.setAttribute('class', 'dialog__title');
    input.setAttribute('type', 'text');
    submit.setAttribute('class', 'submit');
    reject.setAttribute('class', 'reject');

    input.placeholder = question;

    submit.addEventListener('click', () => {
      this.close(this.dialogTemplate);
      callback(input.value);
    });
    reject.addEventListener('click', () => this.close(this.dialogTemplate));

    this.dialog.querySelector('.content').appendChild(input);
    this.dialog.querySelector('.controls').appendChild(submit);
    this.dialog.querySelector('.controls').appendChild(reject);

    document.body.appendChild(this.dialogTemplate);

    Animation.Animate(this.dialogTemplate, { name: 'fading', dir: AnimeDir.Normal });
    Animation.Animate(this.dialog, { name: 'fading-moving-top', dir: AnimeDir.Normal });
  }
  static Confirm() {}
  static Alert() {}
  static DatePicker() {}
  static Notify() {}

  static close(obj) {
    Animation.Animate(this.dialog, { name: 'fading-moving-top', dir: AnimeDir.Reverse });
    Animation.Animate(this.dialogTemplate, { name: 'fading', dir: AnimeDir.Reverse }, () => {
      document.body.removeChild(obj);
    });
  }
}
