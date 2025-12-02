import { get } from "./httpCliente.js";

function getFethcV3(url){
    get(url).then(datos => console.log(datos))
}



const main=()=>{
    console.log('Ejercicio clase 2/12/25');
    getFethcV3('https://fakestoreapi.com/products')
}

document.addEventListener('DOMContentLoaded',main)