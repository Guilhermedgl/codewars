// https://www.codewars.com/kata/double-char/train/javascript

const doubleChar = str => str.split('').map(elem => elem + elem).join('');

function doubleChar2(str) {
  return str.split('').map((elem) => {
    console.log('elem + elem =>', elem + elem);
    return elem + elem;
  }).join('');
}

function doubleChar3(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i += 1) {
    newStr += (str[i] + str[i]);
  }
  return newStr;
}

// console.log(doubleChar('guilherme'));
console.log(doubleChar2('guilherme'));
// console.log(doubleChar3('guilherme'));
