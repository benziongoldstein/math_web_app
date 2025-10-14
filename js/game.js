// Game Logic and State Management

// Game state object
const gameState = {
    screen: 'main',                    // Current screen: 'main', 'howToPlay', 'countdown', 'playing', 'gameOver'
    targetNumber: 0,                   // Current target number to match
    selectedPrimes: [],                // Array of selected prime numbers
    currentProduct: 1,                 // Current product of selected primes
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
 * Initialize a new game
 */
function initGame() {
    gameState.targetNumber = generateRandomComposite(5, 100);
    gameState.selectedPrimes = [];
    gameState.currentProduct = 1;
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
    
    gameState.selectedPrimes.push(prime);
    gameState.currentProduct = calculateProduct(gameState.selectedPrimes);
    
    playClickSound();
    updateUI();
    
    // Check if we matched the target
    if (gameState.currentProduct === gameState.targetNumber) {
        onTargetMatched();
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
        gameState.targetNumber = generateRandomComposite(5, 100);
        gameState.selectedPrimes = [];
        gameState.currentProduct = 1;
        
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
        gameState.currentProduct = calculateProduct(gameState.selectedPrimes);
        gameState.scores.undoCount++;
        
        playUndoSound();
        updateUI();
        
        // Check if we matched the target after undo
        if (gameState.currentProduct === gameState.targetNumber) {
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


