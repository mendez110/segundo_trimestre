/*1. Imprima el número de elementos de los siguientes arreglos usando la propiedad length
a) [1,2,3,4,5,6,7,8,9,10] b) [] c) ["a", true, -1] d) [2, 4, 5, 7, 1, 34, 89, 0]*/

let arregloA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arregloB = [];
let arregloC = ["a", true, -1];
let arregloD = [2, 4, 5, 7, 1, 34, 89, 0];

let primero = arregloA.length; 
let segundo = arregloB.length; 
let tercero = arregloC.length; 
let cuarto  = arregloD.length;

let final = primero + segundo + tercero + cuarto;

console.log("El numero de elemntos es :" ,final)

console.log("-----------");

/*2. Dado el arreglo [1,2,3,4,5,6,7,8,9,10]:
a) Agregue el elemento 345 usando push y verifique el cambio en el arreglo*/

let arregloF = [1,2,3,4,5,6,7,8,9,10] ;
arregloF.push(345);
console.log(arregloF);

console.log("-----------");

/*b) Agregue el elemento true usando push y verifique el cambio en el arreglo*/

arregloF.push("True");
console.log(arregloF);

console.log("-----------");

/*c) Agregue el elemento "ADSO" usando push y verifique el cambio en el arreglo*/

arregloF.push("ADSO");
console.log(arregloF);

console.log("-----------");

/*d) Agregue los elementos 455, 78, false usando push en un solo llamado y verifique el cambio en el arreglo*/

arregloF.push(455 , 78 , "False" );
console.log(arregloF);

console.log("-----------");

/*e) Agregue los elementos "ABcd", true, 21 usando push en un solo llamado y verifique el cambio en
el arreglo*/

arregloF.push("ABcd" , "True" , "21" );
console.log(arregloF);

console.log("-----------");


/*3. Use splice para hacer las eliminaciones correspondientes:
a) Dado el arreglo [1, 2, false] Elimine el elemento de índice 2*/

let arregloM = [1, 2, false];

arregloM.splice(2 , 1)
console.log(arregloM);

console.log("-----------");

/*b) Dado el arreglo [99, false, 17, 45, 7, "abc", 78] Elimine el elemento de índice 6*/

let arreglol = [99, false, 17, 45, 7, "abc", 78];
arreglol.splice(6 , 1)
console.log(arreglol);

console.log("-----------");

/*c) Dado el arreglo [-1, -55, -89- 30, 1000] Elimine el elemento de índice 1*/

let arregloO = [-1, -55, -89- 30, 1000];
arregloO.splice(1 , 1)
console.log(arregloO);

console.log("-----------");

/*d) Dado el arreglo ["zxc", 767, 1298, true, false, [3], 1] Elimine los elementos desde el índice 1 hasta el
índice 4 en un sólo
llamado*/

let arregloX =  ["zxc", 767, 1298, true, false, [3], 1];
arregloX.splice(1 , 4)
console.log(arregloX);

console.log("-----------");

/*e) Dado el arreglo [34, ["q"], 67, 1, 99, 1/2] Elimine los elementos desde el índice 3 hasta el índice 4 en
un sólo
llamado*/

let arregloG =  [34, ["q"], 67, 1, 99, 1/2];
arregloG.splice(3 , 2)
console.log(arregloG);

console.log("-----------");

/*4. Dado el siguiente arreglo a = [2, 6, 9, 0, 5] , realice una copia dependiente de a.*/

let a = [2, 6, 9, 0, 5];
let copia = a.slice();
console.log(copia);

console.log("-----------");

/*5. Dado el siguiente arreglo b = ["abc", 4, 88, 99] , realice una copia independiente de b.*/

let b = ["abc", 4, 88, 99];
let copiasb = b.slice();
console.log(copiasb);

console.log("-----------");

/*6. Dado el siguiente arreglo ["x", "y", "z", 0, 1, 2, 3] use ciclo for (con .length) para recorrer el arreglo e imprimir todos sus elementos*/

let arreglos2 = ["x", "y", "z", 0 , 1, 2, 3,];
arreglos2.forEach(i => {
    console.log(i);
})

console.log("-----------");

/*7. Dado el siguiente arreglo [1, 17, 8, 9, 3] use ciclo for (con .length) para recorrer el arreglo e imprimir todos sus elementos aumentados en 1*/

let arreglo6 = [1, 17, 8, 9, 3];

for (let i = 0; i < arreglo6.length; i++) {
  let indiceA = arreglo6[i] + 1;
  console.log(indiceA);
}

console.log("-----------");

/*8. Cree una función que reciba un arreglo y retorne su longitud(número de elementos)*/

function obtenerL(arreglo) {
    return arreglo.length;
  }
  
  
  let miArreglo = [1, 2, 3, 4, 5];
  let longitud = obtenerL(miArreglo);
  console.log(longitud); 
  
  console.log("-----------");

/*9. Cree una función que reciba una letra del alfabeto y muestre si tal letra corresponde a algún elemento del siguiente arreglo
["a", "b", "c", "d", "e", "f", "g"] Use ciclo for (con .length) en la solución de este problema*/

function verificarLetraEnArreglo(letra) {
    let arreglo = ["a", "b", "c", "d", "e", "f", "g"];
    
    for (let i = 0; i < arreglo.length; i++) {
      if (letra === arreglo[i]) {
        return true;
      }
    }
  
    return false;
  }
  
  let letra1 = "b";
  let letra2 = "h";
  
  console.log(verificarLetraEnArreglo(letra1)); 
  console.log(verificarLetraEnArreglo(letra2)); 
  