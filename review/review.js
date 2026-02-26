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