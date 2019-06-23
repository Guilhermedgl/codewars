// https://www.codewars.com/kata/stop-gninnips-my-sdrow/train/javascript

// const spinWords = word => word.split(' ').map((elem) => {
//   if (elem.length < 5) return elem;
//   return [...elem].reverse().join('');
// }).join(' ');

const spinWords = word => word.split(' ').map(elem => elem.length < 5 ? elem : [...elem].reverse().join('')).join(' ');

console.log(spinWords('welcome'));
console.log(spinWords('Hey fellow warriors'));
