//Crea un archivo llamado fechas.js que contenga las siguientes líneas √

//- La fecha de hoy √

//- La fecha de tu nacimiento √

//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento √

//- Una variable que contenga el día de tu nacimiento √

//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0) √

//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)√

const fecha = new Date();

console.log(fecha);

const fechaN = new Date(1993, 07, 04);

console.log(fechaN);

console.log(fecha > fechaN);

const dia = fechaN.getDate();

console.log(dia);

const mes = fechaN.getMonth();

console.log(mes);

const anyo = fechaN.getFullYear(4);

console.log(anyo);
