// let num = 0;
// while(num < 10){
//   console.log(num);
//   num++;
// }

// const PASSWORD = 'neoneo10'

// let guest = prompt('enter the password');
// while (guest !== PASSWORD){
//   guest = prompt('enter the password');
// }

// alert ('welcome back admin');

//! break untuk memberhentikan perulangan
// let input = prompt("Halo, Lagi ngapain?");
// while (true) {
//   input = prompt(input);
//   if (input.toLowerCase() === 'stop') break;
// }
// alert('Siap');

//! break dalam for 
// for (let i = 0; i < 1000; i++) {
//   console.log(i);
//   if (i === 100) break;
// }
// let stok = 3;

// while (stok > 0) {
//   console.log("Masih ready.. sisa: " + stok);
//   stok--;
// }
// console.log("Stok habis");

// let angakAcak = 0;
// while (angakAcak !== 7) {
//   angakAcak = Math.floor(Math.random() * 10) +1;
//   console.log("Mendapatkan Angka: " + angakAcak);
// }
// console.log("Angka 7 terdeteksi.. ketahuan")


//! simulasi kasir

let totalBelanja = 150000;
let saldoUser = 200000;
let transaksiSelesai = false;

while (!transaksiSelesai) {
  if (saldoUser >= totalBelanja) {
    console.log("Transaksi Berhasil");
    transaksiSelesai = true;
  } else {
    console.log("Transaksi gagal! saldo anda kurang")
  }
}