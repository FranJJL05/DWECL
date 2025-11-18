import db from './db.json' with {type: 'json'};

const estudiantesOriginales = [...db.students]; 


function crearNodos(nodePadre) {
    nodePadre.innerHTML = ''; 

    for (let i = 0; i < db.students.length; i++) {
        let estudiante = db.students[i];
        
        let div = document.createElement('div');
        div.classList.add('estudiante-card');
        div.dataset.id = estudiante.id; 

        div.addEventListener('click', mostrarEstudianteCompleto); 

        const nombre = document.createElement('p');
        nombre.textContent = `Nombre: ${estudiante.name}`;

        const nivel = document.createElement('p');
        nivel.textContent = `Nivel: ${estudiante.level}`;

        div.appendChild(nombre);
        div.appendChild(nivel);
        nodePadre.appendChild(div);
    }
}

function mostrarEstudianteCompleto(event) {
    const estudianteId = parseInt(this.dataset.id); 

    const estudianteSeleccionado = estudiantesOriginales.find(
        student => parseInt(student.id) === estudianteId
    );

    const contenedorDetalle = document.getElementById('detalleEstudiante');
    contenedorDetalle.innerHTML = '';

    if (estudianteSeleccionado) {
        let htmlDetalles = '<h3>Datos Completos</h3>';
        
        for (const i in estudianteSeleccionado) {
            let valor = estudianteSeleccionado[i];
            
            if (i === 'active') {
                valor = valor ? 'Sí (Activo)' : 'No (Inactivo)';
            }

            htmlDetalles += `<p><strong>${i.charAt(0) + i.slice(1)}:</strong> ${valor}</p>`;
        }

        contenedorDetalle.innerHTML = htmlDetalles;
    } else {
        contenedorDetalle.innerHTML = '<p>Estudiante no encontrado.</p>';
    }
}


function filtrarEstudiantes() {
    const contenedor = document.getElementById('estudiante');
    const checkbox = document.getElementById('filtroActivo');

    const soloActivos = checkbox.checked;

    contenedor.className = '';
    contenedor.classList.add('contenedor-estudiantes'); 

    if (soloActivos) {
        db.students = estudiantesOriginales.filter(student => student.active === true);
    } else {
        db.students = estudiantesOriginales; 
    }

    crearNodos(contenedor);
}


function inicar() {
    const contenedorEstudiantes = document.getElementById('estudiante');
    const filtroCheckbox = document.getElementById('filtroActivo');

    if (contenedorEstudiantes) {
        db.students = estudiantesOriginales; 
        contenedorEstudiantes.classList.add('contenedor-estudiantes');
        crearNodos(contenedorEstudiantes);
    }

    if (filtroCheckbox) {
        filtroCheckbox.checked = false;
        filtroCheckbox.addEventListener('change', filtrarEstudiantes); 
    }
}

document.addEventListener('DOMContentLoaded', inicar);