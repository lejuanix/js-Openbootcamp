//Crea un archivo llamado conjuntos.js que contenga las siguientes líneas √

//- Un nuevo Set con los nombres de tu familia √

//- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo) √

//- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;) √


const array = ["Alejandra", "Maria luz", "Fabian", "Juan Ignacio", "Victoria"];

const miSet = new Set(array);

console.log(array);
console.log(miSet);

////

miSet.add("Juan Ignacio");

console.log(miSet);

miSet.add("Javascript");

console.log(miSet);
