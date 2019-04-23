const summation = (num) => {
  // Code here
  let sum = 0;
  for (let i = 1; i <= num; i += 1) {
    sum += i;
  }
  return sum;
};

summation(10);
