function obtenerMayoresDeEdad() {
    let cantidadUsuarios = parseInt(prompt("Ingrese la cantidad de usuarios:"));
    let usuariosMayoresEdad = [];
  
    for (let i = 0; i < cantidadUsuarios; i++) {
      let nombre = prompt("Ingrese el nombre del usuario " + (i + 1) + ":");
      let edad = parseInt(prompt("Ingrese la edad del usuario " + (i + 1) + ":"));
  
      if (edad >= 18) {
       usuariosMayoresEdad.push(nombre);
      }
    }
  
    console.log("Los usuarios mayores de edad son: ", usuariosMayoresEdad,);
    console.log("Cantidad de usuarios mayores de edad: ", usuariosMayoresEdad.length);
  
    return usuariosMayoresEdad;
  }
  let usuariosMayores = obtenerMayoresDeEdad();
