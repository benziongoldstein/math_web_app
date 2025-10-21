// Main Entry Point - Coordinates everything

/**
 * Initialize the application when page loads
 */
document.addEventListener('DOMContentLoaded', () => {
    initGame();
    setupEventListeners();
    updateUI();
    
    // Initialize Firebase Authentication
    initAuth();
});

/**
 * Set up all event listeners
 */
function setupEventListeners() {
    // Mode selector buttons
    document.getElementById('normal-mode-btn').addEventListener('click', () => {
        setGameMode('normal');
        // Toggle active class
        document.getElementById('normal-mode-btn').classList.add('mode-btn-active');
        document.getElementById('simple-mode-btn').classList.remove('mode-btn-active');
    });
    
    document.getElementById('simple-mode-btn').addEventListener('click', () => {
        setGameMode('simple');
        // Toggle active class
        document.getElementById('simple-mode-btn').classList.add('mode-btn-active');
        document.getElementById('normal-mode-btn').classList.remove('mode-btn-active');
    });
    
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
    
    // Authentication buttons
    const signInBtn = document.getElementById('sign-in-btn');
    if (signInBtn) {
        console.log('✅ Sign-in button found, adding listener');
        signInBtn.addEventListener('click', async () => {
            console.log('🔵 Sign-in button clicked!');
            await signInWithGoogle();
        });
    } else {
        console.error('❌ Sign-in button not found!');
    }
    
    document.getElementById('sign-out-btn').addEventListener('click', async () => {
        await signOut();
    });
    
    // Leaderboard buttons
    const leaderboardBtn = document.getElementById('leaderboard-btn');
    if (leaderboardBtn) {
        console.log('✅ Leaderboard button found, adding listener');
        leaderboardBtn.addEventListener('click', () => {
            console.log('🔵 Leaderboard button clicked!');
            showLeaderboard();
        });
    } else {
        console.error('❌ Leaderboard button not found!');
    }
    
    document.getElementById('close-leaderboard-btn').addEventListener('click', () => {
        closeLeaderboard();
    });
    
    // Leaderboard mode tabs
    document.getElementById('normal-leaderboard-tab').addEventListener('click', () => {
        switchLeaderboardMode('normal');
    });
    
    document.getElementById('simple-leaderboard-tab').addEventListener('click', () => {
        switchLeaderboardMode('simple');
    });
}

// Show leaderboard screen
function showLeaderboard() {
    const currentMode = gameState.gameMode || 'normal';
    showScreen('leaderboard-screen');
    displayLeaderboard(currentMode);
    startLeaderboardListener(currentMode);
    
    // Set active tab
    if (currentMode === 'normal') {
        document.getElementById('normal-leaderboard-tab').classList.add('tab-active');
        document.getElementById('simple-leaderboard-tab').classList.remove('tab-active');
    } else {
        document.getElementById('simple-leaderboard-tab').classList.add('tab-active');
        document.getElementById('normal-leaderboard-tab').classList.remove('tab-active');
    }
}

// Close leaderboard
function closeLeaderboard() {
    stopLeaderboardListener();
    returnToMainMenu();
}

// Switch leaderboard mode
function switchLeaderboardMode(mode) {
    // Update active tab
    if (mode === 'normal') {
        document.getElementById('normal-leaderboard-tab').classList.add('tab-active');
        document.getElementById('simple-leaderboard-tab').classList.remove('tab-active');
    } else {
        document.getElementById('simple-leaderboard-tab').classList.add('tab-active');
        document.getElementById('normal-leaderboard-tab').classList.remove('tab-active');
    }
    
    // Reload leaderboard with new mode
    stopLeaderboardListener();
    displayLeaderboard(mode);
    startLeaderboardListener(mode);
}


