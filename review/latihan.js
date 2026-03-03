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