// https://www.codewars.com/kata/alternating-case-%3C-equals-%3E-alternating-case/train/javascript

String.prototype.toAlternatingCase = function () {
  console.log(this.split(''));
  return this.split('').map(str => str === str.toUpperCase() ? str.toLowerCase() : str.toUpperCase()).join('');
}

console.log('GuilHerme'.toAlternatingCase());