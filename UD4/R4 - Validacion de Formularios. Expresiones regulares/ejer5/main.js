// --- 1. Expresiones Regulares ---
const regex = {
    // Nombre: Solo letras, espacios y algunos caracteres de acentuación
    name: /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/, 
    
    // Fecha de Vencimiento: MM/YY
    expiryDate: /^(0[1-9]|1[0-2])\/\d{2}$/,

    // CVV: Exactamente 3 dígitos
    cvv: /^\d{3}$/
};

// Mapa de Detección de Tarjetas (los primeros dígitos definen el tipo)
const cardPatterns = {
    '4': { type: 'VISA', logoClass: 'visa' },
    '5': { type: 'MasterCard', logoClass: 'mastercard' },
    '34': { type: 'Amex', logoClass: 'amex' },
    '37': { type: 'Amex', logoClass: 'amex' },
};

// --- 2. Referencias del DOM y Mensajes de Error ---
const form = document.getElementById('cardForm');
const fields = {
    cardNumber: document.getElementById('cardNumber'),
    cardName: document.getElementById('cardName'),
    expiryDate: document.getElementById('expiryDate'),
    cvv: document.getElementById('cvv')
};
const errorMessages = {
    cardNumber: document.getElementById('errorCardNumber'),
    cardName: document.getElementById('errorCardName'),
    expiryDate: document.getElementById('errorExpiryDate'),
    cvv: document.getElementById('errorCVV')
};
const cardLogo = document.getElementById('cardLogo');
const submitButton = document.querySelector('.submit-btn');

const errorMsgs = {
    required: 'Este campo es obligatorio.',
    cardNumber: 'Número de tarjeta inválido. Debe tener 16 dígitos.',
    cardName: 'Nombre inválido. Solo se permiten letras.',
    expiryDateFormat: 'Formato inválido. Use MM/AA.',
    expiryDatePast: 'La tarjeta está vencida.',
    cvv: 'CVV inválido. Debe tener 3 dígitos.'
};

// --- 3. Funciones de Ayuda ---

/**
 * Aplica el formato de agrupación #### #### #### #### al número de tarjeta.
 * @param {string} value El valor del input sin formatear.
 * @returns {string} El valor formateado.
 */
function formatCardNumber(value) {
    // Elimina cualquier caracter que no sea dígito
    const cleanValue = value.replace(/\D/g, '');
    // Aplica el formato de grupos de 4 dígitos
    return cleanValue.match(/.{1,4}/g)?.join(' ') || '';
}

/**
 * Detecta y muestra el logo de la tarjeta.
 * @param {string} value El valor del input de la tarjeta.
 */
function updateCardLogo(value) {
    const cleanValue = value.replace(/\s/g, '');
    let detected = false;
    
    // Busca coincidencias de patrones (más específicos primero)
    for (const patternPrefix in cardPatterns) {
        if (cleanValue.startsWith(patternPrefix)) {
            const cardInfo = cardPatterns[patternPrefix];
            cardLogo.textContent = cardInfo.type;
            cardLogo.className = `card-logo ${cardInfo.logoClass}`;
            detected = true;
            break;
        }
    }

    if (!detected) {
        cardLogo.textContent = cleanValue.length > 0 ? 'Card' : 'VISA'; // Vuelve al valor predeterminado si no se detecta
        cardLogo.className = 'card-logo default';
    }
}

// --- 4. Función de Validación Principal ---

/**
 * Valida un campo específico contra su regex y reglas.
 * @param {string} fieldId - El ID del campo a validar.
 * @returns {boolean} True si es válido, False en caso contrario.
 */
function validateField(fieldId) {
    const input = fields[fieldId];
    const errorSpan = errorMessages[fieldId];
    const value = input.value.trim();
    let isValid = true;
    let errorMessage = '';

    // 1. Campos obligatorios
    if (value === '') {
        isValid = false;
        errorMessage = errorMsgs.required;
    } 
    
    // 2. Validación específica de Número de Tarjeta
    else if (fieldId === 'cardNumber') {
        const cleanValue = value.replace(/\s/g, '');
        // La validación estricta solo permite 16 dígitos.
        if (!/^\d{16}$/.test(cleanValue)) {
            isValid = false;
            errorMessage = errorMsgs.cardNumber;
        } else {
            isValid = true;
        }
    } 
    
    // 3. Validación de Nombre (solo letras)
    else if (fieldId === 'cardName') {
        if (!regex.name.test(value)) {
            isValid = false;
            errorMessage = errorMsgs.cardName;
        }
    }
    
    // 4. Validación de Fecha de Vencimiento (MM/YY y no vencida)
    else if (fieldId === 'expiryDate') {
        if (!regex.expiryDate.test(value)) {
            isValid = false;
            errorMessage = errorMsgs.expiryDateFormat;
        } else {
            const [mm, yy] = value.split('/');
            const currentYear = new Date().getFullYear() % 100; // Últimos 2 dígitos del año
            const currentMonth = new Date().getMonth() + 1; // Enero es 0, por eso +1

            if (parseInt(yy) < currentYear || (parseInt(yy) === currentYear && parseInt(mm) < currentMonth)) {
                isValid = false;
                errorMessage = errorMsgs.expiryDatePast;
            }
        }
    }
    
    // 5. Validación de CVV
    else if (fieldId === 'cvv') {
        if (!regex.cvv.test(value)) {
            isValid = false;
            errorMessage = errorMsgs.cvv;
        }
    }

    // --- Mostrar/Ocultar mensaje de error y resaltado ---
    if (isValid) {
        input.classList.remove('invalid');
        errorSpan.textContent = '';
    } else {
        input.classList.add('invalid');
        errorSpan.textContent = errorMessage;
    }

    return isValid;
}


// --- 5. Función de Control General ---

/**
 * Valida todos los campos y actualiza el estado del botón.
 */
function validateAllFields() {
    const isCardNumberValid = validateField('cardNumber');
    const isCardNameValid = validateField('cardName');
    const isExpiryDateValid = validateField('expiryDate');
    const isCVVValid = validateField('cvv');

    const isFormValid = isCardNumberValid && isCardNameValid && isExpiryDateValid && isCVVValid;
    
    submitButton.disabled = !isFormValid;
    
    return isFormValid;
}

// --- 6. Event Listeners ---

// Adjuntar eventos de validación y microinteracciones a los campos
fields.cardNumber.addEventListener('input', (e) => {
    // Formateo del número de tarjeta en tiempo real
    e.target.value = formatCardNumber(e.target.value); 
    
    // Detección y visualización del tipo de tarjeta
    updateCardLogo(e.target.value); 
    
    validateField('cardNumber');
    validateAllFields(); 
});

fields.expiryDate.addEventListener('input', (e) => {
    // Formateo de fecha MM/YY
    const value = e.target.value.replace(/\D/g, ''); // Solo dígitos
    let formattedValue = value;
    if (value.length > 2) {
        formattedValue = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    e.target.value = formattedValue;

    validateField('expiryDate');
    validateAllFields(); 
});

// Eventos genéricos para otros campos
Object.values(fields).forEach(input => {
    if (input.id !== 'cardNumber' && input.id !== 'expiryDate') {
        input.addEventListener('input', () => {
            validateField(input.id);
            validateAllFields(); 
        });
    }

    input.addEventListener('blur', () => {
        validateField(input.id);
        validateAllFields(); 
    });
});

// Prevenir el envío del formulario
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateAllFields()) {
        alert('✅ ¡Pago procesado! Tarjeta validada correctamente.');
        form.reset(); 
        validateAllFields(); 
    } else {
        alert('⚠️ Por favor, corrige los campos marcados en rojo.');
    }
});

// Inicializar la validación al cargar la página (para deshabilitar el botón al inicio)
document.addEventListener('DOMContentLoaded', () => {
    updateCardLogo(''); // Inicia con el logo predeterminado
    validateAllFields();
});