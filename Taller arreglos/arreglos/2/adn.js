/*2. Dado el arreglo de cadenas de ADN [“AATGAAC”, “GTTTTTC”, “GGTAAA”, “CCCCATGGG”]
cree una función que reciba como argumento tal arreglo y muestre las cadenas de una sola base
(cadenas formadas solo de A, o solo de T, o solo de C o solo de G) que se pueden formar entre todos los
elementos del arreglo.*/

function obtenerCadenasUnaBase(arregloADN) {
    let cadenasUnaBase = [];
  
    for (let i = 0; i < arregloADN.length; i++) {
      let cadena = arregloADN[i];
      let todasIguales = true;
  
      for (let j = 0; j < cadena.length; j++) {
        if (cadena[j] !== cadena[0]) {
          todasIguales = false;
          break;
        }
      }
  
      if (todasIguales) {
        cadenasUnaBase.push(cadena);
      }
    }
  
    return cadenasUnaBase;
  }
  
  let arregloADN = ["AATGAAC", "GTTTTTC", "GGTAAA", "CCCCATGGG"];
  let cadenasUnaBase = obtenerCadenasUnaBase(arregloADN);
  
  console.log(cadenasUnaBase);
  