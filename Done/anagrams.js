const isAnagram = (word, anagram) => {
  const sortedAnagram = anagram.toLowerCase().split('').sort().join('');
  const sortedWord = word.toLowerCase().split('').sort().join('');
  return sortedAnagram === sortedWord;
};

console.log(isAnagram('gui', 'iug'));
