// https://www.codewars.com/kata/multiples-of-3-or-5/train/javascript

const solution = (number) => {
  let count = 0;
  for (let i = 1; i < number; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      count += i;
    }
  }
  return count;
};

console.log(solution(10));
