// Obtener elementos del DOM
const usernameInput = document.getElementById('username');
const lowerCaseCheck = document.getElementById('lowerCaseCheck');
const upperCaseCheck = document.getElementById('upperCaseCheck');
const lengthCheck = document.getElementById('lengthCheck');
const submitBtn = document.querySelector('.submit-btn');

/**
 * Valida el nombre de usuario contra los requisitos.
 * @returns {boolean} True si todas las validaciones pasan, false en caso contrario.
 */
function validateUsername() {
    const value = usernameInput.value;
    
    // 1. Al menos 1 carácter en minúscula
    // Regex: /[a-z]/ busca cualquier carácter de 'a' a 'z'
    const hasLowerCase = /[a-z]/.test(value);

    // 2. Al menos 1 carácter en mayúscula
    // Regex: /[A-Z]/ busca cualquier carácter de 'A' a 'Z'
    const hasUpperCase = /[A-Z]/.test(value);

    // 3. Mínimo de 8 caracteres
    // Se usa la longitud de la cadena de JS, pero la validación se refleja en el DOM
    const isMinLength = value.length >= 8; 

    // Muestra la validación en tiempo real
    updateValidationDisplay(lowerCaseCheck, hasLowerCase);
    updateValidationDisplay(upperCaseCheck, hasUpperCase);
    updateValidationDisplay(lengthCheck, isMinLength);
    
    // Habilita/Deshabilita el botón de envío
    const isValid = hasLowerCase && hasUpperCase && isMinLength;
    submitBtn.disabled = !isValid;
    
    return isValid;
}

/**
 * Actualiza la apariencia visual de un elemento de validación.
 * @param {HTMLElement} element El elemento <p> a actualizar.
 * @param {boolean} isValid Si la condición es válida.
 */
function updateValidationDisplay(element, isValid) {
    if (isValid) {
        element.classList.remove('invalid');
        element.classList.add('valid');
    } else {
        element.classList.remove('valid');
        element.classList.add('invalid');
    }
}

// Inicializa la validación al cargar la página (útil si el campo tiene valor inicial)
document.addEventListener('DOMContentLoaded', validateUsername);