const campo = document.getElementById('texto');

campo.addEventListener('blur', (evento) => {
    campo.value = campo.value.replace(/&/g, 'and'); 
    //La g se pone para que cambie todos los caracteres &, no solo el primero que aparezca
});