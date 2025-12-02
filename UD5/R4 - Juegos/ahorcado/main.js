const words = {
    Cities: ["MADRID", "PARIS", "ROMA", "TOKIO", "BERLIN", "LONDRES"],
    Food: ["PIZZA", "PASTA", "TACOS", "ENSALADA", "HAMBURGUESA"]
};

let chosenWord = "";
let guessedWord = [];
let lives = 10;
let category = "";

const wordDisplay = document.getElementById('wordDisplay');
const livesDisplay = document.getElementById('livesDisplay');
const keyboardDiv = document.getElementById('keyboard');
const categoryDisplay = document.getElementById('category');
const messageDisplay = document.getElementById('message');
const resetBtn = document.getElementById('resetBtn');

function updateDisplay() {
    wordDisplay.textContent = guessedWord.join(' ');
    livesDisplay.textContent = `You have ${lives} lives`;
}

function createKeyboard() {
    keyboardDiv.innerHTML = '';
    for (let i = 65; i <= 90; i++) {
        const letter = String.fromCharCode(i);
        const button = document.createElement('button');
        button.textContent = letter;
        button.classList.add('key-button');
        button.addEventListener('click', () => handleGuess(letter, button));
        keyboardDiv.appendChild(button);
    }
}

function handleGuess(letter, button) {
    button.disabled = true;
    let found = false;

    for (let i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i] === letter) {
            guessedWord[i] = letter;
            found = true;
        }
    }

    if (!found) {
        lives--;
    }

    updateDisplay();
    checkGameStatus();
}

function endGame(won) {
    const buttons = keyboardDiv.querySelectorAll('.key-button');
    buttons.forEach(btn => btn.disabled = true);
    resetBtn.style.display = 'block';
}

function checkGameStatus() {
    if (lives <= 0) {
        messageDisplay.textContent = `Game Over! The word was ${chosenWord}.`;
        endGame(false);
    } else if (!guessedWord.includes('_')) {
        messageDisplay.textContent = "You Won!";
        endGame(true);
    }
}

function setupGame() {
    const categoryKeys = Object.keys(words);
    category = categoryKeys[Math.floor(Math.random() * categoryKeys.length)];
    
    const wordList = words[category];
    chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
    
    guessedWord = Array(chosenWord.length).fill('_');
    lives = 10;

    categoryDisplay.textContent = category;
    messageDisplay.textContent = '';
    resetBtn.style.display = 'none';
    
    updateDisplay();
    createKeyboard();
}

const main = () => {
    resetBtn.addEventListener('click', setupGame);
    setupGame();
}

document.addEventListener('DOMContentLoaded', main);