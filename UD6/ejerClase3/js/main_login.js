import { get } from "./httpCliente.js";

// Funcion validaUsuario
const validaUsuario = (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe de forma tradicional

    const usuario = document.getElementById("nombre").value;
    const contrasenya = document.getElementById("password").value;

    const listaEstudiantes = get("http://localhost:3000/students");
    listaEstudiantes.then(students => {
        const usuarioEncontrado = students.find(student => student.name === usuario && student.email === contrasenya);
        if (usuarioEncontrado) {
            // Guardar el usuario en sessionStorage para usarlo en otras páginas
            sessionStorage.setItem("usuarioEncontrado", JSON.stringify(usuarioEncontrado));
            alert("Usuario correcto");
            window.location.href = "index.html";
        } else {
            alert("Usuario incorrecto");
            window.location.href = "login.html";
        }
    });
}

const main = () => {
    const formulario = document.querySelector("form");
    formulario.addEventListener("submit", validaUsuario);
}

document.addEventListener("DOMContentLoaded", main);