/*Dado el arreglo [3, 50, 70, 600, 40]:
1. Use ciclo forEach para recorrer el arreglo e imprimir todos sus elementos*/

let arreglos = [3, 50, 70, 600, 40];
arreglos.forEach(i => {
    console.log(i);
})

console.log("-----------");
/*2. Use ciclo forEach para recorrer el arreglo e imprimir todos sus elementos multiplicados por 3*/


for (let i = 0; i < arreglos.length; i++) {
    let indice = arreglos[i] * 3;
    console.log(indice);
}

console.log("-----------");
/*3. Use ciclo while para recorrer el arreglo e imprimir todos sus elementos*/

let arreglo2 = [3, 50, 70, 600, 40];
let i = 0;

while (i < arreglo2.length) {
  console.log(arreglo2[i]);
  i++;
}


console.log("-----------");
/*4. Use ciclo for, condicional y operación módulo para recorrer el arreglo y mostrar cuales elementos
son pares*/

let arreglo3 = [3, 50, 70, 600, 40];

for (let i = 0; i < arreglo3.length; i++) {
  if (arreglo3[i] % 2 === 0) {
    console.log(arreglo3[i]);
  }
}


console.log("-----------");
/*5. Dado el arreglo ["Maria", "Pedro", "Juan", "Pablo", "Diana"] usar un ciclo y un condicional para
mostrar si el nombre Juan se encuentra dentro del arreglo*/

let arreglo4 = ["Maria", "Pedro", "Juan", "Pablo", "Diana"]

for (let i = 0; i < arreglo4.length; i++) {
    if (arreglo4[i] === "Juan") {
      console.log("se encuentra el nombre juan en el arreglo");
    }
  }

console.log("-----------");
/*6. Dado el arreglo ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"] usar un ciclo, un condicional,
y una variable contador(iniciela fuera del ciclo y úsela para almacenar las veces que aparece Maria
en el arreglo) para mostrar cuántas veces aparece el nombre Maria*/

let arreglo = ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"];
let contador = 0;

for (let i = 0; i < arreglo.length; i++) {
  if (arreglo[i] === "Maria") {
    contador++;
  }
}

console.log("El nombre 'Maria' aparece " , contador , " veces en el arreglo.");


console.log("-----------");
/*7. Dado el arreglo [15, 7, 9, 12, 1] usar ciclo forEach y una variable contadora para mostrar la suma de
sus elementos.Como sugerencia, se puede basar en el ejercicio 6 anterior de arreglos para ver como
se implementa la variable contadora*/

let arreglo5 = [15, 7, 9, 12, 1];
let suma = 0;

arreglo5.forEach(function(elemento) {
  suma += elemento;
});

console.log("La suma de los elementos del arreglo es: ",suma);


console.log("-----------");
/*8. Dado el arreglo [-2, 8, 99, 1, 7] usar ciclo forEach y una variable contadora para mostrar la suma de
los cuadrados de sus elementos.Como sugerencia, se puede basar en el ejercicio 6 anterior de
arreglos para ver cómo se implementa la variable contadora*/

let arreglo6 = [-2, 8, 99, 1, 7];
let sumaCuadrados = 0;

arreglo6.forEach(function(elemento) {
  sumaCuadrados += elemento * elemento;
});

console.log("La suma de los cuadrados de los elementos del arreglo es: " + sumaCuadrados);


console.log("-----------");
/*9. Dado el arreglo [true, true, false, true, false, false] use ciclo while y una variable
contadora(diferente al contador del ciclo) para mostrar cuántas veces aparece false en el arreglo.
Como sugerencia, se puede basar en el ejercicio 6 anterior de arreglos para ver como se implementa
la variable contadora.*/

let arreglo7 = [true, true, false, true, false, false];
let contadorFalse = 0;
let e = 0;

while (e < arreglo7.length) {
  if (arreglo7[e] === false) {
    contadorFalse++;
  }
  e++;
}

console.log("El valor 'false' aparece " , contadorFalse , " veces en el arreglo.");

console.log("-----------");
/*10. Dado el arreglo de caracteres: ["z", "p", "s", "z", "o", "b", "a", "w", "d"] use ciclo for para
inspeccionar los elementos del arreglo y mostrar si con tales elementos sería posible formar la
palabra adso.*/

console.log("-----------");

/*11. Dado el arreglo [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] use ciclo for para mostrar la tabla del 5 del
10 al 20 , p.e (5x10, 5x11...)*/

const arreglo9 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let i = 0; i < arreglo9.length; i++) {
  const numero = arreglo9[i];
  const resultado = 5 * numero;
  console.log("5 x ",numero , "es igual a:" ,resultado);
}


console.log("-----------");

/*12. Dado el arreglo [5, 7, 90, 2, 5, 3, 8, 99] use dos ciclos forEach(una dentro del otro) para determinar cuales numeros son consecutivos con otros, p.e. dos a y b son
consecutivos si a + 1 = b, p.e. 10 y 11 son consecutivos porque 10 + 1 = 11, 20 y 21 son consecutivos porque 20 + 1 = 2*/

const arreglo10 = [5, 7, 90, 2, 5, 3, 8, 99];

arreglo10.forEach((num1) => {
  arreglo10.forEach((num2) => {
    if (num1 + 1 === num2) {
      console.log("el numero ", num1 , "y" , num2 , "son consecutivos.");
    }
  });
});
