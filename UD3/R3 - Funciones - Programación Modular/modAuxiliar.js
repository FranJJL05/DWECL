/**
 * @name filterNumbersGreaterThan
 * @description Filtra los números de un array que sean mayor a cierto número x dejando solo los que sean menores a este
 *
 * @param {number[]} numbers - Array de números a filtrar
 * @param {number} filter - Número a partir del cuál filtrar los demás números
 * @returns {Number[]} - Array de números filtrados menores a {filter}
 *
 * @example
 * filterNumbersGreaterThan([3, 8, 12, 1, 7, 4], 7) // returns [3, 1, 4]
 */
export const filterNumbersGreaterThan = (numbers, filter) => {
    return numbers.filter(number => number < filter);
};

/**
 * @name toHackerSpeak
 * @description Convierte un string a "Hacker Speak". Para hacerlo, tiene que transformar las "a" en 4, las "e" en 3, las "i"
 * en 1, las "o" en 0 y las "s" en 5
 *
 * @param {string} text
 * @returns {String} - El texto convertido a "Hacker Speak"
 *
 * @example
 * toHackerSpeak("I'm a hacker now") // returns "1'm 4 h4ack3r n0w"
 */
export const toHackerSpeak = (text) => {
    // Definir el mapeo de letras a números
    const replacements = {
        'a': '4',
        'e': '3',
        'i': '1',
        'o': '0',
        's': '5',
        'A': '4', // Considerar mayúsculas también
        'E': '3',
        'I': '1',
        'O': '0',
        'S': '5'
    };

    // Usar replace con una función para reemplazar cada letra
    return text.replace(/[aeiosAEIOS]/g, match => replacements[match]);
};

/**
 * @name getFileExtension
 * @description Obtiene la extensión de un archivo
 *
 * @param {string} file - El nombre del archivo a obtener la extensión
 * @returns {String} - La extensión del archivo
 *
 * @example
 * getFileExtension("imagen.jpg") // returns "jpg"
 */
export const getFileExtension = (file) => {
    // Buscar la última ocurrencia del punto '.'
    const lastDotIndex = file.lastIndexOf('.');

    // Si no hay punto o es el primer carácter (como en ".bashrc"), retornar un string vacío
    if (lastDotIndex === -1 || lastDotIndex === 0) {
        return "";
    }

    // Retornar la subcadena después del último punto
    return file.substring(lastDotIndex + 1);
};

/**
 * @name flatArray
 * @description Dado un array 2D, devuelve un array 1D que contiene todos los ítems
 *
 * @param {[][]} arr - Array 2D a "aplanar"
 * @returns {[]} - El array "aplanado"
 *
 * @example
 * flatArray([[1, 5, 4], [3, 10], [2, 5]]) // returns [1, 5, 4, 3, 10, 2, 5] (Corregido: el ejemplo original tenía un 6 erróneo)
 */
export const flatArray = (arr) => {
    // Usamos el método 'flat()' nativo de JS con profundidad 1 (por defecto)
    // o podemos usar 'reduce' y 'concat' para compatibilidad con versiones antiguas
    // return arr.reduce((acc, current) => acc.concat(current), []);
    return arr.flat();
};

/**
 * @name removeDuplicates
 * @description Remueve duplicados de un array
 *
 * @param {[]} arr - Array con duplicados a remover
 * @returns {[]} - El array resultante sin duplicados
 *
 * @example
 * removeDuplicates([4, 5, 10, 4, 10, 2]) // returns [4, 5, 10, 2]
 */
export const removeDuplicates = (arr) => {
    // Usamos un 'Set' para obtener los valores únicos y luego convertimos de nuevo a 'Array'
    return [...new Set(arr)];
};

/**
 * @name countLetter
 * @description Devuelve la cantidad de veces que una letra aparece en un string
 *
 * @param {string} letter - Letra a contar
 * @param {string} text - Texto sobre el que realizar la cuenta de {letter}
 * @returns {Number} - Número de veces que aparece {letter} en {text}
 *
 * @example
 * countLetter("a", "javascript") // returns 2
 */
export const countLetter = (letter, text) => {
    // Convertimos ambos a minúsculas para una búsqueda que no distinga entre mayúsculas y minúsculas (opcional, pero útil)
    const lowerText = text.toLowerCase();
    const lowerLetter = letter.toLowerCase();

    // Usamos un contador
    let count = 0;
    for (const char of lowerText) {
        if (char === lowerLetter) {
            count++;
        }
    }
    return count;

    // Alternativamente, usando regex:
    // const regex = new RegExp(letter, 'gi'); // 'g' para global, 'i' para case-insensitive
    // const matches = text.match(regex);
    // return matches ? matches.length : 0;
};

/**
 * @name removeWords
 * @description Dado un string y un array de palabras a remover, devuelve el string sin las palabras removidas
 *
 * @param {string} str - Texto a recortar
 * @param {string[]} words - Palabras a remover
 * @returns {string} - Texto resultante con las palabras removidas
 *
 * @example
 * removeWords("This is a really bad test", ["really", "bad"]) // returns "This is a test"
 */
export const removeWords = (str, words) => {
    // 1. Crear una expresión regular a partir del array de palabras.
    // Usamos '\b' para asegurar que solo se eliminen palabras completas (delimitadores de palabra).
    // El 'g' es para reemplazar todas las ocurrencias.
    // Las palabras deben ser escapadas por si contienen caracteres especiales de regex.
    const escapedWords = words.map(word => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const regex = new RegExp('\\b(' + escapedWords.join('|') + ')\\b', 'gi');

    // 2. Reemplazar las palabras con un espacio
    let result = str.replace(regex, '');

    // 3. Eliminar posibles espacios múltiples y espacios al inicio/final resultantes
    result = result.replace(/\s+/g, ' ').trim();

    return result;
};