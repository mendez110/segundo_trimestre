/*1. Dado el arreglo [1,2,3,4,5,6]:
c) Crear una copia del arreglo usando el ciclo “for” pero con todos los elementos incrementados en 1.
*/
let arreglo = [1, 2, 3, 4, 5, 6];
let copiaArreglo = [];

for (let i = 0; i < arreglo.length; i++) {
  copiaArreglo[i] = arreglo[i] + 1;
}

console.log(copiaArreglo);
