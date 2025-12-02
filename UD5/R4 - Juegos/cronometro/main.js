// 1. Variables de estado fuera del main para que sean accesibles
let segundos = 0; 
let intervalId = null; 

function actualizarDisplay(display) {
    // Calcula minutos y segundos
    const mins = Math.floor(segundos / 60); 
    const secs = segundos % 60; 
    
    // Formatea a dos dígitos (00:00)
    const formatoMins = String(mins).padStart(2, '0');
    const formatoSecs = String(secs).padStart(2, '0');

    display.textContent = `${formatoMins}:${formatoSecs}`;
}

function stopTimer() {
    clearInterval(intervalId);
    intervalId = null; 
}

const main = () => {
    // 2. Selección de elementos del DOM dentro de main
    const display = document.getElementById('display');
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const resetBtn = document.getElementById('resetBtn');

    // Función Start
    const startTimer = () => {
        if (intervalId !== null) return; 

        // Inicia la cuenta, llamando a la función cada 1 segundo (1000ms)
        intervalId = setInterval(() => {
            segundos++; 
            actualizarDisplay(display); 
        }, 1000); 
    };

    // Función Reset
    const resetTimer = () => {
        stopTimer(); 
        segundos = 0; 
        actualizarDisplay(display); 
    };

    // 3. Event Listeners
    startBtn.addEventListener('click', startTimer);
    stopBtn.addEventListener('click', stopTimer);
    resetBtn.addEventListener('click', resetTimer);
};

// 4. Ejecutar main cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', main);