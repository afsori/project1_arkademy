// function generatePyramid() {
//   var totalNumberofRows = 5;
//   var arr = new Array();
//   for (var i = 1; i <= totalNumberofRows; i++) {
//     for (var j = 1; j <= i; j++) {
//       arr.push(j);
//       console.log(j);
//     }
//     console.log("\n");
//   }
// }

// var s = "";
// for (var i = 0; i < 10; i++) {
//   for (var j = 0; j <= i; j++) {
//     s = s + "*";
//   }
//   s = s + "\n";
// }
// console.log(s);

// function isPrime(angka) {

//   for (i = 0; i < angka; i++) {
//     if (angka % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function display(num) {
//   arr = [2];
//   for (let i = 3; i < num; i += 2) {
//     if (isPrime(i)) {
//       arr.push(i);
//     }
//   }

//   let temp = "";
//   for (let i = 0; i < num; i++) {
//     //i = 0 ; 0<6,0=1
//     for (let j = 0; j <= i; j++) {
//       //0; 0<=0; 0+1
//       //1;
//       temp += arr; //2;
//     }
//     console.log(temp);
//     temp = "";
//   }
// }

// console.log(display(5));

let arr = [2, 3, 5, 7, 11];
let temp = "";

function sikusiku(num) {
  //untuk baris
  for (let i = 0; i < num; i++) {
    //untuk kolom
    for (let j = 0; j <= i; j++) {
      temp += arr[j];
    }
    console.log(temp);
    temp = "";
  }
}

console.log(sikusiku(5));
