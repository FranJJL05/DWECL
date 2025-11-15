// main.js - Ejercicio 1 b)

function ejercicio1b() {
    // 1. Obtener elementos necesarios
    // La etiqueta <link> a la que le hemos puesto el ID 'tema-css'
    const linkTema = document.getElementById('tema-css'); 

    const btnNormal = document.getElementById('tema-normal-btn');
    const btnMinimalista = document.getElementById('tema-minimalista-btn');

    /**
     * Cambia la hoja de estilos externa manipulando el atributo 'href' del elemento <link>.
     * @param {string} tema - El nombre del tema ('normal' o 'minimalista').
     */
    function cambiarTema(tema) {
        let rutaCss = '';
        
        if (tema === 'normal') {
            rutaCss = 'normal.css'; // Nombre del archivo CSS normal
        } else if (tema === 'minimalista') {
            rutaCss = 'minimalista.css'; // Nombre del archivo CSS minimalista
        }

        // 2. Manipular el DOM: Cambiar el atributo href del elemento <link>
        if (linkTema && rutaCss) {
            linkTema.href = rutaCss;
            
            // Opcional: Persistir el tema en localStorage para mantener la elección del usuario
            localStorage.setItem('temaSeleccionado', tema);
            console.log(`Cambiando a tema: ${tema} (${rutaCss})`);
        }
    }

    // Código de Event Listeners e inicialización
    if (btnNormal && btnMinimalista) {
        // Event Listener para Tema Normal
        btnNormal.addEventListener('click', (evento) => {
            evento.preventDefault();
            cambiarTema('normal');
        });

        // Event Listener para Tema Minimalista
        btnMinimalista.addEventListener('click', (evento) => {
            evento.preventDefault();
            cambiarTema('minimalista');
        });

        // Inicializa la página cargando el tema guardado en localStorage o el 'normal' por defecto
        const temaInicial = localStorage.getItem('temaSeleccionado') || 'normal';
        cambiarTema(temaInicial);
    }
}


function inicializa() {
    ejercicio1b();
    console.log('Ejercicio 1b: Lógica de carga dinámica de CSS inicializada.');
}

// Aseguramos que el script se ejecute cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', inicializa);