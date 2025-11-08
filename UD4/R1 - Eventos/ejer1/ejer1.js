function pulsa (){
    document.addEventListener("click", (event)=>{
        alert("Has hecho click en la pantalla")
    })
}

(function inicar(){
    pulsa();
})();