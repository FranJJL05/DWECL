// Obtener la lista
const lista = document.getElementById('lista');

// Obtener el botón
const btnAñadir = document.getElementById('btnAñadir');

// Contador para los elementos
let contador = 3;

// Agregar evento al botón
btnAñadir.addEventListener('click', function () {
    // Crear un nuevo elemento li
    const nuevoElemento = document.createElement('li');

    // Establecer el texto del nuevo elemento
    nuevoElemento.textContent = 'Elemento ' + contador;

    // Añadir el nuevo elemento a la lista
    lista.appendChild(nuevoElemento);

    // Incrementar el contador
    contador++;
});
