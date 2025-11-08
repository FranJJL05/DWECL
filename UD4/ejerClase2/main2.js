const eventosDiv=()=>{
    const div = document.getElementById("div1");

    div.addEventListener("mouseover", (event)=> {
        div.style.backgroundColor = 'green';
        div.textContent = `(${event.clientX}, ${event.pageY})`;
        console.log(`Objeto evento:`, event);
        console.log(`Evento: ${event.type} en div ${event.target.id}`);
    })

    div.addEventListener("mouseout", (event)=> {
        div.style.backgroundColor = 'grey';
        div.textContent = `(${event.clientX}, ${event.pageY})`;
    })
}

const controlPulsado=()=>{
    document.addEventListener('keydown', function(event) {
    if (event.ctrlKey) {
        console.log('Ctrl está pulsado');
    } else {
        console.log('Ctrl no está pulsado');
    }
})
}


(function iniciar(){
    eventosDiv();
    controlPulsado();
})();