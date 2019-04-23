function balancedParentheses(str) {
  if (str[0] !== '(' || str[str.length - 1] !== ')') return false;
  const arrStr = str.split('');
  let openParentheses = 0;
  let closeParentheses = 0;
  arrStr.forEach((item) => {
    if (item === '(') {
      openParentheses += 1;
    } else if (item === ')') {
      closeParentheses += 1;
    }
  });
  if (openParentheses === closeParentheses) return true;
  return false;
}

console.log(balancedParentheses('(())()()'));
console.log(balancedParentheses('((()))'));
console.log(balancedParentheses(')))((('));
