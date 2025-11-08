window.addEventListener("load", () => {

    const titulo = document.getElementById("titulo");

    titulo.addEventListener("mouseover", (evento) => {
        titulo.src = "titulo2.jpg"; 
    });

    titulo.addEventListener("mouseout", (evento) => {
        titulo.src = "titulo1.jpg"; 
    });


    // --- TABLA DE COLORES ---
    const colores = [
        { hex: "#FF0000", nombre: "Rojo" },
        { hex: "#00FF00", nombre: "Verde" },
        { hex: "#0000FF", nombre: "Azul" },
        { hex: "#FFFF00", nombre: "Amarillo" },
        { hex: "#00FFFF", nombre: "Cian" },
        { hex: "#FF00FF", nombre: "Magenta" },
        { hex: "#000000", nombre: "Negro" },
        { hex: "#FFFFFF", nombre: "Blanco" },
        { hex: "#808080", nombre: "Gris" },
        { hex: "#FFA500", nombre: "Naranja" },
        { hex: "#800080", nombre: "Morado" },
        { hex: "#964B00", nombre: "Marrón" }
    ];

    const tabla = document.getElementById("tablaColores");

    colores.forEach(color => {

        const fila = document.createElement("tr");
        const celda = document.createElement("td");

        celda.textContent = color.hex; 

        // Evento: Poner puntero encima
        celda.addEventListener("mouseover", (evento) => {
            celda.style.backgroundColor = color.hex;
            celda.style.color = "#FFFFFF";
        });

        // Evento: Quitar puntero
        celda.addEventListener("mouseout", (evento) => {
            celda.style.backgroundColor = "";
            celda.style.color = "black";
            celda.textContent = color.nombre; 
        });

        fila.appendChild(celda);
        tabla.appendChild(fila);
    });

});
