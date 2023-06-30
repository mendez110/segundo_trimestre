function aumentarArroz(cantidad) {

  let Mostrarcantidad = localStorage.getItem("arroz");
  localStorage.setItem("arroz", parseInt(Mostrarcantidad) + cantidad);
  return "actualizado";
}

function aumentarFrijoles(cantidad) {

  let Mostrarcantidad = localStorage.getItem("frijoles");
  localStorage.setItem("frijoles", parseInt(Mostrarcantidad) + cantidad);
  return "actualizado";
}

function aumentarLentejas(cantidad) {

  let Mostrarcantidad = localStorage.getItem("lentejas");
  localStorage.setItem("lentejas", parseInt(Mostrarcantidad) + cantidad);
  return "actualizado";
}

function aumentarJabon(cantidad) {

  let Mostrarcantidad = localStorage.getItem("jabon");
  localStorage.setItem("jabon", parseInt(Mostrarcantidad) + cantidad);
  return "actualizado";
}

function aumentarLimpido(cantidad) {

  let Mostrarcantidad = localStorage.getItem("limpido");
  localStorage.setItem("limpido", parseInt(Mostrarcantidad) + cantidad);
  return "actualizado";
}

function aumentarChampu(cantidad) {

  let Mostrarcantidad = localStorage.getItem("champu");
  localStorage.setItem("champu", parseInt(Mostrarcantidad) + cantidad);
  return "actualizado";
}

function aumentarPescado(cantidad) {

  let Mostrarcantidad = localStorage.getItem("pescado");
  localStorage.setItem("pescado", parseInt(Mostrarcantidad) + cantidad);
  return "actualizado";
}

function aumentarRes(cantidad) {

  let Mostrarcantidad = localStorage.getItem("res");
  localStorage.setItem("res", parseInt(Mostrarcantidad) + cantidad);
  return "actualizado";
}

function aumentarCerdo(cantidad) {

  let Mostrarcantidad = localStorage.getItem("cerdo");
  localStorage.setItem("cerdo", parseInt(Mostrarcantidad) + cantidad);
  return "actualizado";
}

function aumentarYogurt(cantidad) {

  let Mostrarcantidad = localStorage.getItem("yogurt");
  localStorage.setItem("yogurt", parseInt(Mostrarcantidad) + cantidad);
  return "actualizado";
}

function aumentarLeche(cantidad) {

  let Mostrarcantidad = localStorage.getItem("leche");
  localStorage.setItem("leche", parseInt(Mostrarcantidad) + cantidad);
  return "actualizado";
}

function aumentarKumis(cantidad) {

  let Mostrarcantidad = localStorage.getItem("kumis");
  localStorage.setItem("kumis", parseInt(Mostrarcantidad) + cantidad);
  return "actualizado";
}




export {aumentarArroz, aumentarFrijoles, aumentarLentejas, aumentarJabon, aumentarLimpido, aumentarChampu, aumentarPescado, aumentarRes, aumentarCerdo, aumentarYogurt, aumentarLeche, aumentarKumis};