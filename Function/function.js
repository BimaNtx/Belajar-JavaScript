// let lemparDadu = Math.floor(Math.random() * 6) + 1;
// console.log(lemparDadu);

function lemparDadu() {
  console.log(Math.floor(Math.random() * 6) + 1); //lebih singkat dan dapat digunakan berkali kali
}

function selamatSiang(name) { //(name) sebagai parameter
  console.log(`Hello, ${name}. Selamat Siang Guys`);
}

selamatSiang('Bima'); //'Bima' sebagai argument

// parameter/argument = input

//! multiple arguments & parameters
function jumlahkan(a, b) {
  const total = a + b;
  console.log(total);
}

jumlahkan(10, 1000) //jika memasukkan 3 argument, yang dihitung hanya sesuai dengan jumlah parameter

//! return
//mengakhiri proses didalam fungsi dan akan memberikan nilai yang didefinikan saat fungsi dipanggil
function hitung (a, b) {
  if (a !== 'adalah ' || b !== 'bima') {
    return 'salah woi';
  }
  return a + b;
}

let hasil = hitung('adalah ', 'bima');
console.log(hasil);

//! Scope: Visibilitas Variabel

let linux = 'Arch';

function easyLinux() {
  let linux = 'Mint';
  console.log(linux); //output: mint
}
easyLinux();
console.log(linux);  //output:Arch

//! Blocked Scope Variabel

let total = 10;
if (total > 7) {
  let satuan = 10;
  console.log(satuan);
}
// console.log(satuan); //tidak bisa mengambil variabel jika tidak didalam scopenya
// bisa jika menggunakan var karena var tidak memiliki blocked scope dan tidak disarankan juga menggunakan var

for (let index = 0; index < 10; index++) {
  const indexNum = index;
  console.log(indexNum);
}
console.log(indexNum);