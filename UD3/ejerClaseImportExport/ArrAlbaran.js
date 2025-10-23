import { Albaran } from "Albaran.js";

export class Albaranes{
    constructor(arrAlbaran){
        this.arrAlbaran = arrAlbaran;
    }

    Inicializa(){
        const arrAlbaran = [];
        console.log("Inicializando datos");
        for (let i = 0; i < 3; i++) {
            arrAlbaran.push(new Albaran(cliente[i], i, Date, []))
            
        }
        return arrAlbaran;
    }

    mostrarTodos() {
        console.log(`Listado de ${this.arrAlbaran.length} Albaranes`);
        this.arrAlbaran.forEach(albaran => albaran.mostrarAlbaran());
    }

    buscarAlbaranesCliente(arrAlbaran, cliente1){
        arrAlbaran = [];
        if (condition) {
            array.forEach(element => {
                console.log(albaran)
            });
        }
    }

    buscarEnAlbaranClientePorCodigo(arrAlbaran, cod){
        let valor2 = arrAlbaran.find(albaran => albaran.nAlbaran == 2);
        console.log(valor2);
    }

    // Agregar cada albaran a una lista de albaranes y luego mostrar esa lista.
}