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

const registrar_equipo = document.querySelector("#registrar_equipo");

registrar_equipo.addEventListener("click", (event) => {
    event.preventDefault();

    const usuario = datosUsuarios();

    Swal.fire({
        title: 'Confirmación',
        html: `¿Los datos son correctos?<br>
            <strong>Nombre:</strong> ${usuario.nombre}<br>
            <strong>Mail:</strong> ${usuario.mail}<br>
            <strong>Teléfono:</strong> ${usuario.telefono}<br>
            <strong>Equipo:</strong> ${usuario.equipo}<br>
            <strong>Marca:</strong> ${usuario.marca}<br>
            <strong>Modelo:</strong> ${usuario.modelo}<br>
            <strong>Problema:</strong> ${usuario.problema}`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, enviar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            if (
                usuario.nombre !== "" &&
                usuario.mail !== "" &&
                usuario.telefono !== "" &&
                usuario.equipo !== "" &&
                usuario.marca !== "" &&
                usuario.modelo !== "" &&
                usuario.problema !== ""
            ) {
                guardarEquipoRegistrado(usuario);

                const registro = document.querySelector("#h1_registro");
                const registrado = document.querySelector("#h1_registrado");
                const formulario = document.querySelector("#formulario");
                const mensaje = document.querySelector("#cont_regreso");
                const btn_inicio = document.querySelector("#btn_inicio");

                registro.classList.remove("REGISTRO");
                registro.classList.add("registro_desaparece");
                registrado.classList.remove("registrado");
                registrado.classList.add("registrado_aparece");
                formulario.classList.remove("form_visto");
                formulario.classList.add("formulario_oculto");
                Swal.fire({
                    title: 'Muchas gracias, a la brevedad nos contactaremos',
                    icon: 'success'
                });

                mensaje.classList.add("titulo")
                mensaje.innerHTML = `<h4 class: "titulo">En tu bandeja de mail recibiras tu codigo de registro</h4>`;
                mensaje.classList.remove("mensaje_oculto");
                mensaje.classList.add("mensaje_aparece");
                btn_inicio.classList.remove("cont_inicio_oculto");
                btn_inicio.classList.add("cont_inicio_aparece");
            } else {
                Swal.fire({
                    icon: 'error',
                    text: 'Completa todos los campos'
                });
            }
        }
    });
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

function guardarEquipoRegistrado(usuario) {
    const equiposRegistrados = getEquiposRegistrados();
    equiposRegistrados.push(usuario);
    localStorage.setItem('equiposRegistrados', JSON.stringify(equiposRegistrados));
}
function getEquiposRegistrados() {
    const equiposRegistradosString = localStorage.getItem('equiposRegistrados');
    return equiposRegistradosString ? JSON.parse(equiposRegistradosString) : [];
}




