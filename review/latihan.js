// forEach

const perangkat = ['Router', 'Switch', 'Server', 'PC-Client'];

perangkat.forEach(function(nama, index) {
    console.log(`${index + 1}. Perangkat ${nama} terdeteksi`)
});


// .map 

const barangMentah = [12000, 450000, 7000];

const barangSetelahPajak = barangMentah.map(function(hasil) {
    return hasil * 1.11;
})

console.log(barangSetelahPajak);

// Arrow function

/*
function cekStatus(level) {
    return "level ancaman: " + level;
}
*/

const cekStatus = (level) => {
    return "level ancaman " + level;
};

// implisit

const hitungKembalian = (bayar, total) => bayar - total;

const isGenap = (angka) => angka % 2 === 0

// FILTER
const angka = [10, 7, 15, 2];
const angkaBesar = angka.filter(num => num >= 10);
console.log('Angka Besar:', angkaBesar);

// SOME
const files = ['index.html', 'style.css', 'script.js', 'virus.exe'];
const adaVirus = files.some(file => file.endsWith('.exe'));
console.log(`Apakah ada file .exe? ${adaVirus}`);

// EVERY
const umur = [17, 10, 20, 24];
const sudahDewasa = umur.every(u => u >= 17);
console.log(`Apakah semua user berumur > 17? ${sudahDewasa}`)