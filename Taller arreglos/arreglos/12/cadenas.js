/*12. Cree una función que reciba un arreglo de cadenas de ADN (las cadenas estarán formadas por las 
letras A o C o T o G referirse a taller de ADN pasado) y muestre la cadena de ADN con mayor número 
de Timina (T). Se le debe pedir al usuario que introduzca los arreglos.
 */

function encontrarCadenaMayorTimina() {
    let arregloCadenasADN = prompt("Ingrese las cadenas de ADN separadas por comas:").split(",");
  
    let cadenaMayorTimina = "";
    let contadorMayorTimina = 0;
  
    for (let i = 0; i < arregloCadenasADN.length; i++) {
      let cadenaADN = arregloCadenasADN[i];
      let contadorTimina = 0;
  
      for (let j = 0; j < cadenaADN.length; j++) {
        if (cadenaADN[j].toUpperCase() === 'T') {
          contadorTimina++;
        }
      }
  
      if (contadorTimina > contadorMayorTimina) {
        contadorMayorTimina = contadorTimina;
        cadenaMayorTimina = cadenaADN;
      }
    }
  
    if (cadenaMayorTimina !== "") {
      console.log("Cadena de ADN con mayor número de Timina (T):", cadenaMayorTimina);
      console.log("Cantidad de Timina (T) en la cadena:", contadorMayorTimina);
    } else {
      console.log("No se encontró ninguna cadena de ADN con Timina (T).");
    }
  }
  
  encontrarCadenaMayorTimina();
  