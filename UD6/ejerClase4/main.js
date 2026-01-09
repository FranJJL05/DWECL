const caracteres = [];

function cards(datos) {
    const contenedor = document.getElementById('contenedor')
    datos.items.forEach(element => {
        const cardElement = card(element);

        cardElement.addEventListener('click', () => agregarAlCarrito(element));

        contenedor.appendChild(cardElement);
    });
}

function card(element) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
    <img src="${element.image}" alt="${element.name}">
    <h2>${element.name}</h2>
    <p><strong>Species:</strong> ${element.species}</p>
    <p><strong>Gender:</strong> ${element.gender}</p>
    <p><strong>Status:</strong> ${element.status}</p>
    `
    return card
}

const devuelvePersonajes = async () => {
    const API_URL = "https://futuramaapi.com/api/characters";

    const charactersP = await fetch(API_URL).then((resultado) => resultado.json());
    console.log('charactersP', charactersP);

    cards(charactersP);
}


function agregarAlCarrito(element) {
    let carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];
    carrito.push(element);
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
}

function mostrarCarrito() {
    let carrito = sessionStorage.getItem("carrito") || [];
    const contenedor = document.getElementById('carrito');
    contenedor.innerHTML = "";
    carrito.forEach(element => {
        const cardElement = card(element);
        contenedor.appendChild(cardElement);
    });
}


const main = () => {

    if (!sessionStorage.getItem("usuarioEncontrado")) {
        window.location.href = "login.html";
    }

    devuelvePersonajes();
    mostrarCarrito();
}

document.addEventListener("DOMContentLoaded", main);