function jumlahSatu(num) {
  newNum = num.reduce((a, b) => a + b); //penjumlahan pertama, dijadikan 1 array objek
  let arr = newNum; // 159

  while (newNum > 10) {
    // console.log(arr);
    arr = Array.from(String(newNum), Number); // merubah tiap digit newnum ke string, kemudian jadi number lagi
    // console.log(arr);
    newNum = arr.reduce((a, b) => a + b);
    arr = newNum;
  }
  return arr;
}
console.log(jumlahSatu([123, 9, 27]));
