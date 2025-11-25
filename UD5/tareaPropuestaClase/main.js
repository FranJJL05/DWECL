import db from './db.json' with {type: 'json'};


function mostrarProductoCompleto(evento) {
    const idProducto = evento.currentTarget.dataset.id;

    const productoSeleccionado = db.find(producto => producto.id == idProducto);

    if (productoSeleccionado) {
        console.log("Producto seleccionado:", productoSeleccionado);
        mostrarProductoCompletoEnPantalla(productoSeleccionado);
    }
}


function crearNodos(productos) {
    const nodePadre = document.getElementById('contenedor');
    nodePadre.innerHTML = '';

    for (let i = 0; i < productos.length; i++) {
        let producto = productos[i];

        let div = document.createElement('div');
        div.classList.add('producto-card');
        div.dataset.id = producto.id;

        // Volvemos a activar mostrarProductoCompleto
        div.addEventListener('click', mostrarProductoCompleto);

        const imagen = document.createElement('img');
        imagen.src = producto.image;
        imagen.classList.add('producto-imagen');

        const titulo = document.createElement('p');
        titulo.textContent = `Título: ${producto.title}`;

        const id = document.createElement('p');
        id.textContent = `Id: ${producto.id}`;

        div.appendChild(imagen);
        div.appendChild(titulo);
        div.appendChild(id);

        nodePadre.appendChild(div);
    }
}


function crearSelectCategorias() {
    const categorias = [];
    db.forEach(producto => {
        if (!categorias.includes(producto.category)) {
            categorias.push(producto.category);
        }
    });

    const selectElement = document.createElement('select');

    const opcionTodas = document.createElement('option');
    opcionTodas.value = '';
    opcionTodas.textContent = 'Todas las categorías';
    selectElement.appendChild(opcionTodas);

    categorias.forEach(categoria => {
        const opcionCategoria = document.createElement('option');
        opcionCategoria.value = categoria;
        opcionCategoria.textContent = categoria;
        selectElement.appendChild(opcionCategoria);
    });

    // Insertamos el select ANTES del contenedor
    const contenedor = document.getElementById('contenedor');
    contenedor.parentNode.insertBefore(selectElement, contenedor);

    selectElement.addEventListener('change', (event) => {
        const categoriaSeleccionada = event.target.value;

        let productosFiltrados;
        if (categoriaSeleccionada === '') {
            productosFiltrados = db;
        } else {
            productosFiltrados = db.filter(producto => producto.category === categoriaSeleccionada);
        }

        crearNodos(productosFiltrados);
    });
}

function mostrarProductoCompletoEnPantalla(producto) {
    const detalle = document.getElementById('detalle-producto');
    detalle.innerHTML = ''; // limpiar anterior

    const div = document.createElement('div');
    div.classList.add('detalle-card');

    div.innerHTML = `
        <h2>${producto.title}</h2>
        <img src="${producto.image}" class="detalle-imagen" />
        <p><strong>ID:</strong> ${producto.id}</p>
        <p><strong>Categoría:</strong> ${producto.category}</p>
        <p><strong>Descripción:</strong> ${producto.description}</p>
        <p><strong>Precio:</strong> ${producto.price} €</p>
    `;

    detalle.appendChild(div);
}

const main = () => {
    crearSelectCategorias();
    crearNodos(db); 
};

document.addEventListener('DOMContentLoaded', main);
