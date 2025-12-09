// Obtener todos los botones de eliminar
const botonesEliminar = document.querySelectorAll('.btnEliminar');

// Agregar evento a cada botón
botonesEliminar.forEach(function (boton) {
    boton.addEventListener('click', function () {
        // Obtener el elemento padre (li) del botón
        const elementoPadre = this.parentElement;

        // Eliminar el elemento padre
        elementoPadre.remove();
    });
});
