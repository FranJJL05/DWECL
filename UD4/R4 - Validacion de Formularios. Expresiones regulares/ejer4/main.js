// --- 1. Expresiones Regulares ---
const regex = {
    // Solo letras (mayúsculas, minúsculas, acentos, ñ) y espacios.
    name: /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/, 
    
    // Formato de email estándar.
    email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,

    // Teléfono: exactamente 9 dígitos.
    phone: /^\d{9}$/, 

    // Contraseña:
    // ^(?=.*[a-z])    -> Debe contener al menos 1 minúscula
    // (?=.*[A-Z])    -> Debe contener al menos 1 mayúscula
    // (?=.*[0-9])    -> Debe contener al menos 1 dígito
    // (?=.{8,})      -> Debe tener un mínimo de 8 caracteres
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/
};

// --- 2. Referencias del DOM ---
const form = document.getElementById('registrationForm');
const fields = {
    firstName: document.getElementById('firstName'),
    lastName: document.getElementById('lastName'),
    email: document.getElementById('email'),
    phone: document.getElementById('phone'),
    password: document.getElementById('password'),
    confirmPassword: document.getElementById('confirmPassword'),
    terms: document.getElementById('terms')
};
const errorMessages = {
    firstName: document.getElementById('errorFirstName'),
    lastName: document.getElementById('errorLastName'),
    email: document.getElementById('errorEmail'),
    phone: document.getElementById('errorPhone'),
    password: document.getElementById('errorPassword'),
    confirmPassword: document.getElementById('errorConfirmPassword'),
    terms: document.getElementById('errorTerms')
};
const submitButton = document.querySelector('.submit-btn');

// --- 3. Mensajes de Error Explícitos ---
const errorMsgs = {
    required: 'Este campo es obligatorio.',
    firstName: 'El nombre solo puede contener letras y espacios.',
    lastName: 'El apellido solo puede contener letras y espacios.',
    email: 'El formato de correo es incorrecto (ej: usuario@dominio.com).',
    phone: 'El teléfono debe tener exactamente 9 dígitos numéricos.',
    password: 'La contraseña debe tener: Mín. 8 caracteres, 1 mayúscula, 1 minúscula y 1 dígito.',
    confirmPasswordMismatch: 'Las contraseñas no coinciden.',
    terms: 'Debes aceptar la política y privacidad para continuar.'
};


// --- 4. Función de Validación Genérica ---

/**
 * Valida un campo específico contra su regex o regla.
 * @param {string} fieldId - El ID del campo a validar.
 * @returns {boolean} True si es válido, False en caso contrario.
 */
function validateField(fieldId) {
    const input = fields[fieldId];
    const errorSpan = errorMessages[fieldId];
    const value = input.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // El campo `receiveEmails` no tiene validación, lo saltamos
    if (fieldId === 'receiveEmails') {
        return true;
    }

    // Regla de Campo Opcional (Segundo Nombre)
    if (fieldId === 'lastName') {
        if (value !== '' && !regex.name.test(value)) {
            isValid = false;
            errorMessage = errorMsgs.lastName;
        } else {
            isValid = true;
        }
    }
    
    // Regla de Checkbox (Términos)
    else if (fieldId === 'terms') {
        isValid = input.checked;
        if (!isValid) errorMessage = errorMsgs.terms;
    }
    
    // Regla de Confirmación de Contraseña
    else if (fieldId === 'confirmPassword') {
        if (value === '') {
            isValid = false;
            errorMessage = errorMsgs.required;
        } else if (value !== fields.password.value) {
            isValid = false;
            errorMessage = errorMsgs.confirmPasswordMismatch;
        } else {
            isValid = true;
        }
    } 
    
    // Reglas Generales (Obligatorios y Regex)
    else {
        // Validación de campo obligatorio
        if (value === '') {
            isValid = false;
            errorMessage = errorMsgs.required;
        } 
        // Validación de Regex
        else if (regex[fieldId] && !regex[fieldId].test(value)) {
            isValid = false;
            errorMessage = errorMsgs[fieldId]; // Usamos el mensaje de formato explícito
        }
    }

    // --- Mostrar/Ocultar mensaje de error y resaltado ---
    if (isValid) {
        if (input.type !== 'checkbox') input.classList.remove('invalid');
        errorSpan.textContent = ''; // Limpia el mensaje si es válido
    } else {
        if (input.type !== 'checkbox') input.classList.add('invalid');
        errorSpan.textContent = errorMessage; // Muestra el mensaje de error de formato
    }

    return isValid;
}


// --- 5. Función de Control General ---

/**
 * Valida todos los campos y actualiza el estado del botón.
 */
function validateAllFields() {
    // Validamos todos los campos necesarios.
    const isFirstNameValid = validateField('firstName');
    const isLastNameValid = validateField('lastName');
    const isEmailValid = validateField('email');
    const isPhoneValid = validateField('phone');
    const isPasswordValid = validateField('password');
    // La confirmación de contraseña debe validarse *después* de la contraseña.
    const isConfirmPasswordValid = validateField('confirmPassword');
    const isTermsChecked = validateField('terms');

    // El formulario es válido solo si todos los campos requeridos y sus validaciones pasan.
    const isFormValid = isFirstNameValid && isLastNameValid && isEmailValid && isPhoneValid && 
                        isPasswordValid && isConfirmPasswordValid && isTermsChecked;
    
    submitButton.disabled = !isFormValid;
    
    return isFormValid;
}

// --- 6. Event Listeners ---

// Adjuntar eventos de validación a todos los campos relevantes al interactuar con ellos.
Object.values(fields).forEach(input => {
    // Usar 'input' para validación en tiempo real (mientras se escribe)
    input.addEventListener('input', () => {
        // Al teclear, solo validamos el campo actual para dar feedback inmediato
        validateField(input.id);
        // Validamos todos para actualizar el botón de forma general
        validateAllFields(); 
    });
    
    // Usar 'blur' (al perder el foco) para asegurar que se muestre el error al salir
    input.addEventListener('blur', () => {
        validateField(input.id);
        validateAllFields(); 
    });

    // Evento especial para el checkbox de términos (al cambiar su estado)
    if (input.type === 'checkbox') {
        input.addEventListener('change', validateAllFields);
    }
});


// Prevención del envío del formulario
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Una última validación antes de enviar
    if (validateAllFields()) {
        alert('✅ ¡Registro exitoso! Formulario enviado correctamente.');
        // Limpiar formulario y reestablecer estado
        form.reset(); 
        validateAllFields(); // Vuelve a deshabilitar el botón
    } else {
        // El botón ya está deshabilitado si falla, pero un último mensaje no está de más
        alert('⚠️ Por favor, revisa los campos marcados en rojo y corrige el formato.');
    }
});

// Validar al cargar la página (para campos con autocompletado o para deshabilitar el botón al inicio)
document.addEventListener('DOMContentLoaded', validateAllFields);