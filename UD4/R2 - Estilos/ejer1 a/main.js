function ejercicio1a() {
    // 1. Obtener los elementos HTML y los botones por ID
    const containerIzq = document.getElementsByClassName("container-izq")[0];
    const parrafoOculto = document.getElementById("parrafo-oculto");
    const marco = document.getElementById("marco-especial");
    const header = document.querySelector("header"); 
    const mainContent = document.querySelector("main");
    
    // Obtener los botones por su ID
    const btnNormal = document.getElementById("tema-normal-btn"); 
    const btnMinimalista = document.getElementById("tema-minimalista-btn");

    // Función auxiliar para aplicar/resetear los estilos específicos de los enlaces (<a>)
    // NOTA: Esta función ahora manipula directamente los elementos btnNormal y btnMinimalista
    function styleHeaderLinks(isNormal) {
        if (isNormal) {
            // Estilos para el Tema Normal (aplicados a AMBOS botones)
            
            // Estilos generales de enlace en tema Normal
            btnNormal.style.color = "#0033cc"; 
            btnMinimalista.style.color = "#0033cc";
            btnNormal.style.textDecoration = "none"; // Aplicando la eliminación de subrayado que tenías en tu código
            btnMinimalista.style.textDecoration = "none";
            btnNormal.style.fontWeight = "bold"; 
            btnMinimalista.style.fontWeight = "bold"; 

        } else {
            // Estilos para el Tema Minimalista (restablecer ambos botones)
            btnNormal.style.color = "";
            btnMinimalista.style.color = "";
            btnNormal.style.textDecoration = "";
            btnMinimalista.style.textDecoration = "";
            btnNormal.style.fontWeight = ""; 
            btnMinimalista.style.fontWeight = "";
        }
    }

    // 2. Función Tema Normal: Aplica los estilos del tema normal
    function temaNormal() { 
        
        // Estilos del cuerpo (body)
        document.body.style.backgroundColor = "#ffffcc"; 
        document.body.style.margin = "0";
        document.body.style.padding = "0";

        // Estilos de la franja azul a la izquierda (.container-izq)
        containerIzq.style.position = "fixed";
        containerIzq.style.top = "0";
        containerIzq.style.left = "0";
        containerIzq.style.width = "80px";
        containerIzq.style.height = "100%";
        containerIzq.style.background = "#0099cc";
        containerIzq.style.display = "block"; 

        // Estilos del encabezado (header)
        header.style.background = "#e6e6ff";
        header.style.padding = "10px";
        header.style.margin = "20px 90px 0 90px"; 
        header.style.fontWeight = "bold";
        header.style.border = "1px solid black";
        header.style.boxSizing = "border-box";
        
        // Aplicar estilos a los botones
        styleHeaderLinks(true); 
        
        // Estilos del contenido principal (main)
        mainContent.style.padding = "20px 90px";

        // Estilos del párrafo especial (#parrafo-oculto)
        parrafoOculto.style.display = "inline";
        parrafoOculto.style.fontWeight = "bold";

        // Estilos del marco especial (#marco-especial)
        marco.style.marginTop = "20px";
        marco.style.paddingLeft = "1rem";
        marco.style.background = "#ffff66";
        marco.style.border = "1px solid #000";
    }

    // 3. Función Tema Minimalista: Quita la mayoría de los estilos
    function temaMinimalista(event) {
        if (event) event.preventDefault(); 

        // Restablece el fondo del cuerpo a blanco (valor por defecto)
        document.body.style.backgroundColor = "white";
        document.body.style.margin = ""; 
        document.body.style.padding = "";

        // Ocultar la franja azul (.container-izq)
        containerIzq.style.display = "none";

        // Restablecer estilos del encabezado (header)
        header.style.background = "white"; 
        header.style.padding = "";
        header.style.margin = "";
        header.style.fontWeight = "";
        header.style.border = "none"; 
        header.style.boxSizing = "";
        
        // Restablecer estilos de los botones
        styleHeaderLinks(false); 

        // Restablecer estilos del contenido principal (main)
        mainContent.style.padding = ""; 

        // Restablecer estilos del marco especial (#marco-especial)
        marco.style.marginTop = "";
        marco.style.paddingLeft = "";
        marco.style.background = "white"; 
        marco.style.border = "none"; 

        // Ocultar el párrafo especial (#parrafo-oculto)
        parrafoOculto.style.display = "none"; 
        parrafoOculto.style.fontWeight = "";
    }

    // 4. Eventos de los botones
    if (btnNormal && btnMinimalista) {
        btnNormal.addEventListener("click", (event) => {
            temaNormal();
            event.preventDefault(); 
        });
        
        btnMinimalista.addEventListener("click", temaMinimalista);
    }
    
    // 5. Aplicar el Tema Normal por defecto
    temaNormal(); 
}

// 6. Funciones de inicialización
function inicializa() {
    ejercicio1a();
    console.log('Ejercicio 1a completado.');
}

// Asegurar que la inicialización ocurra solo después de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', inicializa);