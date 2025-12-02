function CargarDatos() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("contenedorDatos").innerHTML = this.responseText;
        }
        console.log("ReadyState:" + this.readyState, '-', this.status)

    };
    xhttp.open("GET", "https://fakestoreapi.com/products", true);
    xhttp.send();
}

function CargarDatosOnLoadFormateaDatos() {
    var xhttp = new XMLHttpRequest();

    xhttp.onload = function () {
        let arDatos = JSON.parse(this.responseText);
        FormatearDatos(arDatos);
    };
    xhttp.open("GET", "https://fakestoreapi.com/products", true);
    xhttp.send();
}

function FormatearDatos(arDatos){
    for (let i = 0; i < arDatos.length; i++) {
            const producto = arDatos[i];
            const divProducto = document.createElement("div");
            divProducto.classList.add('detalle-card');
            divProducto.innerHTML = `
                <p>Id: ${producto.id}</p>
                <p>Título: ${producto.title}</p>
                <p>Precio: ${producto.price}</p>
                <div class="container-img">
                    <img src="${producto.image}" class="detalle-imagen" />
                </div>
            `;
            
            contenedorDatos.appendChild(divProducto);
        }
        console.log(arDatos);
}

const main = () => {
    console.log('Cargando script main');
    document.getElementById('cargaDatos').addEventListener('click', CargarDatosOnLoadFormateaDatos)
}




document.addEventListener('DOMContentLoaded', main)  