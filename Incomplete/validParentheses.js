const validParentheses = (parens) => {
  if (parens[parens.length - 1] === '(' || parens[0] === ')' || parens.length % 2 !== 0) return false;
  const parentheses = {};
  for (let i = 0; i < parens.length; i += 1) {
    if (parentheses[parens[i]]) {
      parentheses[parens[i]] += 1;
    } else parentheses[parens[i]] = 1;
  }
  return parentheses['('] === parentheses[')'];
};

console.log(validParentheses('()()((()'));
console.log(validParentheses('())'));
console.log(validParentheses(')())'));
console.log(validParentheses('(()('));
