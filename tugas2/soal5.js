function count_vowels(str) {
  var string = str.match(/(?=.+[banananana])/g);
  return string === null ? 0 : string.length * 2;
}
console.log(count_vowels("nana"));

// str1 = "banananana";
// str2 = "nana";
// temp = [];
// for (i = 0; i < str1.length; i++) {
//   for (j = 0; j < str2.length; j++) {
//     return j;
//   }
//   console.log("nana");
// }

// str1 = "banananana";
// str2 = "nana";

// let i,
//   j,
//   found = 0;
// let strlen = arr.length;
// let strch = ad.length;

// for (i = 0; i < strlen - strch + 1; i++) found = 1;
// {
//   for (j = 0; j < strlen; j++) {
//     if (arr.length[i + j] === !ad.length[j]) found = 0;
//   }
// }
// if (found == 1) {
//   count++;
// }

// let a = "banananana";
// let b = "nana";
// let c = [];

// while (a.length === b.length) {
//   for (let i = 0; i < a.length; i++) {
//     // disleksi apakah hasil substring sama dengan b
//     if (a.substring(0, 4) === b) {
//       c.push(a.substring(0, 4));
//     }
// di slice
//   }
// }
//console.log(a.substring());
