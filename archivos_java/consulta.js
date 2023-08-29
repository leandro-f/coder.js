import { usuariosRegistrados } from './usuarios.js';


const boton = document.querySelector("#boton");
const numeroRegistroConsulta = document.querySelector("#numeroRegistroConsulta");
const datosConsulta = document.querySelector("#datos_consulta"); 


function buscarUsuarioPorNumeroRegistro(numeroRegistro) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usuarioEncontrado = usuariosRegistrados.find(usuario => usuario.numeroRegistro === numeroRegistro);
            resolve(usuarioEncontrado);
        }, 1000);
    });
}

boton.addEventListener("click", () => {
    const numeroRegistro = parseInt(numeroRegistroConsulta.value);

    buscarUsuarioPorNumeroRegistro(numeroRegistro)
        .then(usuarioEncontrado => {
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

                const reporteTecnico = document.querySelector("#reporte_tecnico");
                reporteTecnico.innerHTML = "";
                reporteTecnico.classList.remove("part_tecnico");
            }
        })
        .catch(error => {
            console.error("Error al buscar usuario:", error);
        });
});





