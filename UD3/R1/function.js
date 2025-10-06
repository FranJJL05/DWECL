// Ejercicio 1
function maximo(n1, n2, n3, n4) {
    return Math.max(n1, n2, n3, n4);
}

/*Ejercicio 2*/
function lanzamiento() {
    return Math.floor(Math.random() * 6) + 1;
}

function mostrarResultado() {
    const valorDado = lanzamiento();
    document.write(`El dado ha caído en el ${valorDado}`);
}


//Ejercicio 3
function simularConteo() {
    const TIRADAS = 6000;
    
    // Objeto para contar las veces que sale cada número
    let conteo = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

    // Bucle FOR para realizar las 6000 tiradas
    for (let i = 0; i < TIRADAS; i++) {
        const resultado = lanzamiento();
        // Usa el resultado como clave para incrementar el contador
        conteo[resultado]++;
    }
    return conteo;
}

function iniciarSimulacion() {
    const TIRADAS = 6000;
    const conteo = simularConteo(); // Obtener el objeto con las frecuencias
    const divResultados = document.getElementById('resultados');

    // Generar el HTML del informe
    const esperado = TIRADAS / 6;
    let html = '<h2>Informe de ' + TIRADAS + ' Lanzamientos</h2>';
    
    html += '<p>Frecuencia teórica esperada por valor: <b>' + esperado.toFixed(0) + '</b></p>';
    html += '<ul>';

    // Usamos Object.keys() y un bucle FOR normal para iterar sobre los resultados
    const valores = Object.keys(conteo); // [ '1', '2', '3', '4', '5', '6' ]

    for (let i = 0; i < valores.length; i++) {
        const valor = valores[i]; // El número del dado (clave)
        const frecuencia = conteo[valor];
        const porcentaje = ((frecuencia / TIRADAS) * 100).toFixed(2);
        
        html += '<li>' + 
                'Valor ' + valor + 
                ': ' + frecuencia + ' veces (' + porcentaje + '%)' + 
                '</li>';
    }
    
    html += '</ul>';

    // Inyectar el informe en el HTML
    divResultados.innerHTML = html;
    
    console.log("Simulación finalizada. Conteo:", conteo);
}


//Ejercicio 4
function calcularVolumenEsfera(radio) {
    const volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);
    return volumen;
}

//Ejercicio 5
function calcularAreaCirculo(radio) {
    const area = Math.PI * Math.pow(radio, 2);
    return area;
}

//Ejercicio 6
function potencia(base, exponente) {
    if (exponente === 0) {
        return 1; 
    } else {
        return base * potencia(base, exponente - 1); 
    }
}

//Ejercicio 7
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}