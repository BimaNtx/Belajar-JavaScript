// forEach Method 
 
/*
array.forEach(function(item, index, array) {
  // Kode yang akan dijalankan
});
*/

const peserta = ['Bima', 'Ananta', 'itu'];

peserta.forEach(function(nama, index) {
    console.log(`Halo nama saya ${nama}. saya abson nomor ${index + 1}`);
});

const angka = [10, 20, 30, 40, 50];
let total = 0;


angka.forEach(function(nilai) {
    total += nilai;
})

console.log(total);

/*
const arrayBaru = arrayLama.map(function(item, index) {
return //hasil transformasi
})
*/

const nama = ['Bima', 'Ananta', 'di Dini', 'Hari'];

const kuadrat = nama.map(function(n) {
    return n + n;
})

console.log(kuadrat);
console.log(nama);

const produk = [
    {id: 1, nama: 'Laptop', harga: 15000000},
    {id: 2, nama: 'Mouse', harga: 50000},
    {id: 3, nama: 'Keyboard', harga: 10000}
];

const daftarNamaProduk = produk.map(function(p) {
    return p.nama;
});

console.log(daftarNamaProduk);