const main = () => {
    console.log("Este es el main");
    const div = document.querySelector("div")
    console.log("Div con DOMContentLoaded:", div);

    document.getElementById("principal").addEventListener('click', function(event){
        console.log(`Evento: ${event.type} en ${event.target.tagName} (DOMContentLoaded) :this${this.tagName}`);
    })

    // Hay que usar function y no arrow funcion cuando queremos usar el this
    
};



document.addEventListener("DOMContentLoaded", main);

const div = document.querySelector("div")
console.log("Div:", div);
