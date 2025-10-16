//Ejercicio 1
function mostrarEstadisticas(todos) {
    for (let i = 0; i < todos.length; i++) {
        todos[i] = Number(todos[i]);
    }

    let minimo = todos[0];
    let maximo = todos[0];
    let suma = 0;

    for (let i = 0; i < todos.length; i++) {
        if (todos[i] < minimo) minimo = todos[i];
        if (todos[i] > maximo) maximo = todos[i];
        suma += todos[i];
    }

    let medio = suma / todos.length;

    document.write("Valor mínimo: " + minimo + "<br>");
    document.write("Valor máximo: " + maximo + "<br>");
    document.write("Valor medio: " + medio + "<br>");
}




//Ejercicio 3
function generarNumerosAleatorios(N) {
    const numeros = [];
    for (let i = 0; i < 20; i++) {
        let num = Math.floor(Math.random() * (N + 1));
        numeros.push(num);
    }

    document.write("Los números generados son:<br>");
    for (let i = 0; i < numeros.length; i++) {
        document.write(numeros[i] + " ");
    }

    return numeros;
}


//Ejercicio 4
function procesarArrays(array1, array2) {
    const interseccion = [];
    const union = [];
    const diferencia = [];

    for (let i = 0; i < array1.length; i++) {
        if (array2.indexOf(array1[i]) !== -1) {
            interseccion.push(array1[i]);
        }
        if (union.indexOf(array1[i]) === -1) {
            union.push(array1[i]);
        }
    }

    for (let i = 0; i < array2.length; i++) {
        if (union.indexOf(array2[i]) === -1) {
            union.push(array2[i]);
        }
        if (array1.indexOf(array2[i]) === -1) {
            diferencia.push(array2[i]);
        }
    }

    document.write("Array 1: ");
    for (let i = 0; i < array1.length; i++) {
        document.write(array1[i] + " ");
    }
    document.write("<br>");

    document.write("Array 2: ");
    for (let i = 0; i < array2.length; i++) {
        document.write(array2[i] + " ");
    }
    document.write("<br><br>");

    document.write("Intersección: ");
    for (let i = 0; i < interseccion.length; i++) {
        document.write(interseccion[i] + " ");
    }
    document.write("<br>");

    document.write("Unión: ");
    for (let i = 0; i < union.length; i++) {
        document.write(union[i] + " ");
    }
    document.write("<br>");

    document.write("Diferencia (array2 - array1): ");
    for (let i = 0; i < diferencia.length; i++) {
        document.write(diferencia[i] + " ");
    }
    document.write("<br>");
}


// Ejercicio 6
function buscarPalabra() {
    let palabra = prompt("Introduce la palabra que deseas buscar:");

    let texto = document.body.innerText;

    if (texto.toLowerCase().includes(palabra.toLowerCase())) {
        alert("La palabra '" + palabra + "' SÍ se encuentra en el documento.");
    } else {
        alert("La palabra '" + palabra + "' NO se encuentra en el documento.");
    }
}


// Ejercicio 7
function ordenarBurbuja(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

function eliminarDuplicados(array) {
    const resultado = [];
    for (let i = 0; i < array.length; i++) {
        let repetido = false;
        for (let j = 0; j < resultado.length; j++) {
            if (array[i] === resultado[j]) {
                repetido = true;
                break;
            }
        }
        if (!repetido) {
            resultado.push(array[i]);
        }
    }
    return resultado;
}

//Ejercicio 8
function ordenarNombres() {
    let cadena = prompt("Introduce los nombres separados por comas:");

    let partes = cadena.split(",");
    let nombres = [];

    for (let i = 0; i < partes.length; i++) {
        if (partes[i] !== "") {
            nombres.push(partes[i]);
        }
    }

    nombres.sort();

    document.write("<h3>Nombres ordenados:</h3>");
    for (let i = 0; i < nombres.length; i++) {
        document.write(nombres[i] + "<br>");
    }
}








//Ejercicio 9
function analizarCadena() {
    let texto = prompt("Introduce una cadena de texto:");

    let partes = texto.split(" ");
    let palabras = [];

    for (let i = 0; i < partes.length; i++) {
        if (partes[i] !== "") {
            palabras.push(partes[i]);
        }
    }

    let numeroPalabras = palabras.length;
    let primeraPalabra = palabras[0];
    let ultimaPalabra = palabras[palabras.length - 1];

    let inverso = [];
    for (let i = palabras.length - 1; i >= 0; i--) {
        inverso.push(palabras[i]);
    }

    let ordenAZ = palabras.slice().sort();

    let ordenZA = palabras.slice().sort().reverse();

    let nuevaVentana = window.open("", "Resultados", "width=500,height=500");
    nuevaVentana.document.write("<h2>Resultados del análisis</h2>");
    nuevaVentana.document.write("<p>Número de palabras: " + numeroPalabras + "</p>");
    nuevaVentana.document.write("<p>Primera palabra: " + primeraPalabra + "</p>");
    nuevaVentana.document.write("<p>Última palabra: " + ultimaPalabra + "</p>");
    nuevaVentana.document.write("<p>Palabras en orden inverso: " + inverso.join(' ') + "</p>");
    nuevaVentana.document.write("<p>Palabras ordenadas de la A a la Z: " + ordenAZ.join(' ') + "</p>");
    nuevaVentana.document.write("<p>Palabras ordenadas de la Z a la A: " + ordenZA.join(' ') + "</p>");
}
