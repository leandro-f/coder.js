
import usuariosRegistrados from "./usuarios";

const boton = document.querySelector("#boton");
const numeroRegistroConsulta = document.querySelector("#numeroRegistroConsulta");
const datosConsulta = document.querySelector("#datos_consulta"); 

boton.addEventListener("click", () => {
    const numeroRegistro = parseInt(numeroRegistroConsulta.value);

    if (usuariosRegistrados) {
        const usuarioEncontrado = usuariosRegistrados.find(usuario => usuariosRegistrados.indexOf(usuario) + 1 === numeroRegistro);

        if (usuarioEncontrado) {
            
            datosConsulta.innerHTML = `
                <h2>Datos del Equipo</h2>
                <p>Número de Registro: ${numeroRegistro}</p>
                <p>Usuario: ${usuarioEncontrado.nombre}</p>
                <p>Correo Electrónico: ${usuarioEncontrado.mail}</p>
                <p>Teléfono: ${usuarioEncontrado.telefono}</p>
               
            `;

            
            const reporteTecnico = document.querySelector("#reporte_tecnico");
            reporteTecnico.classList.add("part_tecnico")
            reporteTecnico.innerHTML = `
                <h2>Informe Técnico</h2>
                <p> listo para retirar</p>
            `;
        } else {
            datosConsulta.innerHTML = "<p>Número de registro no encontrado.</p>";
        }
    }
});






