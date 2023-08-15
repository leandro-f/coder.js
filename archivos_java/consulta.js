const boton = document.querySelector("#boton");
const numeroRegistroConsulta = document.querySelector("#numeroRegistroConsulta");
const datosConsulta = document.querySelector("#datos_consulta");

boton.addEventListener("click", () => {
    const numeroRegistro = parseInt(numeroRegistroConsulta.value);

    const usuariosRegistrados = obtenerUsuariosRegistrados(); //lo estoy llamando desde el archivo de datos.js

    if (usuariosRegistrados) {
        const usuarioEncontrado = usuariosRegistrados.find(usuario => usuariosRegistrados.indexOf(usuario) + 1 === numeroRegistro);

        if (usuarioEncontrado) {
            datosConsulta.innerHTML = `
                <h2>Datos del Equipo</h2>
                <p>Nombre: ${usuarioEncontrado.nombre}</p>
                <p>Número: ${usuarioEncontrado.telefono}</p>
                <p>Equipo: ${usuarioEncontrado.equipo}</p>
                <p>Problema: ${usuarioEncontrado.problema}</p>
            `;
        } else {
            datosConsulta.innerHTML = "<p>Número de registro no encontrado.</p>";
        }
    }
});

