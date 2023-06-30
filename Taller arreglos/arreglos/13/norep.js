/*13. Cree una función que reciba un arreglo de números enteros no repetidos y lo retorne ordenado de
menor a mayor según el valor de tales elementos. Se le debe pedir al usuario que introduzca el arreglo */
function ordenarArreglo() {
    let arregloNumeros = prompt("Ingrese los números ");
  
    arregloNumeros.sort(function(a, b) {
      return a - b;
    });
  
    console.log("Arreglo ordenado de menor a mayor:", arregloNumeros);
  }
  
  ordenarArreglo();
  