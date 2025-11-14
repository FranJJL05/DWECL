const expresionRegular=()=>{
    const texto = '32.2'

    const regexNumeroDecimal = /^\d+(\.\d+)?$/;


    if (regexNumeroDecimal.test(texto)) {
        console.log("Es un número válido");
    }else{
        console.log("No es un número válido");
    }

}



document.addEventListener('DOMContentLoaded', ()=>{
    expresionRegular();
});