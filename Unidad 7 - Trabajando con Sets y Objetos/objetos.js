//Crea un archivo llamado objetos.js que contenga las siguientes líneas √

//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)√

//- Una variable que obtenga tu edad a partir del objeto anterior √

//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s √

//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor.√

const obj = { nombre: "Juan Ingacio", apellido: "Gutierrez", edad: "29", altura:"1.86", eresDesarrollador: "no"};

const objedad = obj.edad

console.log(objedad);

const obj2 = [
    {...obj},
    {nombre: "Facu", apellido: "Rubio", edad: "26", altura: "1.87", eresDesarrollador: "si"},
    {nombre: "Julian", apellido: "Lucena", edad: "26", altura: "1.70", eresDesarrollador: "si"},
];

const lista = {...obj2}
console.log(lista);

const listaorden = obj2.sort((a, b) => b.edad - a.edad);

console.log(listaorden);
