// Obtener el elemento del párrafo
const texto = document.getElementById('texto');

// Obtener el botón
const btnCambiar = document.getElementById('btnCambiar');

// Agregar evento al botón
btnCambiar.addEventListener('click', function () {
    // Cambiar el texto del párrafo
    texto.textContent = '¡El texto ha sido cambiado!';
});
