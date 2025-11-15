// main.js - Ejercicio 2

// Definición de las constantes y variables
const STEP_SIZE_PX = 2; // El tamaño del incremento/decremento
let currentFontSize; // Se inicializará al valor del DOM
let BASE_FONT_SIZE_PX = 16; // Valor inicial por defecto, se ajustará con el DOM

// 1. Elementos DOM
const textContainer = document.getElementById('text-container');
const btnIncrease = document.getElementById('btn-increase');
const btnDecrease = document.getElementById('btn-decrease');
const btnResetSize = document.getElementById('btn-reset-size');
const btnAlignJustify = document.getElementById('btn-align-justify');
const btnAlignLeft = document.getElementById('btn-align-left');


/**
 * ## Funciones de Tamaño de Fuente
 */

function updateFontSize(newSize) {
    // Se asegura de que el nuevo tamaño sea un número antes de aplicarlo
    if (textContainer) {
        currentFontSize = newSize;
        textContainer.style.fontSize = `${newSize}px`;
    }
}

function increaseFontSize() {
    // Incrementa el tamaño actual y lo aplica
    updateFontSize(currentFontSize + STEP_SIZE_PX);
    console.log(`Tamaño de fuente aumentado a: ${currentFontSize}px`);
}

function decreaseFontSize() {
    // Decrementa el tamaño actual. Evita tamaños de fuente ridículamente pequeños (mínimo 6px).
    if (currentFontSize > 6) {
        updateFontSize(currentFontSize - STEP_SIZE_PX);
        console.log(`Tamaño de fuente disminuido a: ${currentFontSize}px`);
    } else {
        console.log("No se puede disminuir más el tamaño de fuente.");
    }
}

function resetFontSize() {
    // Restablece el tamaño de fuente al valor base
    updateFontSize(BASE_FONT_SIZE_PX);
    console.log(`Tamaño de fuente restablecido a: ${BASE_FONT_SIZE_PX}px`);
}


/**
 * ## Funciones de Alineación
 */

function alignJustify() {
    // Alinea el texto a justificado
    if (textContainer) {
        textContainer.style.textAlign = 'justify';
        console.log("Alineación cambiada a: Justificada");
    }
}

function alignLeft() {
    // Alinea el texto a la izquierda (valor por defecto)
    if (textContainer) {
        textContainer.style.textAlign = 'left';
        console.log("Alineación cambiada a: Izquierda");
    }
}


/**
 * ## Inicialización y Asignación de Eventos
 */

function initializeExercise2() {
    // 1. Obtener y establecer el tamaño de fuente inicial
    if (textContainer) {
        // Obtenemos el tamaño de fuente real del navegador (ej. 16px) y lo guardamos como BASE y CURRENT
        const computedStyle = window.getComputedStyle(textContainer);
        // Parseamos el valor (ej. "16px" -> 16)
        BASE_FONT_SIZE_PX = parseFloat(computedStyle.fontSize); 
        currentFontSize = BASE_FONT_SIZE_PX;
    }
    
    // 2. Asignación de Eventos
    
    // Tamaño de fuente
    if (btnIncrease) btnIncrease.addEventListener('click', increaseFontSize);
    if (btnDecrease) btnDecrease.addEventListener('click', decreaseFontSize);
    if (btnResetSize) btnResetSize.addEventListener('click', resetFontSize);

    // Alineación
    if (btnAlignJustify) btnAlignJustify.addEventListener('click', alignJustify);
    if (btnAlignLeft) btnAlignLeft.addEventListener('click', alignLeft);
    
    console.log("Ejercicio 2: Inicialización completada. Eventos asignados.");
}

// Ejecutar la inicialización cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', initializeExercise2);