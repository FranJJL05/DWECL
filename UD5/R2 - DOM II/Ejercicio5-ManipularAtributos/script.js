// Obtener la imagen
const imagen = document.getElementById('imagen');

// Obtener el botón
const btnCambiar = document.getElementById('btnCambiar');

// Variable para controlar qué imagen se muestra
let imagenActual = 1;

// Agregar evento al botón
btnCambiar.addEventListener('click', function () {
    if (imagenActual === 1) {
        // Cambiar a la imagen 2
        imagen.src = 'https://via.placeholder.com/300x200/f093fb/ffffff?text=Imagen+2';
        imagen.alt = 'Segunda imagen';
        imagenActual = 2;
    } else {
        // Volver a la imagen 1
        imagen.src = 'https://via.placeholder.com/300x200/667eea/ffffff?text=Imagen+1';
        imagen.alt = 'Imagen de ejemplo';
        imagenActual = 1;
    }
});
