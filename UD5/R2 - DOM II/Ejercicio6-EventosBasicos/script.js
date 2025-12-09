// Obtener el input
const entrada = document.getElementById('entrada');

// Obtener el párrafo donde se mostrará el resultado
const resultado = document.getElementById('resultado');

// Agregar evento de input (se ejecuta cada vez que escribes)
entrada.addEventListener('input', function () {
    // Obtener el valor del input
    const texto = entrada.value;

    // Mostrar el texto en el párrafo
    if (texto === '') {
        resultado.textContent = 'Tu texto aparecerá aquí';
    } else {
        resultado.textContent = texto;
    }
});
