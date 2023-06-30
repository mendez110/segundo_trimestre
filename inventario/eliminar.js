function disminuirArroz(cantidad) {
  
    let Mostrarcantidad = localStorage.getItem("arroz");
    localStorage.setItem("arroz", parseInt(Mostrarcantidad) - cantidad);
    return "actualizado";
  }
  
  function disminuirFrijoles(cantidad) {
  
    let Mostrarcantidad = localStorage.getItem("frijoles");
    localStorage.setItem("frijoles", parseInt(Mostrarcantidad) - cantidad);
    return "actualizado";
  }
  
  function disminuirLentejas(cantidad) {
  
    let Mostrarcantidad = localStorage.getItem("lentejas");
    localStorage.setItem("lentejas", parseInt(Mostrarcantidad) - cantidad);
    return "actualizado";
  }
  
  function disminuirJabon(cantidad) {
  
    let Mostrarcantidad = localStorage.getItem("jabon");
    localStorage.setItem("jabon", parseInt(Mostrarcantidad) - cantidad);
    return "actualizado";
  }
  
  function disminuirLimpido(cantidad) {
  
    let Mostrarcantidad = localStorage.getItem("limpido");
    localStorage.setItem("limpido", parseInt(Mostrarcantidad) - cantidad);
    return "actualizado";
  }
  
  function disminuirChampu(cantidad) {
  
    let Mostrarcantidad = localStorage.getItem("champu");
    localStorage.setItem("champu", parseInt(Mostrarcantidad) - cantidad);
    return "actualizado";
  }
  
  function disminuirPescado(cantidad) {
  
    let Mostrarcantidad = localStorage.getItem("pescado");
    localStorage.setItem("pescado", parseInt(Mostrarcantidad) - cantidad);
    return "actualizado";
  }
  
  function disminuirRes(cantidad) {
  
    let Mostrarcantidad = localStorage.getItem("res");
    localStorage.setItem("res", parseInt(Mostrarcantidad) - cantidad);
    return "actualizado";
  }
  
  function disminuirCerdo(cantidad) {
  
    let Mostrarcantidad = localStorage.getItem("cerdo");
    localStorage.setItem("cerdo", parseInt(Mostrarcantidad) - cantidad);
    return "actualizado";
  }
  
  function disminuirYogurt(cantidad) {
  
    let Mostrarcantidad = localStorage.getItem("yogurt");
    localStorage.setItem("yogurt", parseInt(Mostrarcantidad) - cantidad);
    return "actualizado";
  }
  
  function disminuirLeche(cantidad) {
  
    let Mostrarcantidad = localStorage.getItem("leche");
    localStorage.setItem("leche", parseInt(Mostrarcantidad) - cantidad);
    return "actualizado";
  }
  
  function disminuirKumis(cantidad) {
  
    let Mostrarcantidad = localStorage.getItem("kumis");
    localStorage.setItem("kumis", parseInt(Mostrarcantidad) - cantidad);
    return "actualizado";
  }
  
  
  
  
  export {disminuirArroz, disminuirFrijoles, disminuirLentejas, disminuirJabon, disminuirLimpido, disminuirChampu, disminuirPescado, disminuirRes, disminuirCerdo, disminuirYogurt, disminuirLeche, disminuirKumis};