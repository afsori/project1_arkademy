// main();

// function main() {
//   let input = 12;
//   let result = decimalToBinary(input);
//   console.log(result);
// }

// function decimalToBinary(input) {
//   let base = 2;
//   let inputNumber = input;
//   let quotient = 0;
//   let remainderArray = [];
//   let resultArray = [];

//   if (inputNumber) {
//     while (inputNumber) {
//       quotient = parseInt(inputNumber / base);

//       remainderArray.push(inputNumber % base);

//       inputNumber = quotient;
//     }
//     for (let i = remainderArray.length - 1; i >= 0; i--) {
//       resultArray.push(remainderArray[i]);
//     }
//     return parseInt(resultArray.join(""));
//   } else {
//     return `${input} is not a valid input`;
//   }
// }

// dec_to_bho = function(n, base) {
//   if (n < 0) {
//     n = 0xffffffff + n + 1;
//   }
//   switch (base) {
//     case "B":
//       return parseInt(n, 10).toString(2);
//       break;
//     case "H":
//       return parseInt(n, 10).toString(16);
//       break;
//     case "O":
//       return parseInt(n, 10).toString(8);
//       break;
//     default:
//       return "Wrong input.........";
//   }
// };

// console.log(dec_to_bho(120, "B"));
// console.log(dec_to_bho(120, "H"));
// console.log(dec_to_bho(120, "O"));

function decimalToBinary(angka) {
  let bin = [];
  while (angka > 0) {
    bin.unshift(angka % 2); // menambahkan elemen baru di awal
    angka >>= 1; // basically /= 2 without remainder if any
  }
  console.log("Angka binary " + bin.join(""));
}

decimalToBinary(12);
