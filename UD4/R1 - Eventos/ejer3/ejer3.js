const tiempoInicio = new Date().getTime();

window.addEventListener('load', () => {
    const tiempoFin = new Date().getTime();
    
    const tiempo = tiempoFin - tiempoInicio;
    
    console.log(`Tiempo de carga transcurrido (ms): ${tiempo}`);
});
