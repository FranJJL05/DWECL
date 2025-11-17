import db from './db.json' with {type: 'json'};

function crearNodos(nodePadre) {
    for (let i = 0; i < db.students.length; i++) {

        let div = document.createElement('div');

        const nombre = document.createElement('p');
        nombre.textContent = `Nombre: ${db.students[i].name}`;

        const nivel = document.createElement('p');
        nivel.textContent = `Nivel: ${db.students[i].level}`;

        div.classList.add('estudiante-card');

        div.appendChild(nombre);
        div.appendChild(nivel);
        nodePadre.appendChild(div);
    }
}

function filtrarEstudiantes() {
    const contenedor = document.getElementById('estudiante');
    const checkbox = document.getElementById('filtroActivo');

    const soloActivos = checkbox.checked;

    contenedor.innerHTML = ''; // Hay que ponerlo vacio para que solo salgan los del checkbox, sino tbm salen los de la otra función
    contenedor.className = '';

    if (soloActivos) {
        db.students = db.students.filter(student => student.active === true);

    } else {
        db.students = db.students;
        contenedor.classList.add('contenedor-estudiantes');
    }

    crearNodos(contenedor);
}

function inicar() {
    const contenedorEstudiantes = document.getElementById('estudiante');
    const filtroCheckbox = document.getElementById('filtroActivo');

    if (contenedorEstudiantes) {
        db.students = db.students;
        contenedorEstudiantes.classList.add('contenedor-estudiantes');

        crearNodos(contenedorEstudiantes);
    }

    if (filtroCheckbox) {
        filtroCheckbox.checked = false;
        filtroCheckbox.addEventListener('change', filtrarEstudiantes);
    }
}

document.addEventListener('DOMContentLoaded', inicar);