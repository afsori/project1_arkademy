let mA = [[3, 4, 6], [1, 2, 5]];

let mB = [[7, 5], [6, 4], [2, 3]];

function multiply(mA, mB) {
  if (mB.length == mA[0].length) {
    let result = [];
    for (let i = 0; i < mA.length; i++) {
      result[i] = [];
      for (let j = 0; j < mB[0].length; j++) {
        let temp = 0;
        for (let k = 0; k < mB[0].length; k++) {
          temp += mA[i][k] * mB[k][j];
        }
        result[i][j] = temp;
      }
    }
    return result;
  } else {
    return "Matriks Tidak Sesuai";
  }
}
console.log(multiply(mA, mB));
