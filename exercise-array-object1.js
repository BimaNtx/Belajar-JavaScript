const buah = ['apel', 'jeruk', 'mangga', 'pisang'];
console.log(buah[0]);
console.log(buah.at(-1));

buah.push('anggur');
buah.shift();
buah.unshift('stoberi');
console.log(buah);

const buahFavorit = buah.slice(0, 2);
console.log(buahFavorit);

console.log(buah.includes('mangga'));
console.log(buah.indexOf('pisang'));

const siswa = {
  nama: 'Bima Ananta',
  kelas: 'XI RPL',
  nilai: 100,
  aktif: true
}

console.log(`${siswa.nama} ${siswa.kelas}`);

siswa.sekolah = 'SMKN';
siswa.nilai = 95;
console.log(siswa);

let key = 'kelas';
console.log(siswa[key]);

const produk = [
  {
    nama: 'sepatu',
    harga: 200000,
    stok: true
  },
  {
    nama: 'baju',
    harga: 100000,
    stok: false
  }
]
console.log(produk[0].nama);
console.log(produk[1].harga);

let a = [1,2,3];
let b = a;
b.push(4);
console.log(a)