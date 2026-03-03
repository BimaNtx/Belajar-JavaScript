 // Function

function salamHacker() {
    console.log("Akses diterima...");
    console.log("Memulai pemindaian sistem...");
}

// Menjalankan/Eksekusi (Penting: Tanpa ini, mesin tidak akan jalan!)
salamHacker();

// 'target' adalah Parameter
function serangTarget(target) {
    console.log("Menyerang server: " + target);
}

// 'Bank Pusat' adalah Argument
serangTarget("Bank Pusat");

function login(username, password) {
    console.log(`User: ${username}, Pass: ${password}`);
}

login("BimaAnanta", "kunci123");

//! return
//mengakhiri proses didalam fungsi dan akan memberikan nilai yang didefinikan saat fungsi dipanggil
function hitung (a, b) {
  if (a !== 'adalah ' || b !== 'bima') {
    return 'salah woi';
  }
  return a + b;
}

let hasil = hitung('adala ', 'bima');
console.log(hasil);

//-----------------------------------------------------------------------------------------------

// Review forEach dan map method

const daftarJurusan = ['RPL', 'TKj', 'MM', 'AK'];

daftarJurusan.forEach(function(jurusan, index) {
  console.log(`${index +1}. Jurusan: ${jurusan}`);
});


const hargaBarang = [5000, 10000, 15000];
let hargaTotal = 0;

hargaBarang.forEach(function(total) {
  hargaTotal += total;
});

console.log(hargaTotal);

// map

const hargaMentah = [10000, 50000, 25000];

const hargaRupiah = hargaMentah.map(function(harga) {
  return `Rp ${harga.toLocaleString('id-ID')}`;
});

console.log(hargaRupiah);


const namaSiswa = ['andi', 'budi', 'caca'];

const namaKapital = namaSiswa.map(function(nama) {
  return `${nama.toUpperCase()}`;
});

console.log(namaKapital);