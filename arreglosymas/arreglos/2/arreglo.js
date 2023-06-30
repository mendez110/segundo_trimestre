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
  