let arreglo1 = ["Pera", "Cebolla", "Limón", "Pimentón"];
let arreglo2 = ["Manzana", "Banano", "Lechuga", "Perejíl"];

let arregloOrdenadoFrutas = [];
let arregloOrdenadoVerduras = [];

for (let i = 0; i < arreglo1.length; i++) {
  let elemento = arreglo1[i];
  arregloOrdenadoFrutas.push(elemento);
}

for (let j = 0; j < arreglo2.length; j++) {
  let elemento = arreglo2[j];
  arregloOrdenadoVerduras.push(elemento);
}

console.log("Arreglo ordenado Frutas:", arregloOrdenadoFrutas);
console.log("Arreglo ordenado Verduras:", arregloOrdenadoVerduras);
