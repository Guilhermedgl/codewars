const anagrams = (word, anagram) => {
  const sortedAnagram = anagram.split('').sort().join('').toLowerCase();
  const sortedWord = word.split('').sort().join('').toLowerCase();
  if (sortedAnagram === sortedWord) {
    return true;
  } return false;
};

console.log(anagrams('GUI', 'iug'));
