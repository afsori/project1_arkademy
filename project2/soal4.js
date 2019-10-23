let daftarBuku = [
  { name: "Harry Potter", status: "Tersedia" },
  { name: "John Wick", status: "Tidak Tersedia" },
  { name: "Orang Orang Biasa", status: "Tidak Tersedia" },
  { name: "Muslim Produktif", status: "Tersedia" },
  { name: "Atomic Habit", status: "Tersedia" }
];
let bukuIndex = [];
function pinjam(judul) {
  for (let i = 0; i < daftarBuku.length; i++) {
    if (daftarBuku[i].name == judul) {
      bukuIndex.push(daftarBuku[i].status);
    }
  }
  // return "Status buku " + judul + " " + bukuIndex;
  // console.log(pinjam(1, 2));
  // console.log("Status buku :"( ${judul} ${bukuIndex}));
  console.log("Status buku " + judul + " " + bukuIndex);
}

function bukuYgada(comm) {
  for (let i = 0; i < daftarBuku.length; i++) {
    if (daftarBuku[i].status === comm) {
      bukuIndex.push(daftarBuku[i].name);
    }
  }
  // return "Buku yang Tersedia : " + bukuIndex;
  console.log(bukuYgada("Buku yang Tersedia :" + "" + bukuIndex));
}

console.log(pinjam("John Wick"));
console.log(ketersediaan("Tersedia"));

// function cekBuku(judul) {
//     let arrIndex = daftarBuku.map(function(x) {return x.name;}).indexOf(judul);
//     let indexStatus = daftarBuku[arrIndex];
//     return indexStatus.status;
//     }

// console.log(cekBuku('Orang Orang Biasa'));
