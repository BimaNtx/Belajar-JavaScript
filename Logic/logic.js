// let age = 17;
// if (age < 20){
//   console.log('Boleh gassin')
// }

// console.log('sebelum')

// if ( 2 - 1 == 0){
//   console.log('didalam')
// }

// console.log('sesudah')

// let angka = Math.random();
// console.log(angka)
// if (angka > 0.2) {
//   console.log('Lebih dari 0.2')
// }

// let umur = 17;

// if (umur === 17){
//   console.log('Baru Remaja');
// } else if (umur === 15){
//   console.log('Baru mulai puber');
// } else if (umur === 10){
//   console.log('Main-main dulu');
// }

// const nilai = prompt('Masukkan nilai Anda: ')

// if (nilai === 100){
//   console.log('S')
// } else if (nilai <= 70){
//   console.log('C');
// } else if (nilai <= 80){
//   console.log('B');
// } else if (nilai <= 90){
//   console.log('A')
// }

// const pw = prompt('Buat sandi yang kuat')

// if (pw.length >= 6){
//   if (pw.indexOf(' ') === -1){
//     console.log('Password valid');
//   } else {
//     console.log('Password tidak boleh ada spasi');
//   }
// } else {
//   console.log('Password minimal 6 karakter');
// }

// if (pw.length >= 6 && pw.indexOf(' ') === -1){
//   console.log('Password Valid');
// } else {
//   console.log('Tidak memenuhi syarat')
// }

// const role = prompt('Masukkan role Anda:');

// if (role === 'admin' || role === 'security'){
//   console.log('Selamat datang');
// } else {
//   console.log('Akses ditolak');
// }

// if (role !== 'admin'){
//   console.log('Akses ditolak');
// } else {
//   console.log('Akses diizinkan')
// }

const rating = 100;

switch(rating){
  case rating <= 1000:
    console.log('Normal');
    break;
  case 2000:
    console.log('medium');
    break;
  case 6000:
    console.log('Inferno');
    break;
  default:
    console.log('lobby')
} 