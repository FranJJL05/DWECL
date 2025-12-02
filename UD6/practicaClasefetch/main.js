function CargarDatos() {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(error => console.log(error))
}

function CargarDatosOnLoadFormateaDatos() {
    fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())
        .then(arDatos => {
            FormatearDatos(arDatos);
        })
        .catch(error => console.error('Error al cargar los datos:', error));
}

function FormatearDatos(arDatos) {
    for (let i = 0; i < arDatos.length; i++) {
        const producto = arDatos[i];
        const divProducto = document.createElement("div");
        divProducto.classList.add('detalle-card');
        divProducto.style.cursor = 'pointer'; // Cambiar cursor para indicar que es clickeable
        divProducto.innerHTML = `
                <p>Id: ${producto.id}</p>
                <p>Título: ${producto.title}</p>
                <p>Precio: ${producto.price}</p>
                <div class="container-img">
                    <img src="${producto.image}" class="detalle-imagen" />
                </div>
            `;

        // Agregar evento click para mostrar detalles del producto
        divProducto.addEventListener('click', () => {
            MostrarDetalleProducto(producto.id);
        });

        contenedorDatos.appendChild(divProducto);
    }
    console.log(arDatos);
}

function MostrarDetalleProducto(id) {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log('Detalles del producto:', data);
            document.getElementById('detalleProducto').innerHTML = (`
                DETALLES DEL PRODUCTO

                ID: ${data.id}
                Título: ${data.title}
                Precio: $${data.price}
                Descripción: ${data.description}
                Categoría: ${data.category}
                Rating: ${data.rating.rate}
                <img src="${data.image}" alt="${data.title}">            
            `);
        })
        .catch(error => console.error('Error al cargar detalles:', error));
}


const main = () => {
    console.log('Cargando script main');
    document.getElementById('cargaDatos').addEventListener('click', CargarDatosOnLoadFormateaDatos)
}




document.addEventListener('DOMContentLoaded', main)  