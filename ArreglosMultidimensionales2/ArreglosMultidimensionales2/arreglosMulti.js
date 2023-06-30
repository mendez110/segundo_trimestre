/*1. Dado el arreglo [ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ]:
a) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo for*/

const arreglo = [["a", "z", "t"], [789, 887, 451], [true, false, 0]];

for (let i = 0; i < arreglo.length; i++) {
  for (let j = 0; j < arreglo[i].length; j++) {
    console.log(arreglo[i][j]);
  }
}

console.log("-----------");
/*b) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo forEach*/

const arreglo2 = [["a", "z", "t"], [789, 887, 451], [true, false, 0]];

arreglo2.forEach((subarreglo) => {
  subarreglo.forEach((elemento) => {
    console.log(elemento);
  });
});


/*2. Dado el arreglo [ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"] , [true, 1000, “@”, "¡"] ], [ [44, 55,
66, 77], [1, 2, 3, 4] ] ]
a) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo for*/

const arreglo3 = [[["%", 7, true, "#"], ["&", 55, false, "="]],[[false, 0, 99, "?"], [true, 1000, "@", "¡"]],[[44, 55, 66, 77], [1, 2, 3, 4]]];

for (let i = 0; i < arreglo.length; i++) {
  const subarregloExterno = arreglo[i];
  for (let j = 0; j < subarregloExterno.length; j++) {
    const subarregloInterno = subarregloExterno[j];
    for (let k = 0; k < subarregloInterno.length; k++) {
      console.log(subarregloInterno[k]);
    }
  }
}

console.log("-----------");

/*b) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo forEach*/

const arreglo4 = [
    [["%", 7, true, "#"], ["&", 55, false, "="]],
    [[false, 0, 99, "?"], [true, 1000, "@", "¡"]],
    [[44, 55, 66, 77], [1, 2, 3, 4]]
  ];
  
  arreglo4.forEach((subarregloExterno2) => {
    subarregloExterno2.forEach((subarregloInterno2) => {
      subarregloInterno2.forEach((elemento) => {
        console.log(elemento);
      });
    });
  });
  
console.log("-----------");

/*3. Dado el arreglo [ [2, 8, 9], [30, 71, 77], [11, 990, 41] ]:
a) Recorrer todos sus elementos más internos y mostrar los números que sean impares. Use cualquier ciclo, for o
forEach.*/

const arreglo5 = [
  [2, 8, 9],
  [30, 71, 77],
  [11, 990, 41]
];

for (let i = 0; i < arreglo5.length; i++) {
  const subarregloExterno3 = arreglo5[i];
  for (let j = 0; j < subarregloExterno3.length; j++) {
    const numero = subarregloExterno3[j];
    if (numero % 2 !== 0) {
      console.log(numero);
    }
  }
}

console.log("-----------");

/*b) Recorrer todos sus elementos más internos y mostrar la suma de estos. Como sugerencia use una variable
para acumular la suma, declarela antes del ciclo. Use cualquier ciclo, for o forEach.*/

const arreglo6 = [
    [2, 8, 9],
    [30, 71, 77],
    [11, 990, 41]
  ];
  
  let suma = 0;
  
  for (let i = 0; i < arreglo6.length; i++) {
    const subarregloExterno4 = arreglo6[i];
    for (let j = 0; j < subarregloExterno4.length; j++) {
      const numero1 = subarregloExterno4[j];
      suma += numero1;
    }
  }
  
  console.log(suma);
  