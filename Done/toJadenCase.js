/* eslint-disable func-names */
/* eslint-disable no-extend-native */
// https://www.codewars.com/kata/jaden-casing-strings/train/javascript

String.prototype.toJadenCase = function () {
  return this.toLowerCase().split(' ').map(word => word.replace(word[0], word[0].toUpperCase())).join(' ');
};


console.log('guilherme davi gomes de lima'.toJadenCase());
console.log('RODRIGO LEME'.toJadenCase());
console.log('GraZieLLe dianDra'.toJadenCase());
console.log('HeNrIqUe GuAzZeLlI'.toJadenCase());
