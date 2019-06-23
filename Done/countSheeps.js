// https://www.codewars.com/kata/if-you-cant-sleep-just-count-sheep/javascript

const countSheep = (num) => {
  // your code here
  let str = '';
  for (let i = 1; i <= num; i += 1) {
    str += `${i} sheep...`;
  }
  return str;
};
