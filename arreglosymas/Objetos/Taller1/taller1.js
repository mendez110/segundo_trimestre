function Ejercicio1() {
    let supermercado = {
        Papa: 3500,
        Arroz: 2500,
        Lentejas: 3400,
        Aceite: 4700
      };
      
      for (let producto in supermercado) {
        console.log(producto,": " ,supermercado[producto]);
      }
      
}
function Ejercicio2() {
    let objeto = {};

objeto.animal1 = "Perro";
objeto.animal2 = "Gato";
objeto.animal3 = "Conejo";

console.log(objeto);

}
function Ejercicio3() {
    let objeto = {
        password: "admin30905",
        rol: "admin",
        edad: 20
      };
      
      objeto.password = "user_7833";
      objeto.rol = "user";
      objeto.edad = 34;
      
      console.log(objeto);
      
}
function Ejercicio4() {
    let objeto = {
        "dos": 2,
        "cinco": 5,
        "siete": 7,
        "cuarenta": 40,
        "cincuenta": 50
      };
      
      for (let clave in objeto) {
        if (objeto[clave] % 2 === 0) {
          console.log(clave,":" , objeto[clave]);
        }
      }
      
}

function Ejercicio5() {
    let objeto = {
        183344: "habilitado",
        354625: "habilitado",
        6762442: "inhabilitado",
        88552: "inhabilitado",
        438276: "habilitado"
      };
      
      let usuariosHabilitados = 0;
      
      for (let clave in objeto) {
        if (objeto[clave] === "habilitado") {
          usuariosHabilitados++;
        }
      }
      
      console.log("Usuarios habilitados: ", usuariosHabilitados);
      
}
function Ejercicio6() {
    let objeto = { numeros: [45, 78, 22, 89, 8] };

 for (let numero of objeto.numeros) {
  console.log(numero);
}

}
function Ejercicio7() {
    let objeto = { 3: "tres", 60: "sesenta", 10: "diez" };

delete objeto[60];
console.log(objeto);
}
function Ejercicio8() {
    let objeto = {
        162544: { nombres: "Pepe", apellidos: "Perez", edad: 40 },
        4357262: { nombres: "Maria", apellidos: "Gomez", edad: 31 },
        786353: { nombres: "Raul", apellidos: "Castro", edad: 80 }
      };
      
      for (let clave1 in objeto) {
        console.log("Identificador externo: " ,clave1);
        console.log("Valores internos:");
      
        for (let clave2 in objeto[clave1]) {
          console.log(clave2,": ", objeto[clave1][clave2]);
        }
        console.log("---------------------");
      }
      
}
 