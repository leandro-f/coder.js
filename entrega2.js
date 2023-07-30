class Usuario {
    constructor(nombre, marca, modelo, problema, contacto) {
      this.nombre = nombre;
      this.marca = marca;
      this.modelo = modelo;
      this.problema = problema;
      this.contacto = contacto;
    }
  }
  
  function obtenerDatosUsuario() {
    const nombreUsuario = prompt("¿Cuál es tu nombre?");
    const marcaCelular = prompt("¿Cuál es la marca de tu celular?");
    const modeloCelular = prompt("¿Cuál es tu modelo?");
    const problemaUsuario = prompt("¿Cuál es el problema con tu celular?");
    const contactoUsuario = prompt("dejanos tu mail o numero para contactarnos")
  
    return new Usuario(nombreUsuario, marcaCelular, modeloCelular, problemaUsuario, contactoUsuario);
  }
  
  let tieneOtroCelular = true;
  const usuarios = [];
  
  while (tieneOtroCelular) {
    const usuario = obtenerDatosUsuario();
    usuarios.push(usuario);
  
    const respuesta = prompt("¿Tienes otro celular? ('si' o 'no')").toLowerCase();
    if (respuesta   === "no") {
      tieneOtroCelular = false;
    }
  }
  
  alert("resumen de tus datos");
  
  for(const usuario of usuarios){
    alert(
      "\nNombre: " + usuario.nombre + 
      "\nMarca: " + usuario.marca +
      "\nModelo: " +  usuario.modelo +
      "\nProblema: " + usuario.problema +
      "\nContacto: " + usuario.contacto
    );
  }
  
  const confirmacion = prompt("Es correcta la informacion? ('si' o 'no')");
  if (confirmacion === "si"){
    alert("Nos estaremos contactando.Muchas gracias");
  }else{
    usuarios.length = 0;
    tieneOtroCelular = true;
  }
  
  
  
  console.log("Usuarios registrados:");
  console.log(usuarios);