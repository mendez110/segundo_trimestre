/*1. Dado el siguiente arreglo let j = [200, -100, 45, 78, 32] , imprimir los elementos de indice 2 y 4*/

let j = [200, -100, 45, 78, 32];

console.log(j[2]);
console.log(j[4]);

console.log("-----------");

/*2. Dado el siguiente arreglo let f = ["ab", "cd", "ef", "gh"] , imprimir los elementos cd y gh.*/

let f = ["ab", "cd", "ef", "gh"];

console.log(f[1]);
console.log(f[3]);

console.log("-----------");

/*3. Dado el siguiente arreglo let aux = [10, true, "k200", 20.7] , imprimir todos sus elementos usando la
operacion de recorrido con foreach*/

let arreglos2 = [10, true, "k200", 20.7];
arreglos2.forEach(i => {
    console.log(i);
})

console.log("-----------");

/*4. Dado el siguiente arreglo let k = [17, 4, 64, 79, 109, 112] , recorrer cada elemento con foreach e
imprimir los elementos que sean números impares*/

let k = [17, 4, 64, 79, 109, 112]

k.forEach(i => {
    if(i % 2 !=  0){
    console.log(i);
    }
})

console.log("-----------");

/*5. Dado el siguiente arreglo let h = [true, true, false,true, false], cambiar el elemento de índice 2 por
true, cambiar el elemento de índice 3 por false.*/

let h = [true, true, false,true, false];

h[2] = "true"
console.log(h[2]);

h[3] = "false"
console.log(h[3]);

console.log("-----------");

/*6. Dado el siguiente arreglo let w = ["wc", "jp", "zx", "qr"], cambiar el elemento "jp" por true, cambiar
el elemento "qr" por 30*/

let w = ["wc", "jp", "zx", "qr"];

w[1] = "true"
console.log(w[1]);

w[3] = "30"
console.log(w[3]);

console.log("-----------");

/*7. Cree una función que reciba como argumento el siguiente arreglo [2, 5, 7, 9] y lo recorra,
imprimiendo cada uno de sus elementos.*/

let z = [2, 5, 7, 9];

z.forEach(i => {
    console.log(i);
})

console.log("-----------");

/*8. Cree una función que reciba un arreglo de n elementos y retorne el número de elementos del
arreglo.*/

function obtenerNumeroElementos(arreglo) {
    return arreglo.length;
  }

  let miArreglo = [1, 9,];
  let numeroElementos = obtenerNumeroElementos(miArreglo);
  console.log(numeroElementos);

  console.log("-----------");
  
/*9. Use indexOf para mostrar los índices de los elementos 44, 89, 70 del arreglo [30, 44, 54, 89, 100]*/
  
let miArreglo2 =  [30, 44, 54, 89, 100];
let indice = miArreglo2.indexOf(44);
console.log(indice); 

let indice2 = miArreglo2.indexOf(89);
console.log(indice2);

let indice3 = miArreglo2.indexOf(70);
console.log(indice3);

 






















