// https://www.codewars.com/kata/palindrome-chain-length/train/javascript

const palindromeChainLength = (n) => {
  const reverseNum = num => parseInt(num.toString().split('').reverse().join(''), 10);
  let pali = n;
  let paliReversed = reverseNum(pali);
  let count = 0;
  while (paliReversed !== pali) {
    const sum = pali + paliReversed;
    pali = sum;
    paliReversed = reverseNum(sum);
    count += 1;
  }
  return count;
};

console.log(palindromeChainLength(87));
