// function average(arrayNilai) {
//   return arrayNilai.reduce((a, b) => a + b) / arrayNilai.length;
// }

// function mean(arrayNilai) {
//   let a = Math.round(arrayNilai.length / 2);
//   let newArray = arrayNilai.sort((a, b) => a - b); //mengurutkan array dari kecil ke besar
//   console.log(newArray);
//   return (newArray = (newArray[a - 1] + newArray[a]) / 2);
// }

// let mod = [],
//   count = [],
//   i,
//   maxindex = 0,
//   number; // array penampung
// function modus(arrayNilai) {
//   for (i = 0; i < arrayNilai.length; i++) {
//     number = arrayNilai[i];
//     count[number] = (count[number] || 0) + 1;
//     if (count[number] > maxindex) {
//       maxindex = count[number];
//     }
//   }

//   for (i in count) {
//     if (count.hasOwnProperty(i)) {
//       if (count[i] === maxindex) {
//         mod.push(Number(i));
//       }
//     }
//   }
//   return mod;
// }
// console.log(modus([13, 5, 7, 4, 6, 8, 11, 5, 8, 8]));
// console.log(mean([13, 5, 7, 4, 6, 8, 11, 5, 8, 8]));
// console.log(average([13, 5, 7, 4, 6, 8, 11, 5, 8, 8]));

// function median(values) {
//   values.sort(function(a, b) {
//     return a - b;
//   });

//   var half = Math.floor(values.length / 2);

//   if (values.length % 2) {
//     return values[half];
//   } else return (values[half - 1] + values[half]) / 2;
// }

// var values = [13, 5, 7, 4, 6, 8, 11, 5, 8, 8];
// console.log(median(values));

// function mode(numbers) {
//   // as result can be bimodal or multi-modal,
//   // the returned result is provided as an array
//   var modes = [],
//     count = [],
//     i,
//     number,
//     maxIndex = 0;

//   for (i = 0; i < numbers.length; i += 1) {
//     number = numbers[i];
//     count[number] = (count[number] || 0) + 1;
//     if (count[number] > maxIndex) {
//       maxIndex = count[number];
//     }
//   }

//   for (i in count)
//     if (count.hasOwnProperty(i)) {
//       if (count[i] === maxIndex) {
//         modes.push(Number(i));
//       }
//     }

//   return modes;
// }

// var list1 = [13, 5, 7, 4, 6, 8, 11, 5, 8, 8];

// console.log(mode(list1));

// function average(scores) {
//   var total = 0;

//   scores.forEach(function(score) {
//     total += score;
//   });

//   var avg = total / scores.length;

//   return Math.round(avg);
// }

// console.log("Nilai mahasiswa KM : ");

// var scores = [13, 5, 7, 4, 6, 8, 11, 5, 8, 8];

// console.log(average(scores));
