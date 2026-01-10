// Note: Masih proses

// 1.Membaca array
//  Tampilkan: angka pertama, angka terakhir, jumlah element
let angka = [10, 20, 30, 40, 50];

console.log(angka[0]);
console.log(angka.at(-1));
console.log(angka.length);


// 2. Urutan method 
// hapus angka terakhir, tambahkan 60 di akhir, tambahkan 0 diawal 
console.log(angka.pop());
angka.push(60);
angka.unshift(0);
console.log(angka);

// 3. copy vs asli
// buat array baru 'angkaBaru' yang: berisi 3 element tengah dari array, tidak mengubah array angka
const angkaBaru = angka.slice(2.4);
console.log(angkaBaru);

//! 4. Object sederhana
// buat object: nama, umur, aktif
// tampilkan: nama, status aktif menggunakan template literal 
const person = {
  nama: 'Bima Ananta',
  umur: 17,
  status: 'aktif'
}

console.log(`nama: ${person.nama} status: ${person.status}`);

//! 5. update aman
// ubah umur, tambahkan properti baru 'hobi'
person.umur = 18;
person.hobi = "membaca buku";
console.log(person);

//! 6. Bracket notation 
// buat variabel
let properti = 'umur';
// tampilkan nilai umur dari object
console.log(person[properti]);

//! 7. Data siswa
// buat array kelas berisi 2 object, masing masing: nama, nilai, lulus(bool)
// Tampilkan: nama siswa pertama , nilai siswa kedua
const kelas = [
  {
    nama: 'Bima',
    nilai: 100,
    lulus: true
  }, 
  {
    nama: 'Ananta',
    nilai: 95,
    lulus: true
  }
]
console.log(kelas[0].nama);
console.log(kelas[1].nilai);

//! 8. Reference check
let x = ['a', 'b'];
let y = x;
y.push('c');
// isi x dan alasan 
// x = a, b, c
// x ikut berubah karena array yang dituju nilainya beriubah

//! 9. mutating vs non mutating
let data = [1, 2, 3, 4];
let hasil = data.slice(1,3);
hasil.pop();
// jawab isi dari hasil, data dan kenapa data berubah/tidak berubah

// isi dari data yitu 1,2,3,4
// hasil = 2
//  data tidak berubah karena mothod slice hanya membuat salinan array baru tanpa berubah array aslinya
console.log(data);
console.log(hasil)