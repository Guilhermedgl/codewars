const countZero = (x, y) => {
  let count = 0;
  for (let i = x; i <= y; i += 1) {
    if (i.toString().split('').includes('0')) {
      count += 1;
    }
  }
  return count;
};

console.log(countZero(199, 201));
