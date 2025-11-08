window.addEventListener('load', () => {

    const tabla = document.getElementById("lienzo");

    // Quitar menú del clic derecho
    tabla.addEventListener("contextmenu", (evento) => {
        evento.preventDefault();
    });

    // Crear la tabla 100x100
    for (let i = 0; i < 100; i++) {
        const fila = document.createElement("tr");

        for (let j = 0; j < 100; j++) {

            const celda = document.createElement("td");

            // Dibujar y borrar según tecla o botón
            celda.addEventListener("mousemove", (evento) => {

                // Ctrl = pintar rojo
                if (evento.ctrlKey) {
                    celda.style.backgroundColor = "red";
                }
                // Shift = pintar azul
                else if (evento.shiftKey) {
                    celda.style.backgroundColor = "blue";
                }
                //Al pulsar la tecla alt borra lineas
                else if (evento.altKey) {
                    celda.style.backgroundColor = "";
                }

            });

            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }


    // BOTÓN PARA BORRAR TODO
    const botonBorrarTodo = document.getElementById("borrarTodo");
    botonBorrarTodo.addEventListener("click", (evento) => {
        const celdas = tabla.getElementsByTagName("td");
        for (let celda of celdas) {
            celda.style.backgroundColor = "";
        }
    });

});