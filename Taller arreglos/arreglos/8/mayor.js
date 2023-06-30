/*8. Cree una función que reciba un arreglo de números enteros y retorne el número mayor en él. Se le
debe pedir al usuario que introduzca el arreglo*/
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
  