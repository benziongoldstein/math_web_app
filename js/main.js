// Main Entry Point - Coordinates everything

/**
 * Initialize the application when page loads
 */
document.addEventListener('DOMContentLoaded', () => {
    initGame();
    setupEventListeners();
    updateUI();
});

/**
 * Set up all event listeners
 */
function setupEventListeners() {
    // Main menu buttons
    document.getElementById('start-btn').addEventListener('click', () => {
        initGame();
        startCountdown();
    });
    
    document.getElementById('how-to-play-btn').addEventListener('click', () => {
        showHowToPlay();
    });
    
    // How to play screen
    document.getElementById('back-to-menu-btn').addEventListener('click', () => {
        returnToMainMenu();
    });
    
    // Prime number buttons
    document.querySelectorAll('.prime-btn').forEach(button => {
        button.addEventListener('click', () => {
            const prime = parseInt(button.dataset.prime);
            selectPrime(prime);
        });
    });
    
    // Prime recognition button
    document.getElementById('prime-recognition-btn').addEventListener('click', () => {
        handlePrimeClick();
    });
    
    // Game over screen
    document.getElementById('return-to-menu-btn').addEventListener('click', () => {
        returnToMainMenu();
    });
}


