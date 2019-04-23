function oddOrEven(array) {
// enter code here
  if (array.length === 0) return 'even';
  const sum = array.reduce((a, b) => a + b);
  if (sum % 2 === 0) return 'even';
  return 'odd';
}

oddOrEven([1, 2, 3, 4, 5]);
