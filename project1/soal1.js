//1. 50.000 / 2500 = 20, beli 4 gratis 1. 20 /4 = 5. 20 + 5
//alur >> start >> mie = 50rb / 2500 >> mie / 4 = total >> totalmie = mie + total

function total(uang) {
  totalmie = uang / 2500;
  if (totalmie >= 4) {
    totalbonus = totalmie / 4;
    totalakhir = totalbonus + totalmie;
    console.log("total mie adalah", totalakhir);
  } else {
    console.log("total mie adalah", totalmie);
  }
}

total(50000);
