const resultado = () =>{
    
    const todosLosEnlaces = document.querySelectorAll('a');
    let numEnlacesTotales = 1;
    numEnlacesTotales = todosLosEnlaces.length;
    console.log('Numero total de enlaces de la página:', numEnlacesTotales - document.getElementsByTagName('p').length);

    const penultimoEnlace = todosLosEnlaces[numEnlacesTotales - 2];
    console.log('Dirección a la que enlaza el penúltimo enlace:', penultimoEnlace);

    let enlacesGoogle = 0;

    todosLosEnlaces.forEach(enlace => {
        if (enlace.href.includes('google.com')) {
            enlacesGoogle++;
        }
    });
    console.log('Número de enlaces que enlazan a Google', enlacesGoogle);

    const tercerParrafo = document.getElementById('tercerParrafo');
    let numEnlacesTercerParrafo = 0;

    if (tercerParrafo) {
        const enlacesTercerParrafo = tercerParrafo.querySelectorAll('a');
        numEnlacesTercerParrafo = enlacesTercerParrafo.length;
    }

    console.log('Número de enlaces del tercer párrafo', numEnlacesTercerParrafo - 1);
}


const main=()=>{
    resultado();
}

document.addEventListener('DOMContentLoaded', main)