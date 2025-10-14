// UI Update Functions

/**
 * Update the entire UI based on current game state
 */
function updateUI() {
    hideAllScreens();
    
    switch (gameState.screen) {
        case 'main':
            showMainMenu();
            break;
        case 'howToPlay':
            showHowToPlay();
            break;
        case 'countdown':
            showCountdown();
            break;
        case 'playing':
            showGameScreen();
            break;
        case 'gameOver':
            showGameOver();
            break;
    }
}

/**
 * Hide all screens
 */
function hideAllScreens() {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
}

/**
 * Show main menu screen
 */
function showMainMenu() {
    document.getElementById('main-menu').classList.add('active');
}

/**
 * Show how to play screen
 */
function showHowToPlay() {
    document.getElementById('how-to-play').classList.add('active');
}

/**
 * Show countdown screen
 */
function showCountdown() {
    const countdownScreen = document.getElementById('countdown');
    const countdownNumber = document.getElementById('countdown-number');
    
    countdownScreen.classList.add('active');
    
    if (gameState.countdownValue > 0) {
        countdownNumber.textContent = gameState.countdownValue;
    } else {
        countdownNumber.textContent = 'Go!';
    }
}

/**
 * Show game screen with all current values
 */
function showGameScreen() {
    const gameScreen = document.getElementById('game-screen');
    gameScreen.classList.add('active');
    
    // Update target number
    document.getElementById('target-number').textContent = gameState.targetNumber;
    
    // Update timer
    const timerDisplay = document.getElementById('timer');
    timerDisplay.textContent = gameState.timeRemaining;
    
    // Add warning class if time is running out
    if (gameState.timeRemaining <= 10) {
        timerDisplay.classList.add('warning');
    } else {
        timerDisplay.classList.remove('warning');
    }
    
    // Update scores
    document.getElementById('correct-score').textContent = gameState.scores.correctFactors;
    document.getElementById('undo-score').textContent = gameState.scores.undoCount;
    
    // Update equation display
    updateEquationDisplay();
}

/**
 * Update the equation display
 */
function updateEquationDisplay() {
    const equationDisplay = document.getElementById('equation-display');
    
    if (gameState.selectedPrimes.length === 0) {
        equationDisplay.innerHTML = '<span class="equation-placeholder">Click primes below to start</span>';
        return;
    }
    
    // Build the equation string with clickable primes
    let equationHTML = '';
    
    gameState.selectedPrimes.forEach((prime, index) => {
        equationHTML += `<span class="equation-prime" data-prime="${prime}">${prime}</span>`;
        
        if (index < gameState.selectedPrimes.length - 1) {
            equationHTML += '<span class="equation-operator">×</span>';
        }
    });
    
    equationHTML += '<span class="equation-equals">=</span>';
    equationHTML += `<span class="equation-result">${gameState.currentProduct}</span>`;
    
    equationDisplay.innerHTML = equationHTML;
    
    // Add click listeners to the primes in the equation for undo
    equationDisplay.querySelectorAll('.equation-prime').forEach(primeElement => {
        primeElement.addEventListener('click', () => {
            const prime = parseInt(primeElement.dataset.prime);
            undoPrime(prime);
        });
    });
}

/**
 * Show game over screen
 */
function showGameOver() {
    const gameOverScreen = document.getElementById('game-over');
    gameOverScreen.classList.add('active');
    
    // Update final scores
    document.getElementById('final-correct').textContent = gameState.scores.correctFactors;
    document.getElementById('final-undo').textContent = gameState.scores.undoCount;
}

/**
 * Show success animation
 */
function showSuccessAnimation() {
    const gameScreen = document.getElementById('game-screen');
    gameScreen.classList.add('success-flash');
    
    setTimeout(() => {
        gameScreen.classList.remove('success-flash');
    }, 500);
}


