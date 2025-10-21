// Clase Articulo
export class Articulo {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarArticulo() {
        console.log(
            "Código: " + this.codigo + " Nombre: " + this.nombre + " Precio: " + this.precio
        );
    }
}