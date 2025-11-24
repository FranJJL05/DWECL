const devuelveCookie = (nombre) => {
    const name = nombre + "="
    let decodedCookie = decodeURIComponent(document.cookie)
    let ca = decodedCookie.split(";")
    
    for (let i = 0; i < ca.length; i++) {
        let cookie = ca[i];
        cookie = cookie.trimStart();

        if (cookie.startsWith(name)) {
            return cookie.substring(name.length);
        }
    }

    return null;
}


const mostrarCookie = () => {
    alert(document.cookie)
    console.log(devuelveCookie("tema"))
}

const CrearCookie = () => {
    document.cookie = "usuario=Juan"
    document.cookie = "tema=oscuro"
    fCrearCookie("apellido", "perez", 7)
}

const main5_Cookies = () => {
    console.log("Este es el main");

    document.getElementById("btnCrearCookie").addEventListener('click', CrearCookie)
    document.getElementById("btnMostrarCookie").addEventListener('click', mostrarCookie)

}

const fCrearCookie = (nombre, valor, diasExpiracion) => {
    let d = new Date();
    d.setTime(d.getTime() + (diasExpiracion * 24 * 60 * 60 * 1000))
    let expiracion = "expires=" + d.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/"
}


document.addEventListener('DOMContentLoaded', function () {
    main5_Cookies();
})