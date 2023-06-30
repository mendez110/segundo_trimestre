function contarNumerosImpares() {
    let arregloNumeros = prompt("Ingrese los números separados por comas:").split(",").map(Number);
  
    let contadorImpares = 0;
  
    for (let i = 0; i < arregloNumeros.length; i++) {
      let numero = arregloNumeros[i];
      if (numero % 2 !== 0) {
        contadorImpares++;
      }
    }
  
    console.log("Cantidad de números impares:", contadorImpares);
  }
  
  contarNumerosImpares();
  