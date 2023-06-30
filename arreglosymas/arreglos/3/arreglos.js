function encontrarNumeroMenor(arreglo) {
    if (arreglo.length === 0) {
      return null; 
    }
  
    var menor = arreglo[0]; 
  
    for (var i = 1; i < arreglo.length; i++) {
      if (arreglo[i] < menor) {
        menor = arreglo[i]; 
      }
    }
  
    return menor; 
  }
let numeros = [5, 3, 9, 2, 1];
numeros.push(0)
let menorNumero = encontrarNumeroMenor(numeros);
console.log(menorNumero); 
