// 1. Validar Mayúscula
// El parámetro debe contener al menos un carácter en mayúscula
function validarMayuscula(valor) {
    // [A-Z] busca cualquier carácter entre la A y la Z mayúsculas.
    return /[A-Z]/.test(valor);
}

// 2. Validar Caracteres Especiales
// El parámetro debe contener al menos uno de los siguientes caracteres: $!@#%$
function validarCaracteresEspeciales(valor) {
    // [$!@#%] busca cualquiera de esos caracteres.
    // El símbolo $ no necesita escape dentro de corchetes [].
    return /[$!@#%]/.test(valor);
}

// 3. Validar Correo
// El parámetro debe tener el formato correcto de un email
function validarCorreo(valor) {
    // Expresión para formato estándar: algo@dominio.tld
    // ^[\w-\.]+@ -> Comienzo: 1 o más letras/números/guiones/puntos, seguido de @
    // ([\w-]+\.)+ -> Dominio: 1 o más segmentos de letras/números/guiones, seguidos de punto
    // [\w-]{2,4}$ -> TLD: 2 a 4 letras/números/guiones al final
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(valor);
}

// 4. Validar Tarjeta de Crédito
// El parámetro debe tener el formato correcto de una tarjeta de crédito (16 dígitos)
function validarTarjetaCredito(valor) {
    // ^(?:\d{4}[- ]?){3}\d{4}$
    // ?: No captura el grupo.
    // \d{4} -> Cuatro dígitos.
    // [- ]? -> Seguido opcionalmente de un guion o espacio.
    // {3} -> El patrón anterior se repite 3 veces.
    // \d{4}$ -> Termina con los últimos 4 dígitos.
    return /^(?:\d{4}[- ]?){3}\d{4}$/.test(valor);
}

// 5. Validar Longitud
// El parámetro debe tener al menos 8 caracteres
function validarLongitud(valor) {
    // Aunque se podría usar una RegExp ( /^.{8,}$/ ), es más simple usar la propiedad 'length'.
    // Si la tarea exige *expresamente* usar RegExp: return /^.{8,}$/.test(valor);
    return valor.length >= 8; 
}

// 6. Validar Número
// El parámetro debe contener al menos un dígito
function validarNumero(valor) {
    // \d busca cualquier dígito (0-9).
    return /\d/.test(valor);
}

// 7. Funciones auxiliares para el Ejercicio 2 y 3 (Puntuación y Username)
// El username debe contener obligatoriamente algún signo de puntuación
function validarPuntuacion(valor) {
    // Busca al menos un carácter de puntuación común.
    return /[.,;:'"!@#\$%\^&\*\(\)-_+=\[\]\{\}|\\/~`]+/.test(valor);
}

// Requisito especial para el nombre de usuario: 
// 1. Al menos 8 caracteres
// 2. Algún número
// 3. Algún signo de puntuación 
function validarNombreUsuario(valor) {
    const minLength = validarLongitud(valor); 
    const hasNumber = validarNumero(valor);
    const hasPunctuation = validarPuntuacion(valor);
    
    // Para simplificar, asumimos que validarLongitud() es la que comprueba la longitud mínima de 8
    return minLength && hasNumber && hasPunctuation;
}