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

let str = "BIM"

for (let i = 0; i <= 4; i++){
  console.log("outer:", i)
  for (let j = 0; j < str.length; j++)
    console.log(" inner:", str[j])
}
// ! lanjut besok, capek habis kegiatan