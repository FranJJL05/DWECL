const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const comentario = document.getElementById('comentario');
const enviar = document.getElementById('enviar');
const resetear = document.getElementById('resetear');
const ayuda = document.getElementById('ayuda');

// Función para mostrar ayuda
function mostrarAyuda(mensaje) {
    ayuda.textContent = mensaje;
}

// Función para ocultar ayuda
function ocultarAyuda() {
    ayuda.textContent = '';
}

// Añadimos eventos focus y blur a cada elemento
nombre.addEventListener('focus', (evento) => 
    mostrarAyuda('Introduce tu nombre completo.'
));
nombre.addEventListener('blur', ocultarAyuda);

correo.addEventListener('focus', (evento) => 
    mostrarAyuda('Introduce tu correo electrónico.'
));
correo.addEventListener('blur', ocultarAyuda);

comentario.addEventListener('focus', (evento) => 
    mostrarAyuda('Escribe aquí tu comentario.'
));
comentario.addEventListener('blur', ocultarAyuda);

enviar.addEventListener('focus', (evento) => 
    mostrarAyuda('Pulsa para enviar el formulario.'
));
enviar.addEventListener('blur', ocultarAyuda);

resetear.addEventListener('focus', (evento) => 
    mostrarAyuda('Pulsa para limpiar todos los campos.'
));
resetear.addEventListener('blur', ocultarAyuda);


document.getElementById('formulario').addEventListener('submit', (evento) => {
    evento.preventDefault();
    alert('Formulario enviado.');
});