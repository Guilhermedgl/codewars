/* eslint-disable no-unused-vars */
// https://www.codewars.com/kata/persistent-bugger

const persistence = (num) => {
  let total = 0;
  let splitNum = num.toString().split('');
  while (splitNum.length > 1) {
    const result = splitNum.reduce((acc, crt) => acc * crt, 1);
    splitNum = result.toString().split('');
    total += 1;
  }
  return total;
};
