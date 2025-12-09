import {get} from "./httpCliente.js";

// Recuperar el usuario desde sessionStorage
function cogerIdUsuarioEncontrado() {
    const usuarioGuardado = sessionStorage.getItem("usuarioEncontrado");
    const usuarioEncontrado = JSON.parse(usuarioGuardado);
    const id = usuarioEncontrado.id;
    console.log("Este es el id del usuario encontrado:", id);
    console.log("Usuario completo:", usuarioEncontrado);
}

function matricularUsuarioEnCurso() {
    const usuario = JSON.parse(sessionStorage.getItem("usuarioEncontrado"));
    const titulo = document.querySelector("h1");
    titulo.insertAdjacentHTML("afterend", `
    <h2>Hola ${usuario.name}</h2>
    <label>Curso:
        <select id="cursoSelect"></select>
    </label>
    <button id="matricularBtn">Matricular</button>
    <p id="msg"></p>
    `);

    // 2. Cargar cursos en el <select>
    get("http://localhost:3000/courses").then(cursos => {
        const sel = document.getElementById("cursoSelect");
        cursos.forEach(c => {
            sel.innerHTML += `<option value="${c.id}">${c.title} (${c.level}, ${c.duration})</option>`;
        });
    });

    // 3. Botón matricular
    document.getElementById("matricularBtn").addEventListener("click", () => {
        const courseId = document.getElementById("cursoSelect").value;
        const nuevaInscripcion = {
            studentId: Number(usuario.id),
            courseId: Number(courseId),
            enrollmentDate: new Date().toISOString().slice(0, 10),
            progress: 0,
            completed: false
        };

        fetch("http://localhost:3000/enrollments", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(nuevaInscripcion)
        })
            .then(res => res.json())
            .then(() => {
                document.getElementById("msg").textContent = "¡Matriculado!";
            })
            .catch(() => {
                document.getElementById("msg").textContent = "Error al matricular";
            });
    });
}

const main = () => {
    cogerIdUsuarioEncontrado();
    matricularUsuarioEnCurso();
}

document.addEventListener("DOMContentLoaded", main);
