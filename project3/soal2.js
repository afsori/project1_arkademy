let matrik = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function transpose(arr) {
  let newMatrik = [];
  for (let i = 0; i < arr.length; i++) {
    newMatrik[i] = [];
    for (let j = 0; j < arr[i].length; j++) {
      newMatrik[i][j] = arr[j][i];
    }
  }
  return newMatrik;
}

// }
console.log(transpose(matrik));
