/* eslint-disable no-unused-expressions */

// https://www.codewars.com/kata/simple-transposition/train/javascript

const simpleTransposition = (text) => {
  let row1 = '';
  let row2 = '';
  for (let i = 0; i < text.length; i += 1) {
    i % 2 === 0 ? row2 += text[i] : row1 += text[i];
  }
  return `${row2}${row1}`;
};

console.log(simpleTransposition('Simple text'));
