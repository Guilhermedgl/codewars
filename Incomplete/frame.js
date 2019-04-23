const frame = (text, char) => {
  console.log(char.repeat(text[0].length + 2));
  return `${char.repeat(text[0].length + 2)}`;
};
console.log(frame(['Create', 'a', 'frame'], '+'));
