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
    
    // Show/hide intermediate display based on game mode
    const intermediateItem = document.getElementById('intermediate-item');
    const intermediateNumber = document.getElementById('intermediate-number');
    const equationSection = document.querySelector('.equation-section');
    
    if (gameState.gameMode === 'simple') {
        // Simple Mode: Show both intermediate AND equation
        intermediateItem.style.display = 'block';
        intermediateNumber.textContent = gameState.currentIntermediate;
        equationSection.style.display = 'block';
    } else {
        // Normal Mode: Hide intermediate, show equation only
        intermediateItem.style.display = 'none';
        equationSection.style.display = 'block';
    }
    
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
    
    // Update equation display (for both modes)
    updateEquationDisplay();
}

/**
 * Update just the intermediate value (Simple Mode)
 */
function updateIntermediateDisplay() {
    const intermediateNumber = document.getElementById('intermediate-number');
    if (intermediateNumber) {
        intermediateNumber.textContent = gameState.currentIntermediate;
    }
}

/**
 * Update the equation display (Normal Mode only)
 */
function updateEquationDisplay() {
    const equationDisplay = document.getElementById('equation-display');
    
    if (gameState.selectedPrimes.length === 0) {
        equationDisplay.innerHTML = `<span class="equation-placeholder">Click primes below to start</span>`;
        return;
    }
    
    let equationHTML = '';
    
    // Normal Mode: Show multiplication format (2 × 3 = 6)
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

/**
 * Show a specific screen by ID
 * @param {string} screenId - The ID of the screen to show
 */
function showScreen(screenId) {
    hideAllScreens();
    const screen = document.getElementById(screenId);
    if (screen) {
        screen.classList.remove('hidden');
        screen.classList.add('active');
    }
}

/**
 * Update user profile UI (photo and name)
 * @param {string} name - User's display name
 * @param {string|null} photoURL - URL to user's photo, or null for guest
 */
function updateUserProfileUI(name, photoURL) {
    const userProfile = document.getElementById('user-profile');
    const userPhoto = document.getElementById('user-photo');
    const userName = document.getElementById('user-name');
    
    if (!userProfile || !userPhoto || !userName) {
        console.error('User profile elements not found');
        return;
    }
    
    userName.textContent = name;
    
    if (photoURL) {
        userPhoto.src = photoURL;
        userPhoto.style.display = 'block';
    } else {
        userPhoto.style.display = 'none';
    }
}

/**
 * Show UI elements for signed-in users
 */
function showSignedInUI() {
    const userProfile = document.getElementById('user-profile');
    const signInBtn = document.getElementById('sign-in-btn');
    
    if (userProfile) userProfile.style.display = 'flex';
    if (signInBtn) signInBtn.style.display = 'none';
}

/**
 * Show UI elements for signed-out users (guests)
 */
function showSignedOutUI() {
    const userProfile = document.getElementById('user-profile');
    const signInBtn = document.getElementById('sign-in-btn');
    
    if (userProfile) userProfile.style.display = 'none';
    if (signInBtn) signInBtn.style.display = 'inline-block';
}


