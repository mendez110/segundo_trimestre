import { aumentarArroz, aumentarFrijoles, aumentarLentejas, aumentarJabon, aumentarLimpido, aumentarChampu, aumentarPescado, aumentarRes, aumentarCerdo, aumentarYogurt, aumentarLeche, aumentarKumis } from "./ingresar.js";
import { disminuirArroz, disminuirFrijoles, disminuirLentejas, disminuirJabon, disminuirLimpido, disminuirChampu, disminuirPescado, disminuirRes, disminuirCerdo, disminuirYogurt, disminuirLeche, disminuirKumis } from "./eliminar.js";
import { granos, aseo, carnes, lacteos } from "./disponibles.js";
import { esquema } from "./model.js";

esquema();

function start() {

  let opcion = parseInt(prompt("Seleccione que funcion quiere utilizar: Ingresar = 1 | Eliminar = 2"))
  
  switch (opcion) {
    case 1:
          let categoriasIngresar = parseInt(prompt("Seleccione una categoria: Granos = 1 | Aseo = 2 | Carnes = 3 | Lacteos = 4"))
          switch (categoriasIngresar) {
            case 1:
                    let productoGrano = parseInt(prompt("Seleccione un producto: Arroz = 1 | Frijoles = 2 | Lentejas = 3"))
                    switch (productoGrano) {
                      case 1:
                          let cantidadArroz = parseInt(prompt("Ingrese una cantidad"))
                          let ingresarArroz = aumentarArroz(cantidadArroz);
                              if (ingresarArroz == "actualizado"){
                          
                          console.log(granos());
                          }else{
                            console.log("Ocurrió un error al actualizar");
                          }
                        break;
                        case 2:
                          let cantidadFrijoles = parseInt(prompt("Ingrese una cantidad"))
                          let ingresarFrijoles = aumentarFrijoles(cantidadFrijoles);
                              if (ingresarFrijoles == "actualizado"){
                          console.log(granos());
                          }else{
                            console.log("Ocurrió un error al actualizar");
                          }
                          break;
                        case 3:
                          let cantidadLentejas = parseInt(prompt("Ingrese una cantidad"))
                          let ingresarLentejas = aumentarLentejas(cantidadLentejas);
                              if (ingresarLentejas == "actualizado"){
                          console.log(granos());
                          }else{
                            console.log("Ocurrió un error al actualizar");
                          }
                          break;
                    
                      default:
                          console.log("Gracias por usar nuestro programa");
                        break;
                    }
              break;
            case 2:
              let productoAseo = parseInt(prompt("Seleccione un producto: Jabon = 1 | Limpido = 2 | Champu = 3"))
              switch (productoAseo) {
                case 1:
                    let cantidadJabon = parseInt(prompt("Ingrese una cantidad"))
                    let ingresarJabon = aumentarJabon(cantidadJabon);
                        if (ingresarJabon == "actualizado"){
                    console.log(aseo());
                    }else{
                      console.log("Ocurrió un error al actualizar");
                    }
                  break;
                  case 2:
                    let cantidadLimpido = parseInt(prompt("Ingrese una cantidad"))
                    let ingresarLimpido = aumentarLimpido(cantidadLimpido);
                        if (ingresarLimpido == "actualizado"){
                    console.log(aseo());
                    }else{
                      console.log("Ocurrió un error al actualizar");
                    }
                    break;
                  case 3:
                    let cantidadChampu = parseInt(prompt("Ingrese una cantidad"))
                    let ingresarChampu = aumentarChampu(cantidadChampu);
                        if (ingresarChampu == "actualizado"){
                    console.log(aseo());
                    }else{
                      console.log("Ocurrió un error al actualizar");
                    }
                    break;
              
                default:
                    console.log("Gracias por usar nuestro programa");
                  break;
              }
              break;
            case 3:
              let productoCarnes = parseInt(prompt("Seleccione un producto: Pescado = 1 | Res = 2 | Cerdo = 3"))
              switch (productoCarnes) {
                case 1:
                    let cantidadPescado = parseInt(prompt("Ingrese una cantidad"))
                    let ingresarPescado = aumentarPescado(cantidadPescado);
                        if (ingresarPescado == "actualizado"){
                    console.log(carnes());
                    }else{
                      console.log("Ocurrió un error al actualizar");
                    }
                  break;
                  case 2:
                    let cantidadRes = parseInt(prompt("Ingrese una cantidad"))
                    let ingresarRes = aumentarRes(cantidadRes);
                        if (ingresarRes == "actualizado"){
                    console.log(carnes());
                    }else{
                      console.log("Ocurrió un error al actualizar");
                    }
                    break;
                  case 3:
                    let cantidadCerdo = parseInt(prompt("Ingrese una cantidad"))
                    let ingresarCerdo = aumentarCerdo(cantidadCerdo);
                        if (ingresarCerdo == "actualizado"){
                    console.log(carnes());
                    }else{
                      console.log("Ocurrió un error al actualizar");
                    }
                    break;
              
                default:
                    console.log("Gracias por usar nuestro programa");
                  break;
              }
              break;
            case 4:
              let productoLacteos = parseInt(prompt("Seleccione un producto: Yogurt = 1 | Leche = 2 | Kumis = 3"))
              switch (productoLacteos) {
                case 1:
                    let cantidadYogurt = parseInt(prompt("Ingrese una cantidad"))
                    let ingresarYogurt = aumentarYogurt(cantidadYogurt);
                        if (ingresarYogurt == "actualizado"){
                    console.log(lacteos());
                    }else{
                      console.log("Ocurrió un error al actualizar");
                    }
                  break;
                  case 2:
                    let cantidadLeche = parseInt(prompt("Ingrese una cantidad"))
                    let ingresarLeche = aumentarLeche(cantidadLeche);
                        if (ingresarLeche == "actualizado"){
                    console.log(lacteos());
                    }else{
                      console.log("Ocurrió un error al actualizar");
                    }
                    break;
                  case 3:
                    let cantidadKumis = parseInt(prompt("Ingrese una cantidad"))
                    let ingresarKumis = aumentarKumis(cantidadKumis);
                        if (ingresarKumis == "actualizado"){
                    console.log(lacteos());
                    }else{
                      console.log("Ocurrió un error al actualizar");
                    }
                    break;
              
                default:
                    console.log("Gracias por usar nuestro programa");
                  break;
              }
              break; 

            default:
              console.log("Gracias por usar nuestro programa");
              break;
          }
      break;

    case 2:
      let categoriasEliminar = parseInt(prompt("Seleccione una categoria: Granos = 1 | Aseo = 2 | Carnes = 3 | Lacteos = 4"))
      switch (categoriasEliminar) {
        case 1:
                let productoGrano = parseInt(prompt("Seleccione un producto: Arroz = 1 | Frijoles = 2 | Lentejas = 3"))
                switch (productoGrano) {
                  case 1:
                      let cantidadArroz = parseInt(prompt("Ingrese una cantidad"))
                      let ingresarArroz = disminuirArroz(cantidadArroz);
                          if (ingresarArroz == "actualizado"){
                      console.log(granos());
                      }else{
                        console.log("Ocurrió un error al actualizar");
                      }
                    break;
                    case 2:
                      let cantidadFrijoles = parseInt(prompt("Ingrese una cantidad"))
                      let ingresarFrijoles = disminuirFrijoles(cantidadFrijoles);
                          if (ingresarFrijoles == "actualizado"){
                      console.log(granos());
                      }else{
                        console.log("Ocurrió un error al actualizar");
                      }
                      break;
                    case 3:
                      let cantidadLentejas = parseInt(prompt("Ingrese una cantidad"))
                      let ingresarLentejas = disminuirLentejas(cantidadLentejas);
                          if (ingresarLentejas == "actualizado"){
                      console.log(granos());
                      }else{
                        console.log("Ocurrió un error al actualizar");
                      }
                      break;
                
                  default:
                      console.log("Gracias por usar nuestro programa");
                    break;
                }
          break;
        case 2:
          let productoAseo = parseInt(prompt("Seleccione un producto: Jabon = 1 | Limpido = 2 | Champu = 3"))
          switch (productoAseo) {
            case 1:
                let cantidadJabon = parseInt(prompt("Ingrese una cantidad"))
                let ingresarJabon = disminuirJabon(cantidadJabon);
                    if (ingresarJabon == "actualizado"){
                console.log(aseo());
                }else{
                  console.log("Ocurrió un error al actualizar");
                }
              break;
              case 2:
                let cantidadLimpido = parseInt(prompt("Ingrese una cantidad"))
                let ingresarLimpido = disminuirLimpido(cantidadLimpido);
                    if (ingresarLimpido == "actualizado"){
                console.log(aseo());
                }else{
                  console.log("Ocurrió un error al actualizar");
                }
                break;
              case 3:
                let cantidadChampu = parseInt(prompt("Ingrese una cantidad"))
                let ingresarChampu = disminuirChampu(cantidadChampu);
                    if (ingresarChampu == "actualizado"){
                console.log(aseo());
                }else{
                  console.log("Ocurrió un error al actualizar");
                }
                break;
          
            default:
                console.log("Gracias por usar nuestro programa");
              break;
          }
          break;
        case 3:
          let productoCarnes = parseInt(prompt("Seleccione un producto: Pescado = 1 | Res = 2 | Cerdo = 3"))
          switch (productoCarnes) {
            case 1:
                let cantidadPescado = parseInt(prompt("Ingrese una cantidad"))
                let ingresarPescado = disminuirPescado(cantidadPescado);
                    if (ingresarPescado == "actualizado"){
                console.log(carnes());
                }else{
                  console.log("Ocurrió un error al actualizar");
                }
              break;
              case 2:
                let cantidadRes = parseInt(prompt("Ingrese una cantidad"))
                let ingresarRes = disminuirRes(cantidadRes);
                    if (ingresarRes == "actualizado"){
                console.log(carnes());
                }else{
                  console.log("Ocurrió un error al actualizar");
                }
                break;
              case 3:
                let cantidadCerdo = parseInt(prompt("Ingrese una cantidad"))
                let ingresarCerdo = disminuirCerdo(cantidadCerdo);
                    if (ingresarCerdo == "actualizado"){
                console.log(carnes());
                }else{
                  console.log("Ocurrió un error al actualizar");
                }
                break;
          
            default:
                console.log("Gracias por usar nuestro programa");
              break;
          }
          break;
        case 4:
          let productoLacteos = parseInt(prompt("Seleccione un producto: Yogurt = 1 | Leche = 2 | Kumis = 3"))
          switch (productoLacteos) {
            case 1:
                let cantidadYogurt = parseInt(prompt("Ingrese una cantidad"))
                let ingresarYogurt = disminuirYogurt(cantidadYogurt);
                    if (ingresarYogurt == "actualizado"){
                console.log(lacteos());
                }else{
                  console.log("Ocurrió un error al actualizar");
                }
              break;
              case 2:
                let cantidadLeche = parseInt(prompt("Ingrese una cantidad"))
                let ingresarLeche = disminuirLeche(cantidadLeche);
                    if (ingresarLeche == "actualizado"){
                console.log(lacteos());
                }else{
                  console.log("Ocurrió un error al actualizar");
                }
                break;
              case 3:
                let cantidadKumis = parseInt(prompt("Ingrese una cantidad"))
                let ingresarKumis = disminuirKumis(cantidadKumis);
                    if (ingresarKumis == "actualizado"){
                console.log(lacteos());
                }else{
                  console.log("Ocurrió un error al actualizar");
                }
                break;
          
            default:
                console.log("Gracias por usar nuestro programa");
              break;
          }
          break; 

        default:
          console.log("Gracias por usar nuestro programa");
          break;
      }
    break;

    default:
      console.log("Gracias por usar nuestro programa");
      break;
  }
}

start();