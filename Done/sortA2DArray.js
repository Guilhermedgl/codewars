function namesSorter(departmentsArray) {
  const arr = [];
  if (departmentsArray.length !== 0) {
    for (let i = 0; i < departmentsArray.length; i += 1) {
      for (let j = 0; j < departmentsArray[i].length; j += 1) {
        arr.push(departmentsArray[i][j]);
      }
    } for (let i = 0; i < departmentsArray.length; i += 1) {
      arr.push(departmentsArray[i]);
    }
    arr.sort((a, b) => {
      if (a.length > b.length) return 1;
      if (a.length < b.length) return -1;
      if (a.length === b.length) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      }
    });
    return arr;
  }
}

console.log(namesSorter([['Juan', 'Ariel', 'Julia'], ['Brad', 'Michael', 'Alexander']]));
