const countPositivesSumNegatives = (input) => {
  if (input === null || input.length === 0) return [];
  return input.reduce((acc, elem) => {
    elem > 0 ? acc[0] += 1 : acc[1] += elem;
    return acc;
  }, [0, 0]);
};
