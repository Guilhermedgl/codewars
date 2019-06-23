/* eslint-disable no-unused-expressions */
const validParentheses = (parens) => {
  if (parens[0] === ')' || parens[parens.length - 1] === '(' || parens.length % 2 !== 0) {
    return false;
  }
  const stack = [];
  const parensCopy = [...parens].slice();
  for (let i = 0; i < parensCopy.length; i += 1) {
    if (parensCopy[i] === '(') {
      stack.unshift(parensCopy.shift());
    } else if (parensCopy[i] === ')') {
      stack
    }
  }
  console.log(stack);
};

console.log(validParentheses('()()((()'));
console.log(validParentheses('()'));
// console.log(validParentheses('()())(()')); BUG
console.log(validParentheses('())'));
console.log(validParentheses(')())'));
console.log(validParentheses('(()('));
