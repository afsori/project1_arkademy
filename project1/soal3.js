// pohon imajinatif 1 tahun berapa musim? 2 atau 4?
// 1 meter musim semi, musim gugur 2x lipat. Musim semi paling awal.
// inputan user X untuk tahun Y untuk tinggi

// 1 tahun = 1 m => t = awal *2 = 2m
// 2 tahun = t = awal+1 = 3m => t= awal*2 6m
// 3 tahun = 7m => 14m
// 4 tahun = c= b+1 => c = b*2

// function tumbuh(tinggi, tahun) {
//   if (tinggi <= 0 || tahun <= 0) {
//     return false;
//   } else {
//     for (i = 0; i < tahun; i++) {
//       tinggi = (tinggi + 1) * 2;
//     }
//     console.log("tinggi akhir tanaman adalah", tinggi);
//   }
// }

function tumbuh(tinggi, tahun) {
  if (tinggi > 0 && tahun > 0) {
    for (i = 0; i < tahun; i++) {
      tinggi = tinggi * 2 + 1;
    }
  } else {
    return false;
  }
  console.log("tinggi akhir tanaman adalah", tinggi);
}
console.log(tumbuh(1, 2));

// function tumbuhan(tinggi, tahun) {
//   if (tinggi > 0 || tahun > 0) {
//     for (i = 0; i < tahun; i++) {
//       tinggi = tinggi * 2 + 1;
//     }
//   } else {
//     return false;
//   }
//   console.log(tumbuhan(1, 1));
// }
