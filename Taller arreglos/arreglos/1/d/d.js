/*1. Dado el arreglo [1,2,3,4,5,6]:
d) Calcular el promedio de todos los elementos del arreglo*/
let arreglo = [1, 2, 3, 4, 5, 6];
let suma = 0;

for (let i = 0; i < arreglo.length; i++) {
  suma += arreglo[i];
}

let promedio = suma / arreglo.length;
console.log(promedio);
