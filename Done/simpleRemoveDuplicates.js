// https://www.codewars.com/kata/simple-remove-duplicates/train/javascript

const solve = (arr) => {
  const newArr = [];
  arr.reverse().forEach((n) => {
    if (!newArr.includes(n)) newArr.push(n);
  });
  return newArr.reverse();
};

console.log(solve([3, 4, 4, 3, 6, 3])); // => [4, 6, 3];
