let nombre = "Juan Ignacio";
let apellido = "Gutierrez";
let estudiante = `${nombre} ${apellido}`;
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let str_numeros = estudiante.length;
let letra1 = nombre.charAt(0);
let letrafinal = apellido.charAt(8);

console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(str_numeros);
console.log(letra1);
console.log(letrafinal);
console.log(estudiante.replace(/\s/g));
console.log(estudiante.includes(nombre));
