// membuat array

let playlist = [];
let number = [1,2,3,4];A
let day = ['senin', 'selasa', 'rabu'];
let mix = [null, undefined, 'bima', 1];

// mengubah nilai array

let warna = ['Hijau', 'Kuning', 'Mer', 'ah'];

warna[2] = 'Merah';
warna[3] = 'Jingga';

console.log(warna);

// nasted array

const board = [
	[null, null, 'O'],
	['X', 'O', null],
	['O', null, 'X']
]

// object

const baju = {
	judul: 'Adidas',
	Harga: 10000000,
	isReady: true,
	size: ['m', 's', 'l', 'xl'],
	lokasi: {
		indonesia: 'xxl',
		laos: 'xxl'
	}
}

baju.judul = 'cas' 
baju['harga'] = 100.000

const person = {
	nama: 'Bima Ananta',
	kelas: 'XI',
	asal: 'Probolinggo'
}

let asal = 'asal';
asal[asal] = 'Lumajang'


// array + object

const chart = [
	{
		product: 'veu.js',
		price: 1.23,
		quantity: 3
	},
	{
		product: 'react.js',
		price: 2.34,
		quantity: 1
	},
	{
		product: 'angular.js',
		price: 3.45,
		quantity: 2
	}
]

const student = {
	firstName: 'Bima',
	lastName: 'Ananta',
	strengths: ['power', 'heal'],
	exam: {
		cRank: 100,
		aRank: 1000,
	}
}