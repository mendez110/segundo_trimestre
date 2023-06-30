function ordenarArreglo() {
    let arregloNumeros = prompt("Ingrese los números ");
  
    arregloNumeros.sort(function(a, b) {
      return a - b;
    });
  
    console.log("Arreglo ordenado de menor a mayor:", arregloNumeros);
  }
  
  ordenarArreglo();
  