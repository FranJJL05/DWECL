//Ejercicio 1
let clase = [
    ["Angel Garcia", 20, 6, 7, 10],
    ["Maria Lopez", 19, 8, 9, 7],
    ["Juan Perez", 21, 5, 6, 6],
    ["Lucia Fernandez", 20, 9, 8, 10]
];

function mostrarClase() {
    for (let i = 0; i < clase.length; i++) {
        let alumno = clase[i];
        document.write(`<br> Nombre: ${alumno[0]}, Edad: ${alumno[1]}, Notas: ${alumno[2]}, ${alumno[3]}, ${alumno[4]}`);
    }

    document.write(`<p>Edad media de la clase: ${edadMedia()}</p>`);
}

//Ejercicio 2
function obtenerNota(numAlumno, trimestre) {
    let alumno = clase[numAlumno];

    if (trimestre >= 1 && trimestre <= 3) {
        return `Nota del ${trimestre} trimestre del alumno ${alumno[0]}: ${alumno[trimestre + 1]}`;
    } else {
        let suma = alumno[2] + alumno[3] + alumno[4];
        let media = suma / 3;
        return `Nota media del alumno ${alumno[0]}: ${media}`;
    }
}

//Ejercicio 3
function edadMedia() {
    if (clase.length === 0) return 0;

    let sumaEdades = 0;
    for (let i = 0; i < clase.length; i++) {
        sumaEdades += clase[i][1];
    }

    return (sumaEdades / clase.length);
}

//Ejercicio 4
function alumnoAleatorio() {
    let indice = Math.floor(Math.random() * clase.length);
    return clase[indice][0];
}

//Ejercicio 5
function paresImpares() {
    let numeros = [];

    for (let i = 0; i < 100; i++) {
        numeros.push(Math.floor(Math.random() * 1000) + 1);
    }

    document.write("<h3>Array original:</h3>");
    document.write(numeros.join(", ") + "<br><br>");

    let pares = [];
    let impares = [];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        } else {
            impares.push(numeros[i]);
        }
    }

    let ordenado = pares.concat(impares);

    document.write("<h3>Array con pares e impares agrupados:</h3>");
    document.write(ordenado.join(", "));
}

//Ejercicio 6
let vendedores = [];

function agregarVendedor() {
    let nombre = document.getElementById("nombre").value;
    let ventas = parseFloat(document.getElementById("ventas").value);

    let sueldo = 200 + (ventas * 0.09);
    let vendedor = [nombre, ventas, sueldo.toFixed(2)];

    vendedores.push(vendedor);

    document.getElementById("nombre").value = "";
    document.getElementById("ventas").value = "";

    mostrarVendedores();
}


function mostrarVendedores() {
    let salida = "<h3>Vendedores registrados:</h3>";

    for (let i = 0; i < vendedores.length; i++) {
        let v = vendedores[i];
        salida += `<br>${v[0]} — Ventas: $${v[1]} — Sueldo final: $${v[2]}`;
    }

    document.getElementById("resultado").innerHTML = salida;
}

//Ejercicio 7
let numeros = new Array(10);

function inicializarCeros() {
    for (let i = 0; i < numeros.length; i++) {
        numeros[i] = 0;
    }
}

function sumarUno() {
    for (let i = 0; i < numeros.length; i++) {
        numeros[i] = numeros[i] + 1;
    }
}

function mostrarArray() {
    let resultado = "";
    for (let i = 0; i < numeros.length; i++) {
        resultado += numeros[i] + " ";
    }
    document.getElementById("resultado").innerHTML = resultado;
}

//Ejercicio 8
function simularDados() {
    let resultados = new Array(13).fill(0);

    for (let i = 0; i < 36000; i++) {
        let dado1 = Math.floor(Math.random() * 6) + 1;
        let dado2 = Math.floor(Math.random() * 6) + 1;

        let suma = dado1 + dado2;

        resultados[suma]++;
    }

    let salida = "<h3>Resultados de la simulación (36.000 lanzamientos):</h3><table border='1'><tr><th>Suma</th><th>Veces</th></tr>";

    for (let i = 2; i <= 12; i++) {
        salida += `<tr><td>${i}</td><td>${resultados[i]}</td></tr>`;
    }

    salida += "</table>";

    document.getElementById("resultado").innerHTML = salida;
}

//Ejercicio 9
function simularDados2() {
    let sumas = new Array(13).fill(0);

    let combinaciones = [];
    for (let i = 0; i <= 6; i++) {
        combinaciones[i] = new Array(7).fill(0);
    }

    for (let i = 0; i < 36000; i++) {
        let dado1 = Math.floor(Math.random() * 6) + 1;
        let dado2 = Math.floor(Math.random() * 6) + 1;

        sumas[dado1 + dado2]++;
        combinaciones[dado1][dado2]++;
    }

    let salida = "<h3>Resultados de la simulación (36.000 lanzamientos)</h3>";
    salida += "<table border='1' style='border-collapse: collapse;'>";
    salida += "<tr><th>Suma</th><th>Veces</th></tr>";

    for (let i = 2; i <= 12; i++) {
        salida += `<tr><td>${i}</td><td>${sumas[i]}</td></tr>`;
    }

    salida += "</table><br>";

    salida += "<h3>Combinaciones de dados</h3>";
    salida += "<table border='1' style='border-collapse: collapse;'>";
    salida += "<tr><th></th>";

    for (let j = 1; j <= 6; j++) {
        salida += `<th>Dado2=${j}</th>`;
    }
    salida += "</tr>";

    for (let i = 1; i <= 6; i++) {
        salida += `<tr><th>Dado1=${i}</th>`;
        for (let j = 1; j <= 6; j++) {
            salida += `<td>${combinaciones[i][j]}</td>`;
        }
        salida += "</tr>";
    }

    salida += "</table>";

    document.getElementById("resultado").innerHTML = salida;
}

//Ejercicio 10
let asientos = new Array(10).fill(null);

function mostrarAsientos() {
    let tipo = document.getElementById("tipo").value;
    let salida = "";

    let inicio = (tipo === "First") ? 0 : 5;
    let fin = (tipo === "First") ? 5 : 10;

    for (let i = inicio; i < fin; i++) {
        if (asientos[i] === null) {
            salida += `Asiento ${i + 1} libre<br>`;
        } else {
            salida += `Asiento ${i + 1} ocupado<br>`;
        }
    }

    document.getElementById("asientosLibres").innerHTML = salida;
}

function reservarAsiento() {
    let nombre = document.getElementById("nombre").value;
    let tipo = document.getElementById("tipo").value;
    let numAsiento = parseInt(document.getElementById("asiento").value);

    if (nombre === "" || isNaN(numAsiento)) {
        alert("Introduce tu nombre y un número de asiento válido.");
        return;
    }

    if (tipo === "First" && (numAsiento < 1 || numAsiento > 5)) {
        alert("Elige un asiento entre 1 y 5 para First.");
        return;
    }
    if (tipo === "Turista" && (numAsiento < 6 || numAsiento > 10)) {
        alert("Elige un asiento entre 6 y 10 para Turista.");
        return;
    }

    if (asientos[numAsiento - 1] !== null) {
        alert("Ese asiento ya está ocupado. Elige otro.");
        return;
    }

    asientos[numAsiento - 1] = { nombre: nombre, clase: tipo, asiento: numAsiento };

    alert(`Asiento ${numAsiento} reservado para ${nombre}.`);

    document.getElementById("nombre").value = "";
    document.getElementById("asiento").value = "";

    mostrarAsientos();
}

function imprimirTarjeta() {
    let numAsiento = parseInt(document.getElementById("asientoImp").value);

    if (isNaN(numAsiento) || numAsiento < 1 || numAsiento > 10) {
        alert("Introduce un número de asiento válido (1-10).");
        return;
    }

    let reserva = asientos[numAsiento - 1];

    let ventana = window.open("", "Tarjeta", "width=300,height=200");
    ventana.document.write(`<h2>Tarjeta de embarque</h2>`);
    ventana.document.write(`<p>Nombre: ${reserva.nombre}</p>`);
    ventana.document.write(`<p>Asiento: ${reserva.asiento}</p>`);
    ventana.document.write(`<p>Clase: ${reserva.clase}</p>`);
}

//Ejercicio 11

// MATRIZ DE VENTAS (valores inventados)
// Filas = productos (1 a 5)
// Columnas = vendedores (1 a 4)

let ventas = [
    [120, 200, 150, 80],   // Producto 1
    [300, 250, 100, 90],   // Producto 2
    [50, 400, 300, 100],  // Producto 3
    [500, 100, 200, 150],  // Producto 4
    [200, 150, 250, 300]   // Producto 5
];

const productos = 5;
const vendedores2 = 4;

// FUNCIÓN PARA CALCULAR LOS TOTALES
function calcularTotales() {
    let totalVendedor = [0, 0, 0, 0];
    let totalGeneral = 0;
    let totalPorProducto = [];

    for (let p = 0; p < productos; p++) {
        let totalProducto = 0;
        for (let v = 0; v < vendedores2; v++) {
            totalProducto += ventas[p][v];
            totalVendedor[v] += ventas[p][v];
        }
        totalPorProducto.push(totalProducto);
        totalGeneral += totalProducto;
    }

    return { totalVendedor, totalPorProducto, totalGeneral };
}

// FUNCIÓN PARA MOSTRAR LA TABLA EN HTML
function mostrarTabla() {
    const { totalVendedor, totalPorProducto, totalGeneral } = calcularTotales();

    let html = "<table border='1'>";
    html += "<tr><th>Producto</th>";

    for (let v = 0; v < vendedores; v++) {
        html += "<th>Vendedor " + (v + 1) + "</th>";
    }
    html += "<th>Total Producto</th></tr>";

    // Filas de productos
    for (let p = 0; p < productos; p++) {
        html += "<tr><td>Producto " + (p + 1) + "</td>";
        for (let v = 0; v < vendedores2; v++) {
            html += "<td>" + ventas[p][v] + "</td>";
        }
        html += "<td>" + totalPorProducto[p] + "</td></tr>";
    }

    // Fila de totales
    html += "<tr><td>Total Vendedor</td>";
    for (let v = 0; v < vendedores2; v++) {
        html += "<td>" + totalVendedor[v] + "</td>";
    }
    html += "<td>" + totalGeneral + "</td></tr>";

    html += "</table>";

    document.getElementById("resultado").innerHTML = html;
}

// PROGRAMA PRINCIPAL
mostrarTabla();
