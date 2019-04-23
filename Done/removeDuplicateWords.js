function removeDuplicateWords(s) {
  // your perfect code...
  const newString = [];
  s.split(' ').forEach((word) => {
    newString.includes(word) ? word : newString.push(word);
  });
  return newString.join(' ');
}
