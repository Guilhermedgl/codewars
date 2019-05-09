// https://www.codewars.com/kata/5a1c28f9c9fc0ef2e900013b

const pyramid = (n) => {
  //  your code here
  console.log(`${' '.repeat(n)}/\\\n`);
  let space = n - 1;
  for (let i = 3; i < n + 4; i += 2) {
    console.log(`${' '.repeat(space)}/${' '.repeat(i)}\\\n`);
    space -= 1;
  }
  return `${' '.repeat(space)}/${'_'.repeat(n + n)}\\`;
};

console.log(pyramid(5));
