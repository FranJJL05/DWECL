window.addEventListener('load', () => {

    // Obtenemos la tabla donde dibujaremos
    const tabla = document.getElementById("lienzo");

    // Creamos 100 filas
    for (let i = 0; i < 100; i++) {

        const fila = document.createElement("tr");

        // Creamos 100 celdas por fila
        for (let j = 0; j < 100; j++) {

            const celda = document.createElement("td");

            // Detectamos movimiento del ratón sobre la celda
            celda.addEventListener("mousemove", (evento) => {

                // Si Ctrl está pulsado → pinta rojo
                if (evento.ctrlKey) {
                    celda.style.backgroundColor = "red";
                }
                // Si Shift está pulsado → pinta azul
                else if (evento.shiftKey) {
                    celda.style.backgroundColor = "blue";
                }
                // Si no, no se pinta nada
            });

            fila.appendChild(celda);
        }

        tabla.appendChild(fila);
    }

})

