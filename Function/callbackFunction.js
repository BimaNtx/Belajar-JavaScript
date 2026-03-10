// !1. forEach Method 
 
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

//  !2. map method
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

// !3. Arror function

// contoh fungsi biasa
const panggil = function(nama) {
    return `Halo ${nama}`;
};

// menggunakan arrow function
const sapa = (nama) => {
    return `Halo ${nama}`;
};

// 4. return implisit

// tanpa
const kaliDua = (n) => {
    return n * 2;
}

// mengggunakan return implisit 
const kaliTiga = (n) => n * 3;


// contoh arrow function dan return implisit

const hewanPeliharaan = ['Kucing', 'Anjing', 'Ayam', 'Kambing']
const peliharaanKapital = hewanPeliharaan.map(nama => nama.toUpperCase());
console.log(peliharaanKapital);

const hargaMentah = [10000, 15000, 25000];
const hargaRupiah = hargaMentah.map(harga => harga.toLocaleString('id-ID'));
console.log(hargaRupiah);

// -------------------------------------------------------------------------

// !5. SetTimeout & SetInterval

// A. SetTimeout | setTimeout(callback, delayInMilisecond)

console.log("Sedang Memproses Pembayaran...");

setTimeout(() => {
    console.log("Pembayaran Berhasil, Mencetak Struk..");
}, 2000);

// B. Setinterval | setInterval(callback, delayInMilisecond)

// setInterval (() => {
//     console.log("Memeriksa paket jaringan... Aman");
// }, 3000);

const intervalID = setInterval(() => {
    console.log("Running...");
}, 1000);

setTimeout(() => {
    clearInterval(intervalID);
    console.log("Berhasil dihentikan.");
}, 5000);

setInterval(() => {
    console.log("Hello");
}, 1000);

let detik = 5;

let timer = setInterval(() => {
    console.log(`sisa waktu anda: ${detik}`); 
    
    if(detik === 0) {
        console.log("Waktu Habis");
        clearInterval(timer);
    }
    detik--;
}, 1000);

