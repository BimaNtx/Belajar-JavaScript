// let num = 0;
// while(num < 10){
//   console.log(num);
//   num++;
// }

// const PASSWORD = 'neoneo10'

// let guest = prompt('enter the password');
// while (guest !== PASSWORD){
//   guest = prompt('enter the password');
// }

// alert ('welcome back admin');

//! break untuk memberhentikan perulangan
// let input = prompt("Halo, Lagi ngapain?");
// while (true) {
//   input = prompt(input);
//   if (input.toLowerCase() === 'stop') break;
// }
// alert('Siap');

//! break dalam for 
for (let i = 0; i < 1000; i++) {
  console.log(i);
  if (i === 100) break;
}