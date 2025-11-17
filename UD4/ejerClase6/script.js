function crearNodos(nodePadre, num){
    for (let i = 0; i < num; i++) {
        let div = document.createElement('div');
        div.textContent = `Div ${i+1}`
        div.id = `div ${i + 1}`
        nodePadre.appendChild(div);
    }
}

function iniciar(){
    crearNodos(document.getElementById("contenedor"), 6);
}

document.addEventListener('DOMContentLoaded', iniciar)