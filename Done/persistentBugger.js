/* eslint-disable no-unused-vars */
// https://www.codewars.com/kata/persistent-bugger

const persistence = (num) => {
  let total = 0;
  let splitNum = num.toString().split('');
  console.log('length', splitNum.length);
  while (splitNum.length > 1) {
    const result = splitNum.reduce((acc, crt) => {
      console.log('acc', acc, 'crt', crt);
      return acc * crt;
    });
    splitNum = result.toString().split('');
    total += 1;
  }
  return total;
};

console.log(persistence(39));
