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

// function validParentheses(parens){
//   let count = 0;
//   for (let i = 0 ; i < parens.length && count >= 0; i++) {
//     count += (parens[i] == '(') ? 1 : - 1;
//   }
//   return count === 0;
// }

console.log(validParentheses('()()((()'));
console.log(validParentheses('())'));
console.log(validParentheses(')())'));
console.log(validParentheses('(()('));
