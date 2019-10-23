// let bilangan = [6, 22, 34, 15, 2, 13, 26, 57, 42, 32];

// console.log("data terkecil :", Math.min(...bilangan));
// console.log("data terbesar :", Math.max(...bilangan));
// bilangan.sort(function(a, b) {
//   return b - a;
// });

// console.log(`Descending Sort ${bilangan}`);
// bilangan.sort(function(a, b) {
//   return a - b;
// });

// console.log(`Ascending Sort ${bilangan}`);

let bilangan = [6, 22, 34, 15, 2, 13, 26, 57, 42, 32];
console.log("data terkecil :", Math.min(...bilangan));
console.log("data terbesar :", Math.max(...bilangan));

console.log(
  "sort secara ascending :",
  bilangan.sort(function(a, b) {
    return a - b;
  })
);

console.log(
  "sort secara descending",
  bilangan.sort(function(a, b) {
    return b - a;
  })
);
