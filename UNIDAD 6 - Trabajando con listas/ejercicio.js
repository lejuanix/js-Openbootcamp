//Crea un archivo JS que contenga las siguientes líneas:

//- Una variable que contenga la lista de la compra (mínimo 5 elementos) √

//- Modifica la lista de la compra y añádele "Aceite de Girasol" √

//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol" √

//- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha) √

//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter) √

//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map) √

//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map) √

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat) √

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const listaDeCompra = ["zanahoria", "papa", "ají", "tomate", "cebolla"];

listaDeCompra.unshift("Aceite de Girasol");

console.log(listaDeCompra);

listaDeCompra.shift("Aceite de Girasol");

console.log(listaDeCompra);

const listadePelis = [
    { titulo : "La naranja Mecanica", director: " Stanley Kubrick", fecha: 1985},
    { titulo : "Scream 4", director: "Wes Craven", fecha: 2011},
    { titulo : "La Isla Siniestra", director: "Martin Scorsese", fecha: 2010},
]

const posterior2010 = listadePelis.filter(obj => obj.fecha > 2010);
console.log(posterior2010);

const autorLista = listadePelis.map(listadePelis => listadePelis.director);

console.log(autorLista);

const nombreLista = listadePelis.map(listadePelis => listadePelis.titulo);

console.log(nombreLista);

const nombreyAutor = nombreLista.concat(autorLista);

console.log (nombreyAutor);

const nombreyAutorprop = [...autorLista, ...nombreLista];

console.log(nombreyAutorprop);
