/*1.Dada la cadena “Javascript es un buen lenguaje”:
a) Leer e imprimir los elementos de índices 3, 6, 8*/

let mensaje = "Javascript es un buen lenguaje";
console.log(mensaje[3]);
console.log(mensaje[6]);
console.log(mensaje[8]);

console.log("-----------");
/*b) Recorra la cadena usando ciclo for*/

let mensaje2 = "Javascript es un buen lenguaje";
for (let i = 0; i < mensaje2.length; i++) {
console.log(mensaje2[i]);
}

console.log("-----------");
/*2.Dada la cadena “Somos SENA”:
c) Recorra la cadena usando ciclo for y muestre si la cadena contiene la letra “E”*/

let mensaje3 = "Somos SENA";
for (let i = 0; i < mensaje3.length; i++) {
    if(mensaje3[i] == "E"){
        console.log("la cadena contien una 'E'");
    }
}

console.log("-----------");

/*d) Recorra la cadena usando ciclo for y muestre cuántas veces está la letra “o” . Como sugerencia use una
variable contadora para contar el número de veces que se encuentra la letra “o”.*/

let cadena = "Somos SENA";
let contador = 0;

for (let i = 0; i < cadena.length; i++) {
  if (cadena[i] === "o") {
    contador++;
  }
}

console.log("El numero de veces que 'o' se encuentra es:" ,contador);

console.log("-----------");
/*3.Dada la cadena “Javascript es genial” recorra la cadena usando ciclo for y muestre por cuantas palabras está
compuesta la cadena. Como sugerencia se puede basar en el modelo del ejercicio 2 literal d.*/

const cadenas = "Javascript es genial";
let contadorPalabras = 0;

for (let i = 0; i < cadenas.length; i++) {
  if (cadenas.charAt(i) === " ") {
    contadorPalabras++;
  }
}
contadorPalabras++;

console.log("La cadena está compuesta por : " ,contadorPalabras, " palabras.");

