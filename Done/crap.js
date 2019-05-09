
// https://www.codewars.com/kata/clean-up-after-your-dog/train/javascript

const crap = (x, bags, cap) => {
  let craps = 0;
  for (let i = 0; i < x.length; i += 1) {
    for (let j = 0; j < x[i].length; j += 1) {
      console.log('i => ', x[i], ' j => ', x[i][j]);
      if (x[i][j] === 'D') return 'DOG!!';
      if (x[i][j] === '@') craps += 1;
    }
  }
  if (craps >= bags * cap) return 'Cr@p';
  if (craps <= bags * cap) return 'Clean';
};

console.log(crap([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 2, 2));
