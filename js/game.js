// Game Logic and State Management

// Game state object
const gameState = {
    screen: 'main',                    // Current screen: 'main', 'howToPlay', 'countdown', 'playing', 'gameOver'
    targetNumber: 0,                   // Current target number to match
    isPrimeTarget: false,              // Is the current target a prime number?
    gameMode: 'normal',                // Game mode: 'normal' or 'simple'
    selectedPrimes: [],                // Array of selected prime numbers
    currentProduct: 1,                 // Current product of selected primes (Normal Mode)
    currentIntermediate: 0,            // Current intermediate result (Simple Mode - dividing down)
    timeRemaining: 60,                 // Seconds remaining
    timerInterval: null,               // Reference to timer interval
    countdownValue: 3,                 // Countdown before game starts
    countdownInterval: null,           // Reference to countdown interval
    scores: {
        correctFactors: 0,             // Number of correct factorizations
        undoCount: 0                   // Number of undo actions used
    }
};

/**
 * Set the game mode
 * @param {string} mode - 'normal' or 'simple'
 */
function setGameMode(mode) {
    gameState.gameMode = mode;
}

/**
 * Initialize a new game
 */
function initGame() {
    const target = generateRandomTarget(5, 100);
    gameState.targetNumber = target.value;
    gameState.isPrimeTarget = target.isPrime;
    gameState.selectedPrimes = [];
    gameState.currentProduct = 1;
    gameState.currentIntermediate = target.value;  // Start with the target in Simple Mode
    gameState.timeRemaining = 60;
    gameState.countdownValue = 3;
    gameState.scores.correctFactors = 0;
    gameState.scores.undoCount = 0;
}

/**
 * Start the countdown before game begins
 */
function startCountdown() {
    gameState.screen = 'countdown';
    gameState.countdownValue = 3;
    
    updateUI();
    
    gameState.countdownInterval = setInterval(() => {
        gameState.countdownValue--;
        updateUI();
        
        if (gameState.countdownValue <= 0) {
            clearInterval(gameState.countdownInterval);
            // Small delay after showing "Go!" before starting game
            setTimeout(() => {
                startGame();
            }, 500);
        }
    }, 1000);
}

/**
 * Start the main game
 */
function startGame() {
    gameState.screen = 'playing';
    gameState.timeRemaining = 60;
    
    updateUI();
    
    // Start the timer
    gameState.timerInterval = setInterval(() => {
        gameState.timeRemaining--;
        updateUI();
        
        if (gameState.timeRemaining <= 0) {
            endGame();
        }
    }, 1000);
}

/**
 * End the game
 */
function endGame() {
    clearInterval(gameState.timerInterval);
    gameState.screen = 'gameOver';
    updateUI();
}

/**
 * Select a prime number
 * @param {number} prime - The prime number to select
 */
function selectPrime(prime) {
    if (gameState.screen !== 'playing') return;
    
    if (gameState.gameMode === 'simple') {
        // Simple Mode: Check if prime divides evenly
        if (gameState.currentIntermediate % prime !== 0) {
            // Does not divide evenly - do nothing (silent rejection)
            return;
        }
        
        // Divide the intermediate by the prime
        gameState.selectedPrimes.push(prime);
        gameState.currentIntermediate = gameState.currentIntermediate / prime;
        // Also update product for equation display
        gameState.currentProduct = calculateProduct(gameState.selectedPrimes);
        
        console.log('SIMPLE MODE - After clicking ' + prime + ':');
        console.log('  selectedPrimes:', gameState.selectedPrimes);
        console.log('  currentProduct:', gameState.currentProduct);
        console.log('  currentIntermediate:', gameState.currentIntermediate);
        
        playClickSound();
        updateUI();
        
        // Check if we reached 1 (all factors selected)
        if (gameState.currentIntermediate === 1) {
            onTargetMatched();
        }
    } else {
        // Normal Mode: Multiply
        gameState.selectedPrimes.push(prime);
        gameState.currentProduct = calculateProduct(gameState.selectedPrimes);
        
        playClickSound();
        updateUI();
        
        // Check if we matched the target
        if (gameState.currentProduct === gameState.targetNumber) {
            onTargetMatched();
        }
    }
}

/**
 * Handle when target is matched
 */
function onTargetMatched() {
    gameState.scores.correctFactors++;
    
    // Update score immediately
    updateUI();
    
    playSuccessSound();
    showSuccessAnimation();
    
    // Brief pause to show success animation before generating new target
    setTimeout(() => {
        // Generate new target and reset selection
        const target = generateRandomTarget(5, 100);
        gameState.targetNumber = target.value;
        gameState.isPrimeTarget = target.isPrime;
        gameState.selectedPrimes = [];
        gameState.currentProduct = 1;
        gameState.currentIntermediate = target.value;  // Reset intermediate for Simple Mode
        
        updateUI();
    }, 600); // 600ms - slightly longer than animation for better UX
}

/**
 * Undo a prime selection
 * @param {number} primeToRemove - The prime number to remove (removes last occurrence)
 */
function undoPrime(primeToRemove) {
    if (gameState.screen !== 'playing') return;
    if (gameState.selectedPrimes.length === 0) return;
    
    // Find last index of the prime
    const lastIndex = gameState.selectedPrimes.lastIndexOf(primeToRemove);
    
    if (lastIndex !== -1) {
        gameState.selectedPrimes.splice(lastIndex, 1);
        gameState.scores.undoCount++;
        
        if (gameState.gameMode === 'simple') {
            // Simple Mode: Multiply back the intermediate
            gameState.currentIntermediate = gameState.currentIntermediate * primeToRemove;
            // Also update product for equation display
            gameState.currentProduct = calculateProduct(gameState.selectedPrimes);
        } else {
            // Normal Mode: Recalculate product
            gameState.currentProduct = calculateProduct(gameState.selectedPrimes);
        }
        
        playUndoSound();
        updateUI();
        
        // Check if we matched the target after undo
        if (gameState.gameMode === 'normal' && gameState.currentProduct === gameState.targetNumber) {
            onTargetMatched();
        } else if (gameState.gameMode === 'simple' && gameState.currentIntermediate === 1) {
            onTargetMatched();
        }
    }
}

/**
 * Return to main menu
 */
function returnToMainMenu() {
    gameState.screen = 'main';
    initGame();
    updateUI();
}

/**
 * Show how to play screen
 */
function showHowToPlay() {
    gameState.screen = 'howToPlay';
    updateUI();
}

/**
 * Handle Prime button click
 */
function handlePrimeClick() {
    if (gameState.screen !== 'playing') return;
    
    // Check if current target is actually prime
    if (gameState.isPrimeTarget) {
        // Correct! Treat like success
        onTargetMatched();
    }
    // If not prime (composite), do nothing (no penalty)
}


