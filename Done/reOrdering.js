const reOrdering = (text) => {
  //  your code here
  const newText = text.split(' ');
  let upper;
  for (let i = 0; i < newText.length; i += 1) {
    if (newText[i].charCodeAt(0) > 45 && newText[i].charCodeAt(0) < 91) {
      upper = newText.splice(i, 1);
      newText.unshift(upper);
    }
  }
  return newText.join(' ');
};

console.log(reOrdering('wario LoBan hello'));
