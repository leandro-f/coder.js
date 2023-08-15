function obtenerUsuariosRegistrados() {
    const usuariosJSON = localStorage.getItem("usuarios");
    return JSON.parse(usuariosJSON);
}

function guardarUsuariosRegistrados(usuarios) {
    const usuariosJSON = JSON.stringify(usuarios);
    localStorage.setItem("usuarios", usuariosJSON);
}