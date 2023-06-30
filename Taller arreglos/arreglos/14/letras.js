/*14. Cree una función que reciba un arreglo de letras no repetidas y lo retorne ordenado alfabéticamente.
Se le debe pedir al usuario que introduzca el arreglo. */
function ordenarArreglo() {
    let arregloLetras = prompt("Ingrese las letras ");
  
    arregloLetras.sort();
  
    console.log("Arreglo ordenado alfabéticamente:", arregloLetras);
  }
  
  ordenarArreglo();
  