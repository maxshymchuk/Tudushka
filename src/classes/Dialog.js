import { initDialog } from '../scripts/dialog';

export class Dialog {
  static Prompt(question, callback) {
    const dialogTemplate = initDialog();

    const input = document.createElement('input');
    const submit = document.createElement('button');
    const reject = document.createElement('button');
    input.setAttribute('class', 'dialog__title');
    input.setAttribute('type', 'text');
    submit.setAttribute('class', 'submit');
    reject.setAttribute('class', 'reject');

    input.placeholder = question;

    submit.addEventListener('click', () => {
      document.body.removeChild(dialogTemplate);
      callback(input.value);
    });
    reject.addEventListener('click', () => document.body.removeChild(dialogTemplate));

    dialogTemplate.querySelector('.content').appendChild(input);
    dialogTemplate.querySelector('.controls').appendChild(submit);
    dialogTemplate.querySelector('.controls').appendChild(reject);

    document.body.appendChild(dialogTemplate);
  }
  static Confirm() {}
  static Alert() {}
  static DatePicker() {}
  static Notify() {}
}
