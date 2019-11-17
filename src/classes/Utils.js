export class Utils {
  static generateId(length, letters = [
    ...'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  ]) {
    let string = '';
    for (let i = 0; i < length; i++) {
      string += letters[Math.trunc(Math.random() * letters.length)];
    }
    return string;
  }

  static rand(a, b) {
    return Math.trunc(Math.random() * (b - a + 1)) + a;
  }
}