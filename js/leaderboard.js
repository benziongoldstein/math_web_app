// Leaderboard Logic
// Handles saving scores, retrieving top 10, and displaying leaderboard

// Save score to Firestore (only if it's a personal best)
async function saveScore(mode, numbersFactored, undos) {
    if (!isSignedIn()) {
        console.log('User not signed in, score not saved');
        return false;
    }
    
    const user = getCurrentUser();
    
    try {
        // 1. Check if this is a personal best
        const personalBest = await getPersonalBest(user.uid, mode);
        
        // 2. Compare scores (higher numbersFactored is better, then lower undos)
        const isBetter = !personalBest || 
                         numbersFactored > personalBest.numbersFactored ||
                         (numbersFactored === personalBest.numbersFactored && 
                          undos < personalBest.undos);
        
        if (!isBetter) {
            console.log('Not a personal best, not saving');
            return false;
        }
        
        // 3. Delete old personal best if exists
        if (personalBest) {
            await db.collection('scores').doc(personalBest.id).delete();
            console.log('Deleted old personal best');
        }
        
        // 4. Save new score
        await db.collection('scores').add({
            userId: user.uid,
            name: user.displayName || 'Anonymous',
            photoURL: user.photoURL || null,
            mode: mode,
            numbersFactored: numbersFactored,
            undos: undos,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        
        console.log('New personal best saved!');
        return true; // New personal best!
    } catch (error) {
        console.error('Error saving score:', error);
        return false;
    }
}

// Get user's personal best for a mode
async function getPersonalBest(userId, mode) {
    try {
        const snapshot = await db.collection('scores')
            .where('userId', '==', userId)
            .where('mode', '==', mode)
            .orderBy('numbersFactored', 'desc')
            .orderBy('undos', 'asc')
            .limit(1)
            .get();
        
        if (snapshot.empty) {
            return null;
        }
        
        const doc = snapshot.docs[0];
        return {
            id: doc.id,
            ...doc.data()
        };
    } catch (error) {
        console.error('Error getting personal best:', error);
        return null;
    }
}

// Get top 10 scores for a mode
async function getTopScores(mode, limit = 10) {
    try {
        const snapshot = await db.collection('scores')
            .where('mode', '==', mode)
            .orderBy('numbersFactored', 'desc')
            .orderBy('undos', 'asc')
            .limit(limit)
            .get();
        
        const scores = [];
        snapshot.forEach((doc) => {
            scores.push({
                id: doc.id,
                ...doc.data()
            });
        });
        
        return scores;
    } catch (error) {
        console.error('Error getting top scores:', error);
        return [];
    }
}

// Get user's rank for a mode
async function getUserRank(userId, mode) {
    try {
        // Get user's score
        const userScore = await getPersonalBest(userId, mode);
        if (!userScore) {
            return null;
        }
        
        // Count better scores
        const betterScores = await db.collection('scores')
            .where('mode', '==', mode)
            .where('numbersFactored', '>', userScore.numbersFactored)
            .get();
        
        // Count tied scores with fewer undos
        const tiedScores = await db.collection('scores')
            .where('mode', '==', mode)
            .where('numbersFactored', '==', userScore.numbersFactored)
            .where('undos', '<', userScore.undos)
            .get();
        
        return betterScores.size + tiedScores.size + 1;
    } catch (error) {
        console.error('Error getting user rank:', error);
        return null;
    }
}

// Display leaderboard
async function displayLeaderboard(mode) {
    const entriesContainer = document.getElementById('leaderboard-entries');
    const loadingMessage = document.getElementById('leaderboard-loading');
    const emptyMessage = document.getElementById('leaderboard-empty');
    const yourRankDisplay = document.getElementById('your-rank-display');
    const yourRankNumber = document.getElementById('your-rank-number');
    
    if (!entriesContainer) return;
    
    // Show loading
    loadingMessage.style.display = 'block';
    emptyMessage.style.display = 'none';
    yourRankDisplay.style.display = 'none';
    entriesContainer.innerHTML = '';
    
    try {
        // Get top 10 scores
        const scores = await getTopScores(mode, 10);
        
        // Hide loading
        loadingMessage.style.display = 'none';
        
        if (scores.length === 0) {
            emptyMessage.style.display = 'block';
            return;
        }
        
        // Display scores
        scores.forEach((score, index) => {
            const entry = createLeaderboardEntry(score, index + 1);
            entriesContainer.appendChild(entry);
        });
        
        // Show user's rank if signed in
        if (isSignedIn()) {
            const user = getCurrentUser();
            const rank = await getUserRank(user.uid, mode);
            
            if (rank) {
                yourRankDisplay.style.display = 'block';
                yourRankNumber.textContent = `#${rank}`;
            }
        }
    } catch (error) {
        console.error('Error displaying leaderboard:', error);
        loadingMessage.style.display = 'none';
        emptyMessage.style.display = 'block';
    }
}

// Create a leaderboard entry element
function createLeaderboardEntry(score, rank) {
    const entry = document.createElement('div');
    entry.className = 'leaderboard-entry';
    
    // Highlight current user's entry
    if (isSignedIn() && score.userId === getCurrentUser().uid) {
        entry.classList.add('current-user');
    }
    
    // Rank
    const rankEl = document.createElement('div');
    rankEl.className = 'entry-rank';
    if (rank <= 3) rankEl.classList.add('top3');
    
    // Special medals for top 3
    if (rank === 1) rankEl.textContent = '🥇';
    else if (rank === 2) rankEl.textContent = '🥈';
    else if (rank === 3) rankEl.textContent = '🥉';
    else rankEl.textContent = `#${rank}`;
    
    // Photo
    const photoEl = document.createElement('img');
    photoEl.className = 'entry-photo';
    photoEl.src = score.photoURL || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iIzY2N2VlYSIvPjxjaXJjbGUgY3g9IjIwIiBjeT0iMTUiIHI9IjciIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNIDggMzAgUSA4IDIyIDIwIDIyIFEgMzIgMjIgMzIgMzAiIGZpbGw9IiNmZmYiLz48L3N2Zz4=';
    photoEl.alt = score.name;
    
    // Info container
    const infoEl = document.createElement('div');
    infoEl.className = 'entry-info';
    
    // Name
    const nameEl = document.createElement('div');
    nameEl.className = 'entry-name';
    nameEl.textContent = score.name;
    
    // Stats
    const statsEl = document.createElement('div');
    statsEl.className = 'entry-stats';
    
    const scoreEl = document.createElement('span');
    scoreEl.className = 'entry-score';
    scoreEl.textContent = `${score.numbersFactored} numbers`;
    
    const undosEl = document.createElement('span');
    undosEl.className = 'entry-undos';
    undosEl.textContent = `${score.undos} undos`;
    
    statsEl.appendChild(scoreEl);
    statsEl.appendChild(undosEl);
    
    infoEl.appendChild(nameEl);
    infoEl.appendChild(statsEl);
    
    entry.appendChild(rankEl);
    entry.appendChild(photoEl);
    entry.appendChild(infoEl);
    
    return entry;
}

// Real-time leaderboard listener
let leaderboardListener = null;

function startLeaderboardListener(mode) {
    // Stop existing listener if any
    if (leaderboardListener) {
        leaderboardListener();
    }
    
    // Start new listener
    leaderboardListener = db.collection('scores')
        .where('mode', '==', mode)
        .orderBy('numbersFactored', 'desc')
        .orderBy('undos', 'asc')
        .limit(10)
        .onSnapshot((snapshot) => {
            console.log('Leaderboard updated in real-time');
            displayLeaderboard(mode);
        }, (error) => {
            console.error('Error in leaderboard listener:', error);
        });
}

function stopLeaderboardListener() {
    if (leaderboardListener) {
        leaderboardListener();
        leaderboardListener = null;
    }
}

