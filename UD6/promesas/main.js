function getFethV2(){
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(error => console.log(error)) //Capturamos el error por ejemplo cambiando la url a https://fakestoreapi.com/productos/55
}


const main =()=>{
    getFethV2();
}

document.addEventListener("DOMContentLoaded", main);