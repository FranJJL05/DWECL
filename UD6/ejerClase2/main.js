import { get } from "./httpCliente.js";

function cards(array) {
    const contenedor = document.getElementById('contenedor')
    array.forEach(element => {
        const cardElement = card(element);

        // Añadir evento click a cada card
        cardElement.addEventListener('click', () => {
            mostrarDetalles(element);
        });

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

function mostrarDetalles(personaje) {
    let modal = document.getElementById('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <div class="modal-body">
                <img src="${personaje.image}" alt="${personaje.name}">
                <div class="modal-info">
                    <h2>${personaje.name}</h2>
                    <p><strong>ID:</strong> ${personaje.id}</p>
                    <p><strong>Status:</strong> ${personaje.status}</p>
                    <p><strong>Species:</strong> ${personaje.species}</p>
                    <p><strong>Type:</strong> ${personaje.type || 'N/A'}</p>
                    <p><strong>Gender:</strong> ${personaje.gender}</p>
                    <p><strong>Origin:</strong> ${personaje.origin.name}</p>
                    <p><strong>Location:</strong> ${personaje.location.name}</p>
                    <p><strong>Created:</strong> ${new Date(personaje.created).toLocaleDateString()}</p>
                    <p><strong>Episodes:</strong> ${personaje.episode.length}</p>
                </div>
            </div>
        </div>
    `;

    modal.style.display = 'block';
    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };

    modal.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

const main = () => {
    const url = 'https://rickandmortyapi.com/api/character';

    get(url)
        .then(data => {
            console.log(data);
            cards(data.results);
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
}

document.addEventListener('DOMContentLoaded', main)