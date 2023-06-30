function obtenerNumeroMayor() {
    let arreglo = prompt("Ingrese los números");
  
    let numeroMayor = arreglo[0];
  
    for (let i = 1; i < arreglo.length; i++) {
      if (arreglo[i] > numeroMayor) {
        numeroMayor = arreglo[i];
      }
    }
  
    return numeroMayor;
  }
  
  let numeroMayor = obtenerNumeroMayor();
  console.log("El número mayor es:", numeroMayor);
  