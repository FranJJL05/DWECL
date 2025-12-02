// Variables del juego
const totalCards = 10;
const cardValues = ['A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E'];
let cardsFlipped = [];
let matchesFound = 0;
let gameActive = false;
let flipLock = false;

// Variables del cronómetro
let seconds = 0;
let timerInterval = null;

// Elementos del DOM
let timeDisplay;
let gameBoard;
let messageDisplay;

// --- Lógica del Cronómetro ---
function formatTime() {
    const mins = Math.floor(seconds / 60); 
    const secs = seconds % 60; 
    
    const formatoMins = String(mins).padStart(2, '0');
    const formatoSecs = String(secs).padStart(2, '0');

    timeDisplay.textContent = `${formatoMins}:${formatoSecs}`;
}

function startTimer() {
    if (timerInterval !== null) return; 
    timerInterval = setInterval(() => {
        seconds++; 
        formatTime(); 
    }, 1000); 
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null; 
}

// --- Lógica del Juego ---
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createBoard() {
    shuffleArray(cardValues);
    gameBoard.innerHTML = '';
    
    cardValues.forEach((value, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.value = value;
        cardElement.dataset.index = index;
        
        // ¡CRUCIAL! Insertar el valor que el CSS oculta
        cardElement.textContent = value;
        
        cardElement.addEventListener('click', handleCardClick);
        gameBoard.appendChild(cardElement);
    });
}

function startGame() {
    gameActive = true;
    seconds = 0;
    matchesFound = 0;
    cardsFlipped = [];
    messageDisplay.textContent = 'Find all the pairs!';
    
    const cards = gameBoard.querySelectorAll('.card');
    cards.forEach(card => card.classList.remove('flipped', 'matched'));

    startTimer();
}

function handleCardClick(event) {
    if (!gameActive || flipLock) {
        // Inicia el juego si es el primer click
        if (cardsFlipped.length === 0 && !gameActive) {
            startGame();
        } else {
            return;
        }
    }

    const clickedCard = event.currentTarget;
    
    if (clickedCard.classList.contains('flipped') || clickedCard.classList.contains('matched')) return;

    // ¡CRUCIAL! Esta línea añade la clase que el CSS revela
    clickedCard.classList.add('flipped');
    cardsFlipped.push(clickedCard);

    if (cardsFlipped.length === 2) {
        flipLock = true;
        checkMatch();
    }
}

function checkMatch() {
    const [card1, card2] = cardsFlipped;
    
    if (card1.dataset.value === card2.dataset.value) {
        // Coincidencia
        card1.classList.add('matched');
        card2.classList.add('matched');
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');

        matchesFound++;
        flipLock = false;
        cardsFlipped = [];
        
        if (matchesFound === totalCards / 2) {
            endGame(true);
        }
    } else {
        // No Coincidencia: Oculta las cartas después de 1 segundo
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flipLock = false;
            cardsFlipped = [];
        }, 1000); 
    }
}

function endGame(win) {
    stopTimer();
    gameActive = false;
    if (win) {
        messageDisplay.textContent = `¡GANASTE! Lo lograste en ${timeDisplay.textContent}`;
    }
}

// --- Función Principal ---
const main = () => {
    timeDisplay = document.getElementById('time');
    gameBoard = document.getElementById('gameBoard');
    messageDisplay = document.getElementById('message');

    createBoard();
};

document.addEventListener('DOMContentLoaded', main);