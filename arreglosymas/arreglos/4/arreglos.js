function mostrarNumerosPrimos(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
      let numero = arreglo[i];
      let esPrimo = true;
  
      if (numero < 2) {
        esPrimo = false;
      } else {
        for (let j = 2; j <= Math.sqrt(numero); j++) {
          if (numero % j === 0) {
            esPrimo = false;
            break;
          }
        }
      }
  
      if (esPrimo) {
        console.log(numero);
      }
    }
  }
  numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  mostrarNumerosPrimos(numeros);
    