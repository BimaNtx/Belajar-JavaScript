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