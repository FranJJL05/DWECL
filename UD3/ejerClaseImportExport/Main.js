import { Albaran } from "./Albaran.js";
import { Articulo } from "./Articulo.js";
import { Cliente } from "./Cliente.js";
import { Albaranes } from "./ArrAlbaran.js";



(function () {
    console.log("Ejecutando Main")
    const cliente1 = new Cliente(1234, "Juan", "Avenida de la estación", 666777888, "j@gmail.com");
    const cliente2 = new Cliente(4575, "Pepe", "Rio de Sol", 98766569, "pepe@gmail.com");

    const articulo1 = new Articulo(333, "Lápiz", "1.20");
    const articulo2 = new Articulo(444, "Goma", "1.00");

    const fecha = new Date().toString();
    const albaran = new Albaran(cliente1, 1, "8/8/11", [articulo1]);
    const albaran2 = new Albaran(cliente2, 2, "3/10/23", [articulo2])

    albaran.addArticulo(articulo1);
    albaran.addArticulo(articulo2);

    albaran2.addArticulo(articulo1);
    albaran2.addArticulo(articulo2);

    
    albaran.mostrarAlbaran();
    albaran2.mostrarAlbaran();

    const listaAlbaranes = [albaran, albaran2];
    const coleccionAlbaranes = new Albaranes(listaAlbaranes);
    
    coleccionAlbaranes.mostrarTodos();
})();