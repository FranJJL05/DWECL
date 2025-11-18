// Objeto que almacena las expresiones regulares para cada campo
const reglasValidacion = {
    // Solo letras (incluye mayúsculas, minúsculas y tildes para ser flexible)
    nombre: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, 
    apellidos: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
    
    // 8 dígitos seguidos de una letra (válido para el formato español)
    dni: /^\d{8}[a-zA-Z]$/, 
    
    // 9 dígitos (formato español básico)
    telefono: /^\d{9}$/, 
    
    // Email estándar (permite letras, números, puntos, guiones y el '@' y dominio)
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    
    // Nombre de Usuario: 
    // - Debe tener al menos 8 caracteres ({8,})
    // - Debe contener al menos un número (?=.*\d)
    // - Debe contener al menos un signo de puntuación (?=.*[.,;!¡?¿-])
    // - Solo permite letras, números y signos de puntuación definidos ([a-zA-Z0-9.,;!¡?¿-])
    usuario: /^(?=.*\d)(?=.*[.,;!¡?¿-])[a-zA-Z0-9.,;!¡?¿-]{8,}$/
};

/**
 * Función que valida un campo específico usando su expresión regular.
 * @param {HTMLInputElement} inputElement El elemento input que se va a validar.
 */
function validarCampo(inputElement) {
    const id = inputElement.id;
    const valor = inputElement.value.trim();
    const spanError = document.getElementById(`error-${id}`);
    const regex = reglasValidacion[id];
    let esValido = false;

    // 1. Verificar si está vacío (obligatorio para todos)
    if (valor === "") {
        spanError.textContent = "Este campo es obligatorio.";
        inputElement.classList.remove('valido');
        inputElement.classList.add('invalido');
        return; // Salimos de la función si está vacío
    }

    // 2. Verificar la expresión regular
    if (regex && regex.test(valor)) {
        esValido = true;
    } else {
        esValido = false;
    }
    
    // 3. Mostrar el resultado de la validación
    if (esValido) {
        spanError.textContent = "✅ Correcto";
        inputElement.classList.remove('invalido');
        inputElement.classList.add('valido');
    } else {
        // Mensajes de error específicos
        let mensaje = "❌ Formato incorrecto.";
        if (id === 'dni') {
            mensaje += " Debe ser 8 dígitos y una letra (ej: 12345678A).";
        } else if (id === 'telefono') {
            mensaje += " Debe ser un número de 9 dígitos (ej: 600123456).";
        } else if (id === 'email') {
            mensaje += " Debe tener un formato de correo electrónico válido.";
        } else if (id === 'usuario') {
            mensaje += " Mínimo 8 caracteres y debe incluir un número y un signo de puntuación (ej: mi_usuario.123).";
        }
        
        spanError.textContent = mensaje;
        inputElement.classList.remove('valido');
        inputElement.classList.add('invalido');
    }
}

// Opcional: Impedir el envío del formulario si hay campos inválidos
document.getElementById('registroForm').addEventListener('submit', function(event) {
    let camposInvalidos = false;
    // Iterar sobre todos los inputs del formulario
    this.querySelectorAll('input').forEach(input => {
        validarCampo(input); // Forzamos la validación en todos al enviar
        if (input.classList.contains('invalido') || input.value.trim() === "") {
            camposInvalidos = true;
        }
    });

    if (camposInvalidos) {
        event.preventDefault(); // Detiene el envío
        alert("Por favor, corrige los campos inválidos antes de registrarte.");
    }
});