function compararPromedioArreglos() {
    let arreglo1 = prompt("Ingrese los números del primer arreglo separados por comas:").split(",").map(Number);
    let arreglo2 = prompt("Ingrese los números del segundo arreglo separados por comas:").split(",").map(Number);
  
    let promedioArreglo1 = calcularPromedio(arreglo1);
    let promedioArreglo2 = calcularPromedio(arreglo2);
  
    if (promedioArreglo1 > promedioArreglo2) {
      console.log("El primer arreglo tiene un promedio mayor:", promedioArreglo1);
    } else if (promedioArreglo2 > promedioArreglo1) {
      console.log("El segundo arreglo tiene un promedio mayor:", promedioArreglo2);
    } else {
      console.log("Ambos arreglos tienen el mismo promedio:", promedioArreglo1);
    }
  }
  
  function calcularPromedio(arreglo) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
      suma += arreglo[i];
    }
    return suma / arreglo.length;
  }
  
  compararPromedioArreglos();
  