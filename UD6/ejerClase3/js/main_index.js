// Recuperar el usuario desde sessionStorage
function cogerIdUsuarioEncontrado() {
    const usuarioGuardado = sessionStorage.getItem("usuarioEncontrado");
    const usuarioEncontrado = JSON.parse(usuarioGuardado);
    const id = usuarioEncontrado.id;
    console.log("Este es el id del usuario encontrado:", id);
    console.log("Usuario completo:", usuarioEncontrado);
}

const main = () => {
    cogerIdUsuarioEncontrado();
}

document.addEventListener("DOMContentLoaded", main);
