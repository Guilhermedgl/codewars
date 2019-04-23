// https://www.codewars.com/kata/525caa5c1bf619d28c000335/train/javascript

const isSolved = (board) => {
  // TODO: Check if the board is solved!
  const boardObj = {};
  board.forEach((elem) => {
    elem.forEach((item, idx) => {
      if (item === 0) return -1;
      if (!boardObj[idx]) {
        boardObj[idx] = [item];
      } else {
        boardObj[idx].push(item);
      }
    });
  });
  return boardObj;
};

console.log(isSolved([[0, 0, 1], [0, 1, 2], [2, 1, 0]]));
