class PlantillaUsuario {
    constructor(nombre, mail, telefono, equipo, marca, modelo, problema) {
        this.nombre = nombre;
        this.mail = mail;
        this.telefono = telefono;
        this.equipo = equipo;
        this.marca = marca;
        this.modelo = modelo;
        this.problema = problema;
    }
}

const usuariosRegistrados = obtenerUsuariosRegistrados() || [];
/* const usuariosRegistrados = [];  */

const registrar_equipo = document.querySelector("#registrar_equipo");

registrar_equipo.addEventListener("click", (event) => {
    event.preventDefault();

    const usuario = datosUsuarios();

    if (
        usuario.nombre === "" ||
        usuario.mail === "" ||
        usuario.telefono === "" ||
        usuario.equipo === "" ||
        usuario.marca === "" ||
        usuario.modelo === "" ||
        usuario.problema === ""
    ) {
        alert("Todos los campos deben completarse.");
    } else {
        const confirmacion = confirm("¿Los datos son correctos?\nNombre: " + usuario.nombre + "\nMail: " + usuario.mail + "\nTeléfono: " + usuario.telefono + "\nEquipo: " + usuario.equipo + "\nMarca: " + usuario.marca + "\nModelo: " + usuario.modelo + "\nProblema: " + usuario.problema);
        
        if (confirmacion) {
            usuariosRegistrados.push(usuario);
            guardarUsuariosRegistrados(usuariosRegistrados);


            const registro = document.querySelector("#h1_registro")
            const registrado = document.querySelector("#h1_registrado")
            const formulario = document.querySelector("#formulario");
            const mensaje = document.querySelector("#cont_regreso");
            const numeroRegistro = usuariosRegistrados.length;
            const btn_inicio = document.querySelector("#btn_inicio");


            registro.classList.remove("REGISTRO")
            registro.classList.add("registro_desaparece")
            registrado.classList.remove("registrado")
            registrado.classList.add("registrado_aparece")
            formulario.classList.remove("form_visto");
            formulario.classList.add("formulario_oculto");
            mensaje.innerHTML = `<h4>Lo estaremos contactando. Tu número de registro es: ${numeroRegistro}</h4>`;
            mensaje.classList.remove("mensaje_oculto");
            mensaje.classList.add("mensaje_aparece");
            btn_inicio.classList.remove("cont_inicio_oculto");
            btn_inicio.classList.add("cont_inicio_aparece")
        }
    }
});

function datosUsuarios() {
    const nombreUsuario = document.querySelector("#nombre").value;
    const mailUsuario = document.querySelector("#mail").value;
    const telefonoUsuario = document.querySelector("#telefono").value;
    const equipoUsuario = document.querySelector("#equipo").value;
    const marcaUsuario = document.querySelector("#marca").value;
    const modeloUsuario = document.querySelector("#modelo").value;
    const problemaUsuario = document.querySelector("#problema").value;

    return new PlantillaUsuario(nombreUsuario, mailUsuario, telefonoUsuario, equipoUsuario, marcaUsuario, modeloUsuario, problemaUsuario);
}

/* function obtenerUsuariosRegistrados() {
    const usuariosJSON = localStorage.getItem("usuarios");
    return JSON.parse(usuariosJSON);
}

function guardarUsuariosRegistrados(usuarios) {
    const usuariosJSON = JSON.stringify(usuarios);
    localStorage.setItem("usuarios", usuariosJSON);
} */

