const capturarRaton=()=>{
    document.addEventListener('mousemove', (event)=>{
        console.log(`Posicion: ${event.clientX}, ${event.clientY}`);
    })
}

(function iniciar(){
    capturarRaton();
})();