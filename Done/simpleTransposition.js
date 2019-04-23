/* eslint-disable no-unused-expressions */

// https://www.codewars.com/kata/simple-transposition/train/javascript

const simpleTransposition = (text) => {
  let even = '';
  let odd = '';
  for (let i = 0; i < text.length; i += 1) {
    i % 2 === 0 ? even += text[i] : odd += text[i];
  }
  return `${even}${odd}`;
};

console.log(simpleTransposition('Simple text'));
