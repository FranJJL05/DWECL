/**
 * 1. Función sum(num1, num2)
 *
 * Función tradicional:
 * function sum(num1, num2){ return num1 + num2 }
 */

const sum = (num1, num2) => num1 + num2;

console.log("--- Función sum ---");
console.log(`sum(40, 2) = ${sum(40, 2)}`); 
console.log(`sum(42, 0) = ${sum(42, 0)}`); 

/**
 * 2. Función stringLength(str) - Versión 1 (solo console.log)
 *
 * Función tradicional:
 * function stringLength(str){ console.log(`the length of "${str}" is:`, str.length) }
 */

const stringLengthV1 = (str) => {
    console.log(`the length of "${str}" is:`, str.length);
};

console.log("\n--- Función stringLengthV1 ---");
let longestCityNameInTheWorld =
    "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu";
stringLengthV1(longestCityNameInTheWorld);

/**
 * 3. Función stringLength(str) - Versión 2 (console.log y return)
 *
 * Función tradicional:
 * function stringLength(str){
 * let length = str.length
 * console.log(`the length of "${str}" is:`, length)
 * return str.length
 * }
 */

const stringLengthV2 = (str) => {
    let length = str.length;
    console.log(`the length of "${str}" is:`, length);
    return length;
};

console.log("\n--- Función stringLengthV2 ---");
const len = stringLengthV2("willynilly");
console.log(`El valor retornado por stringLengthV2("willynilly") es: ${len}`); 

/**
 * 4. Función showAlert(name)
 *
 * Función tradicional:
 * let alerts = [...]
 * function showAlert(name){ alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`) }
 */

let alerts = [
    "Hey, you are awesome",
    "You are so wonderful",
    "What a marvel you are",
    "You're so lovely",
    "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES",
];

// Si la función arrow tiene un solo argumento, los paréntesis son opcionales.
// En este caso, la función llama a una función (alert) que no devuelve nada (void),
// por lo que usamos llaves.
const showAlert = (name) => {
    const randomIndex = Math.floor(Math.random() * alerts.length);
    const message = alerts[randomIndex] + `, ${name}!`;
    // La función alert mostrará una ventana emergente en el navegador.
    alert(message);
    console.log(`\n--- Función showAlert ---`);
    console.log(`Alerta mostrada para "${name}": "${message}"`);
};
