const sevenAte9 = (str) => {
  const newStr = [];
  [...str].forEach((w, i) => {
    if (w !== '9' && str[i + 1] !== '7' && str[i - 1] !== '7') newStr.push(w);
  });
  return newStr.join('');
};

console.log(sevenAte9('797')); // '77'
console.log(sevenAte9('797797797797797797797797797')); // '77'