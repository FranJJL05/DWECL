// Obtener la caja
const caja = document.getElementById('caja');

// Obtener el botón
const btnColor = document.getElementById('btnColor');

// Agregar evento al botón
btnColor.addEventListener('click', function () {
    // Cambiar el color de fondo de la caja
    caja.style.backgroundColor = '#00f2fe';
    caja.style.transform = 'rotate(45deg)';
    caja.style.borderRadius = '50%';
});
