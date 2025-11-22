/**
 * 4) Crea 3 funciones genéricas para el manejo de cookies:
 */

// a) CrearCookie(identificador,valor,fechaExpiracion): Crea la cookie con sólo un par identificador=valor.
function CrearCookie(identificador, valor, fechaExpiracion) {
    let cookieString = encodeURIComponent(identificador) + "=" + encodeURIComponent(valor);

    if (fechaExpiracion) {
        cookieString += "; expires=" + fechaExpiracion.toUTCString();
    }

    // Aseguramos que la cookie sea accesible en todo el sitio
    cookieString += "; path=/";

    document.cookie = cookieString;
}

// b) LeerCookie(identificador): Devuelve el valor dentro de la cookie para el identificador indicado si existe o null en caso contrario.
function LeerCookie(identificador) {
    let name = encodeURIComponent(identificador) + "=";
    let cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return decodeURIComponent(c.substring(name.length, c.length));
        }
    }
    return null;
}

// c) BorrarCookie().
function BorrarCookie(identificador) {
    // Para borrar, creamos la cookie con una fecha pasada
    CrearCookie(identificador, "", new Date(0));
}


/**
 * 1) Diseña una web que hará uso de cookies para guardar el nombre del usuario.
 */

function gestionarUsuario() {
    let usuario = LeerCookie("usuario");
    const saludoContainer = document.getElementById("saludo-container");
    const mensajeSaludo = document.getElementById("mensaje-saludo");

    if (usuario) {
        // En caso de tener ya creada la cookie deberá leerla y mostrar el mensaje anterior directamente.
        mensajeSaludo.textContent = "Hola, " + usuario;
        saludoContainer.style.display = "block";
    } else {
        // En caso de no tener ninguna cookie de ese sitio, deberá preguntar el nombre del usuario
        usuario = prompt("Por favor, introduce tu nombre:");

        if (usuario) {
            // almacenarlo en una cookie que caducará en 5 minutos.
            let fechaExp = new Date();
            fechaExp.setMinutes(fechaExp.getMinutes() + 5);

            CrearCookie("usuario", usuario, fechaExp);

            // Tras esto saludará al usuario mediante un mensaje en pantalla.
            mensajeSaludo.textContent = "Hola, " + usuario;
            saludoContainer.style.display = "block";
        }
    }
}

document.getElementById("btn-logout").addEventListener("click", () => {
    BorrarCookie("usuario");
    location.reload();
});


/**
 * 2) Mejora el ejercicio anterior dando al usuario las opciones para que pueda configurar el color de fondo, de párrafo y el tamaño de la letra.
 * 3) ¿Cómo podemos hacer que la segunda cookie se borre automáticamente al cerrar el navegador? Compruébalo.
 * R: No estableciendo fecha de expiración (Session Cookie).
 */

function aplicarPreferencias(prefs) {
    if (prefs.bgColor) document.body.style.backgroundColor = prefs.bgColor;
    if (prefs.textColor) document.body.style.color = prefs.textColor;
    if (prefs.fontSize) document.body.style.fontSize = prefs.fontSize + "px";

    // Actualizar inputs
    if (prefs.bgColor) document.getElementById("bg-color").value = prefs.bgColor;
    if (prefs.textColor) document.getElementById("text-color").value = prefs.textColor;
    if (prefs.fontSize) document.getElementById("font-size").value = prefs.fontSize;
}

function guardarPreferencias() {
    const bgColor = document.getElementById("bg-color").value;
    const textColor = document.getElementById("text-color").value;
    const fontSize = document.getElementById("font-size").value;

    const prefs = {
        bgColor: bgColor,
        textColor: textColor,
        fontSize: fontSize
    };

    // Guardamos como JSON string
    // No pasamos fechaExpiracion para que sea de sesión (se borra al cerrar navegador)
    CrearCookie("preferencias", JSON.stringify(prefs));

    aplicarPreferencias(prefs);
    alert("Preferencias guardadas (se borrarán al cerrar el navegador).");
}

document.getElementById("btn-guardar-pref").addEventListener("click", guardarPreferencias);

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
    gestionarUsuario();

    const prefsJSON = LeerCookie("preferencias");
    if (prefsJSON) {
        try {
            const prefs = JSON.parse(prefsJSON);
            aplicarPreferencias(prefs);
        } catch (e) {
            console.error("Error al leer preferencias", e);
        }
    }
});
