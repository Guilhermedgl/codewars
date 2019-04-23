// https://www.codewars.com/kata/count-by-x/train/javascript

function countBy(x, n) {
  const count = [];
  for (let i = 1; i <= n; i += 1) {
    count.push(i * x);
  }
  return count;
}

console.log(countBy(1, 5)); // [1,2,3,4,5]
console.log(countBy(2, 5)); // [2,4,6,8,10]
