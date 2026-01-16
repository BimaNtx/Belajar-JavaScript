let num = 0;
while(num < 10){
  console.log(num);
  num++;
}

const PASSWORD = 'neoneo10'

let guest = prompt('enter the password');
while (guest !== PASSWORD){
  guest = prompt('enter the password');
}

alert ('welcome back admin');