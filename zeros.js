const zeros = (n) => {
  if (typeof n !== 'number') return '0';
  if (n <= 0) return null;
  let count = 0;
  console.log(Math.floor(n / 10));
  let loop = n;
  while (loop) {
    count += Math.floor(loop / 10);
    loop /= 10;
  }
  return count;
};

console.log('return', zeros(100));
console.log('return', zeros(10));

