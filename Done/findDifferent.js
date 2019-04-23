function findUniq(arr) {
// do magic
	if (arr[0] !== arr[1] && arr[0] !== arr[2]) {
		return arr[0];
	} else return arr.find(i => {
		return i !== arr[0];
	});
}

findUniq([ 1, 1, 1, 2, 1, 1 ]);

