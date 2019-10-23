//Manipulasi Array
//1. Menambah isi array(Hardcode)//

// const arr = ["Angga", "Ikhsan", "Erfan", "Anggi"];
// arr.push("Roni");

const arr = [
  { school: "SMP Datarajan", yearIn: 2009, yearOut: 2012 },
  { school: "SMK Harapan Bangsa Ulubelu", yearIn: 2012, yearOut: 2015 }
];

console.log(arr);

//Menambah elemen baru di awal array
arr.unshift({ school: "SDN 1 Datarajan", yearIn: 2004, yearOut: 2009 });
console.log(arr);

//Menambah elemen baru di akhir array
arr.push({ school: "AMIK DCC Pringsewu", yearIn: 2016, yearOut: 2019 });

//2. Menghapus satu elemen terakhir array
// var arr = ["Muhammad", "Afsori", "Musamitha"];
// arr[1] = undefined;
// console.log(arr);
arr.pop();
console.log(arr);

//Menghilangkan satu elemen pada array yg berada diawal array
arr.shift();
console.log(arr);

//Contoh menghapus elemen dimulai dari index ke 1 sebanyak 1 elemen pada array:
arr.splice(1, 1);
console.log(arr);

// Dimulai dari elemen 1, ganti 1 elemen, tambahkan "SDN 1 Airabang"
arr.splice(0, 0, { school: "SDN 1 Air Abang", yearIn: 2004, yearOut: 2009 });
console.log(arr);

//Merubah/Edit elemen di dalam array
arr[0] = { school: "SMP Bina Utama", yearIn: 2009, yearOut: 2012 };
