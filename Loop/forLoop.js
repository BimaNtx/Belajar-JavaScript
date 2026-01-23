// for (let i = 1; i <= 10; i++){ //initial; condition; incr/decr
//   console.log(i);
// }

// for (let i = 0; i <= 20; i += 2){ // menampilkan angka genap
//   console.log(i);
// }

// for (let i = 20; i >= 0; i--){
//   console.log(i);
// }

// for (let i = 10; i <= 10000; i *= 10){
//   console.log(i);
// }

//! Perulangan dengan Array
// const fruits = ['berry', 'apple', 'guava', 'jackfruit'];

// for (i = 0; i < fruits.length; i++){
//   console.log(i, fruits[i]);
// }

//! Nasted Loop

// let str = "BIM"

// for (let i = 0; i <= 4; i++){
//   console.log("outer:", i)
//   for (let j = 0; j < str.length; j++)
//     console.log(" inner:", str[j])
// }

//! Nasted array dengan nasted loop
// const studentRow = [
//   ["Olivia", "Joan", "Mikey", "Sandra"],
//   ["Nadia", "Shyla", "Andre", "Damn"],
//   ["Laura", "Dasha", "Law", "Neo"],
// ];

// for (let i = 0; i < studentRow.length; i++) {
//   const row = studentRow[i];
//   console.log(`Seat Row #${i + 1}`);
//   for (let j = 0; j < row.length; j++){
//     console.log(`  ${row[j]}`);
//   }
// }

// const daftarBahasa = ["Javascript", "Python", "PHP", "Dart"];
// for (let i = 0; i < daftarBahasa.length;i++) {
//   console.log("Saya belajar: " + daftarBahasa[i])
// }

// //! for + if-else
//   const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i< angka.length; i++){
//   if (angka[i] % 2 === 0){
//     console.log("Ini adalah angka genap");
//   } else {
//     console.log("Ini angka ganjil")
//   }
// }

// const fruits = ['Berry', "apple", 'guava', 'watermelon'];
// const cari = 'guava';

// for (let i = 0; i < fruits.length; i++) {
//   if (fruits[i] === cari){
//     console.log('ketemu ' + cari + ' ada di index ke-' + i);
//     break;
//   }
// }

let baris = 5;
let hasil = "";

for (let i = 1; i <= baris; i++){
  for (let j = 1 ; j <= i; j++){
    hasil += "* ";
  }
  hasil += "\n"
}

console.log(hasil);