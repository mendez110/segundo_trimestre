let valle = ["Cali", "Tulua", "Cartago", "Salento"];
let quindio = ["Cordoba", "Armenia", "Palmira", "Circasia"];

let arregloOrdenadoValle = [];
let arregloOrdenadoQuindio = [];

for (let i = 0; i < valle.length; i++) {
  let ciudad = valle[i];
  arregloOrdenadoValle.push(ciudad);
}

for (let j = 0; j < quindio.length; j++) {
  let ciudad = quindio[j];
  arregloOrdenadoQuindio.push(ciudad);
}

console.log("Arreglo ordenado Valle:", arregloOrdenadoValles);
console.log("Arreglo ordenado Quindio:", arregloOrdenadoQuindio);
