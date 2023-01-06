let hoy = new Date();
console.log(hoy);
let nacimiento = new Date(1981,09,26);
console.log(nacimiento);

let mayor = 'Hoy es mayor que la fecha de tu nacimiento...';
if (hoy>nacimiento){
    console.log(mayor);
}else{
    console.log(false);
}

let diaNacimiento = nacimiento.getDate();
console.log(diaNacimiento);

let mesNacimiento = nacimiento.getMonth();
console.log(mesNacimiento);

let añoNacimiento = nacimiento.getFullYear();
console.log(añoNacimiento);