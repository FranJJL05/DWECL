// Función ejercicio 1
function calculadoraDeEdad() {
  let añoActual = new Date().getFullYear();
  let añoNacimiento = prompt("Por favor, introduce tu año de nacimiento:");

  if (!añoNacimiento || isNaN(añoNacimiento)) {
    alert("Por favor, introduce un año válido.");
    return;
  }

  let edad1 = añoActual - añoNacimiento;
  let edad2 = edad1 - 1;

  alert(`Tienes ${edad2} o ${edad1} años.`);
}

// Función ejercicio 2
function supplyCalculator() {
  let edadActual = prompt("Introduce la edad actual");
  let edadMaxima = prompt("Introduce la edad máxima");
  let consumoDiario = prompt("Introduce el consumo diario");

  let añosRestantes = edadMaxima - edadActual;
  let diasRestantes = añosRestantes * 365;
  let totalNecesario = diasRestantes * consumoDiario;

  let mensaje = `Necesitarás ${totalNecesario} unidades para llegar hasta la edad de ${edadMaxima}`

  alert(mensaje);
}

// Funciones ejercicio 3
function calcularCircunferencia(radio) {
  return 2 * Math.PI * radio;
}

function calcularArea(radio) {
  return Math.PI * Math.pow(radio, 2);
}

// Función ejercicio 4
function convertTemperature() {
  let celsius = parseFloat(prompt(`Introduce la temperatura en grados Celsius`));

  if (!isNaN(celsius)) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    alert(`${celsius}C son ${fahrenheit}F`);
  }

  let fahrenheit2 = parseFloat(prompt(`Introduce la temperatura en grados Fahrenheit`));

  if (!isNaN(fahrenheit2)) {
    let celsius2 = (fahrenheit2 - 32) * 5 / 9;
    alert(`${fahrenheit2}F son ${celsius2}C`);
  }
}

