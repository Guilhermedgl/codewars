const accum = s => s.split('').map((elem, idx) => `${elem.toUpperCase}${elem.repeat(idx).toLowerCase()}`).join('-');

console.log(accum('gui'));
