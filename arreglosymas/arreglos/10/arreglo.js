function verificarLetraC() {
    let arregloNombres = prompt("Ingrese los nombres separados por comas:").split(",");
  
    let contadorLetraC = 0;
  
    for (let i = 0; i < arregloNombres.length; i++) {
      let nombre = arregloNombres[i];
      for (let j = 0; j < nombre.length; j++) {
        if (nombre[j].toLowerCase() === 'c') {
          contadorLetraC++;
        }
      }
    }
  
    if (contadorLetraC > 0) {
      console.log("La letra 'c' se encuentra en los nombres.");
      console.log("Cantidad de veces que se encuentra la letra 'c':", contadorLetraC);
    } else {
      console.log("La letra 'c' no se encuentra en los nombres.");
    }
  }
  
  verificarLetraC();
  