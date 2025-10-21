# Development Specification & Status

## Project Information
**Project Name**: Math Practice Web App (Prime Factorization Game)  
**Version**: 1.3.0 (In Development)  
**Last Updated**: October 19, 2025  
**Development Status**: 🚧 **v1.3 IN PROGRESS** - Authentication & Leaderboard  

---

## Technology Stack

### Frontend
- **Language**: JavaScript (ES6+)
- **Markup**: HTML5
- **Styling**: CSS3
- **Framework**: Vanilla JavaScript
- **Audio**: Web Audio API

### Backend (v1.3 - NEW!)
- **Backend-as-a-Service**: Firebase (Google)
- **Authentication**: Firebase Authentication (Google OAuth)
- **Database**: Cloud Firestore (NoSQL)
- **Real-Time**: Firestore real-time listeners
- **Hosting**: Still GitHub Pages (static site + Firebase SDK)

### Development Tools
- **Code Editor**: Any modern IDE
- **Version Control**: Git + GitHub
- **Browser Testing**: Chrome, Firefox, Safari, Edge
- **Local Server**: Python HTTP Server (python3 -m http.server 8000)

### Deployment
- **Static Hosting**: GitHub Pages (https://benziongoldstein.github.io/math_web_app/)
- **Backend**: Firebase (managed by Google)
- **CI/CD**: GitHub Actions (automated testing on PRs)
- **Environment**: Static site + Firebase SDK (no custom backend server)

---

## Project Architecture

### File Structure
```
math_web_app/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   ├── main.js             # Entry point
│   ├── game.js             # Game logic
│   ├── ui.js               # UI updates and rendering
│   ├── audio.js            # Sound management
│   ├── utils.js            # Helper functions
│   ├── firebase-config.js  # Firebase configuration (v1.3)
│   └── auth.js             # Authentication logic (v1.3)
│   └── leaderboard.js      # Leaderboard logic (v1.3)
├── assets/
│   └── images/             # Any images/icons (default avatar, etc.)
├── specs/
│   ├── specefictions.md    # Product specification
│   ├── dev_spec_status.md  # This file
│   ├── learning_journal.md # Learning documentation
│   └── auto_test_spec.md   # Testing specification
├── .github/
│   └── workflows/
│       └── test.yml        # CI/CD workflow
├── tests/
│   └── test.html           # Test suite
├── README.md               # Project documentation
└── .gitignore              # Ignore Firebase config secrets
```

### Module Breakdown

#### 1. Main Entry (main.js)
- Initialize the application
- Set up event listeners
- Coordinate between modules
- Initialize Firebase (v1.3)

#### 2. Game Logic (game.js)
- Generate random composite numbers
- Track game state (timer, scores, selections)
- Handle prime selection logic
- Calculate products
- Validate matches
- Undo functionality

#### 3. UI Management (ui.js)
- Render game screens (main menu, gameplay, score screen, leaderboard)
- Update displays (timer, target, equation, scores)
- Handle animations and visual feedback
- Screen transitions
- Display user profile info (v1.3)

#### 4. Audio Management (audio.js)
- Generate sounds using Web Audio API
- Play sounds on events (click, success, undo)
- Handle audio settings/muting (optional)

#### 5. Utilities (utils.js)
- Random number generation
- Prime factorization validation
- Composite number filtering
- Helper functions

#### 6. Firebase Configuration (firebase-config.js) - v1.3
- Firebase project configuration
- Initialize Firebase services
- Export Firebase instances

#### 7. Authentication (auth.js) - v1.3
- Google Sign-In/Sign-Out
- Auth state management
- User profile retrieval
- Display user info in UI

#### 8. Leaderboard (leaderboard.js) - v1.3
- Save scores to Firestore
- Retrieve top 10 scores
- Calculate user rank
- Real-time leaderboard updates
- Handle personal best logic

---

## Feature Implementation Status

### Core Features

| Feature | Status | Priority | Notes |
|---------|--------|----------|-------|
| **Main Menu Screen** | ✅ Completed | High | HTML/CSS implemented - Oct 14 |
| **How to Play Screen** | ✅ Completed | High | Instructions screen added - Oct 14 |
| **Target Number Generation** | ✅ Completed | Critical | Composite number generator in utils.js - Oct 14 |
| **Prime Number Display** | ✅ Completed | Critical | 10 prime buttons in HTML - Oct 14 |
| **Prime Selection Logic** | ✅ Completed | Critical | Implemented in game.js - Oct 14 |
| **Equation Display** | ✅ Completed | Critical | Dynamic equation with clickable primes - Oct 14 |
| **Product Calculation** | ✅ Completed | Critical | calculateProduct() in utils.js - Oct 14 |
| **Match Detection** | ✅ Completed | Critical | onTargetMatched() in game.js - Oct 14 |
| **Success Feedback** | ✅ Completed | High | Green flash animation in CSS - Oct 14 |
| **Auto-Generate Next Target** | ✅ Completed | High | Instant generation after match - Oct 14 |
| **Undo Functionality** | ✅ Completed | High | undoPrime() removes last occurrence - Oct 14 |
| **Start Countdown** | ✅ Completed | High | 3-2-1-Go countdown implemented - Oct 14 |
| **60-Second Timer** | ✅ Completed | Critical | Timer counts down, game ends at 0 - Oct 14 |
| **Score Tracking** | ✅ Completed | Critical | Correct Factors & Undo Count tracked - Oct 14 |
| **Game End Screen** | ✅ Completed | High | Final scores displayed - Oct 14 |
| **Click Sound** | ✅ Completed | Medium | Beep sound in audio.js - Oct 14 |
| **Success Sound** | ✅ Completed | Medium | C-E-G melody in audio.js - Oct 14 |
| **Undo Sound** | ✅ Completed | Medium | Undo beep in audio.js - Oct 14 |

### UI/UX Features

| Feature | Status | Priority | Notes |
|---------|--------|----------|-------|
| **Responsive Layout** | ✅ Completed | High | Media queries for mobile/tablet - Oct 14 |
| **Visual Design** | ✅ Completed | High | Purple gradient, modern UI - Oct 14 |
| **Button Hover Effects** | ✅ Completed | Low | Lift-up effects on all buttons - Oct 14 |
| **Success Animation** | ✅ Completed | Medium | Green flash on correct answer - Oct 14 |
| **Timer Visual Alert** | ✅ Completed | Low | Blinking red when ≤10 seconds - Oct 14 |
| **Smooth Transitions** | ✅ Completed | Medium | Fade-in animations for screens - Oct 14 |

---

## Implementation Phases

### Phase 1: Setup & Structure (✅ Completed - Oct 14)
- [x] Create project folder structure
- [x] Set up HTML boilerplate
- [x] Create CSS file with basic styling
- [x] Set up JavaScript module files
- [x] Initialize Git repository
- [x] Create README

### Phase 2: Core Game Logic (✅ Completed - Oct 14)
- [x] Implement composite number generator
- [x] Create game state management
- [x] Implement prime selection logic
- [x] Build product calculation function
- [x] Create match detection logic
- [x] Implement undo logic (remove last occurrence)
- [x] Add timer countdown logic
- [x] Implement score tracking

### Phase 3: UI - Main Screens (✅ Completed - Oct 14)
- [x] Build main menu screen HTML/CSS
- [x] Build "How to Play" screen HTML/CSS
- [x] Build game screen layout HTML/CSS
- [x] Build game end screen HTML/CSS
- [x] Implement screen navigation/transitions
- [x] Add start countdown display ("3...2...1...Go!")

### Phase 4: UI - Game Elements (✅ Completed - Oct 14)
- [x] Create target number display
- [x] Create prime number buttons (10 primes)
- [x] Create equation display (clickable primes)
- [x] Create timer display
- [x] Create score display (Correct Factors, Undo Count)
- [x] Add visual feedback for selections

### Phase 5: Interactions & Animations (✅ Completed - Oct 14)
- [x] Wire up prime button click events
- [x] Wire up equation prime click events (undo)
- [x] Implement success animation/feedback
- [x] Add button hover/active states
- [x] Add smooth transitions
- [x] Implement auto-clear on success

### Phase 6: Audio Integration (✅ Completed - Oct 14)
- [x] Source/create sound files (using Web Audio API)
- [x] Implement audio loading
- [x] Wire up click sound
- [x] Wire up success sound
- [x] Wire up undo sound
- [ ] Test audio across browsers (In Progress)

### Phase 7: Testing & Polish (✅ Completed - Oct 14)
- [x] Test all game flows
- [x] Test edge cases (rapid clicking, timer edge cases)
- [x] Test undo with multiple same primes
- [x] Browser compatibility testing (Chrome tested)
- [x] Performance optimization (runs smoothly)
- [x] Fix any bugs identified during testing
- [x] Polish visual design (looks good)
- [x] Ensure all sounds work properly

### Phase 8: Documentation & Deployment Prep (✅ Completed - Oct 14)
- [x] Write comprehensive README
- [x] Document code with comments (inline comments in code)
- [x] Create setup/installation instructions (in README)
- [x] Deployment to GitHub Pages (completed)

### Phase 9 (v1.1): Prime Recognition Feature (✅ Completed - Oct 14)
- [x] Update utils.js - Add function to generate primes (31-97)
- [x] Update utils.js - Modify target generation for 20% prime chance
- [x] Update game.js - Add isPrimeTarget flag to gameState
- [x] Update game.js - Add handlePrimeClick() function
- [x] Update index.html - Add "Prime" button to UI
- [x] Update CSS - Style the "Prime" button
- [x] Update main.js - Wire up Prime button event listener
- [x] Test prime generation (should be ~20% of targets)
- [x] Test correct prime identification
- [x] Test incorrect prime click on composite
- [ ] Update README with new feature (Optional - can be done later)
- [x] Deploy v1.1 to GitHub Pages ✅ LIVE!

### Phase 10 (v1.2): Simple Mode for Beginners (✅ Completed - Oct 16)
- [x] Update index.html - Add mode selector buttons to main menu
- [x] Update CSS - Style mode selector (Normal/Simple buttons)
- [x] Update CSS - Style side-by-side target/intermediate display for Simple Mode
- [x] Update index.html - Add intermediate display element
- [x] Update game.js - Add gameMode to gameState
- [x] Update game.js - Add currentIntermediate to gameState
- [x] Update game.js - Update logic to check if prime divides evenly
- [x] Update game.js - Fix currentProduct calculation in Simple Mode (Bug #6)
- [x] Update ui.js - Show side-by-side target and intermediate in Simple Mode
- [x] Update ui.js - Keep equation display in Simple Mode (for undo)
- [x] Update main.js - Wire up mode selector buttons
- [x] Test Simple Mode with composite numbers ✅
- [x] Test Simple Mode with wrong prime selections ✅
- [x] Test Simple Mode with prime targets ✅
- [x] Test Normal Mode still works correctly ✅
- [x] Deploy v1.2 to GitHub Pages ✅ LIVE!

### Phase 11 (v1.3): User Authentication & Leaderboard (🚧 In Progress - Oct 19)

#### Step 1: Firebase Setup
- [x] Create Firebase project in Firebase Console
- [x] Enable Google Authentication in Firebase
- [x] Enable Cloud Firestore database
- [x] Get Firebase configuration (API keys, project ID)
- [ ] Set up Firestore security rules
- [x] Create Firestore database indexes for queries ✅

#### Step 2: Project Integration
- [x] Create js/firebase-config.js with Firebase configuration
- [x] Add Firebase SDK scripts to index.html
- [x] Initialize Firebase in main.js
- [x] Test Firebase connection

#### Step 3: Authentication UI
- [x] Update index.html - Add "Sign in with Google" button to main menu
- [x] Update index.html - Add user profile display area (corner)
- [x] Update CSS - Style sign-in button
- [x] Update CSS - Style user profile display (photo + name)

#### Step 4: Authentication Logic
- [x] Create js/auth.js module
- [x] Implement signInWithGoogle() function
- [x] Implement signOut() function
- [x] Implement onAuthStateChanged() listener
- [x] Update UI to show/hide sign-in button based on auth state
- [x] Update UI to display user profile when signed in
- [x] Test sign-in flow
- [x] Test sign-out flow

#### Step 5: Leaderboard UI
- [x] Update index.html - Add "Leaderboard" button to main menu
- [x] Update index.html - Create leaderboard screen HTML
- [x] Update index.html - Add mode tabs (Normal/Simple) to leaderboard
- [x] Update index.html - Add leaderboard entry template (rank, photo, name, score, undos)
- [x] Update CSS - Style leaderboard screen
- [x] Update CSS - Style leaderboard entries
- [x] Update CSS - Style mode tabs
- [x] Update CSS - Style "Your Rank" display
- [ ] Update CSS - Style top 3 preview in results screen

#### Step 6: Leaderboard Logic
- [x] Create js/leaderboard.js module
- [x] Implement saveScore(userId, name, photo, mode, score, undos) function
- [x] Implement checkPersonalBest() function (only save if better)
- [x] Implement getTopScores(mode, limit) function
- [x] Implement getUserRank(userId, mode) function
- [x] Implement real-time listener for leaderboard updates
- [ ] Test score saving (blocked by missing database indexes)
- [ ] Test personal best logic (blocked by missing database indexes)
- [ ] Test leaderboard retrieval (blocked by missing database indexes)
- [ ] Test ranking calculation (blocked by missing database indexes)

#### Step 7: Integration with Game Flow
- [x] Update game.js - Add currentUser to gameState
- [x] Update game.js - Call saveScore() at game end (if signed in and personal best)
- [ ] Update ui.js - Show top 3 preview on results screen
- [ ] Update ui.js - Show user rank on results screen (if signed in)
- [ ] Update ui.js - Show "Sign in to save score" message (if not signed in)
- [x] Update ui.js - Populate full leaderboard screen (created displayLeaderboard function)
- [ ] Update ui.js - Highlight user's entry in leaderboard (if in top 10)
- [x] Update main.js - Wire up "Leaderboard" button
- [ ] Update main.js - Wire up "Sign in Now" button on results screen
- [x] Update main.js - Wire up mode tabs in leaderboard

#### Step 8: Default Avatar & Polish
- [ ] Create/add default avatar image to assets/images/
- [ ] Implement fallback to default avatar if no photoURL
- [ ] Add loading states for leaderboard
- [ ] Add error handling for Firebase operations
- [ ] Add "No scores yet" message for empty leaderboards
- [ ] Test with multiple users
- [ ] Test tie-breaking logic

#### Step 9: Firestore Security Rules
- [ ] Write security rules to prevent cheating
- [ ] Rule: Users can only write their own scores
- [ ] Rule: Everyone can read leaderboard
- [ ] Rule: Validate score data structure
- [ ] Deploy security rules to Firebase
- [ ] Test security rules

#### Step 10: Testing & Deployment
- [ ] Test full flow: Guest play → Sign in → Play → Save score → View leaderboard
- [ ] Test guest can view leaderboard but not save
- [ ] Test real-time updates (open in 2 tabs, post score in one)
- [ ] Test both Normal and Simple mode leaderboards
- [ ] Test ranking with ties
- [ ] Test personal best logic (only saves if better)
- [ ] Update README with Firebase setup instructions
- [ ] Update learning_journal.md with Firebase lessons learned
- [ ] Deploy v1.3 to GitHub Pages
- [ ] Test live deployment

---

## Technical Implementation Details

### 1. Target Number Generation (Updated v1.1)
**Algorithm**:
- 20% chance: Generate a large prime number (31-97) for prime recognition
- 80% chance: Generate a composite number (5-100) for factorization
- Return `{value: number, isPrime: boolean}`

**Available Primes for Factorization**: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29

**Large Primes for Recognition (v1.1)**: 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
- Players must identify these as prime using the "It's Prime!" button
- Cannot be factorized using available primes

### 2. Game State Management (Updated v1.1)
**State Object**:
```javascript
{
  screen: 'main' | 'playing' | 'gameOver',
  targetNumber: number,
  isPrimeTarget: boolean,        // v1.1: Is current target a prime?
  selectedPrimes: array,
  currentProduct: number,
  timer: number (seconds remaining),
  scores: {
    correctFactors: number,      // Counts both factorizations AND prime identifications
    undoCount: number
  },
  gameStarted: boolean,
  countdownActive: boolean
}
```

### 3. Prime Selection Logic
- Store selected primes in array: `[2, 3, 2, 5]`
- Calculate product: `reduce((acc, val) => acc * val, 1)`
- Display as equation: `array.join(' × ') + ' = ' + product`
- Each prime in equation is clickable for undo

### 4. Undo Logic
- Click a prime in the equation (e.g., "2" in "2 × 3 × 2 × 5")
- Find last index of that prime in selectedPrimes array
- Remove that element
- Recalculate product
- Update display
- Increment undo count
- Play undo sound

### 5. Timer Implementation
- Use `setInterval` to decrement timer every 1000ms
- Update display each second
- On reaching 0, clear interval, end game
- Show score screen

### 6. Success Detection
- On each prime selection, check if `currentProduct === targetNumber`
- If match:
  - Trigger success animation
  - Play success sound
  - Increment correct factors score
  - Clear selected primes
  - Generate new target
  - Reset equation display
  - Continue game (no pause)

### 7. Prime Recognition Logic (v1.1)
- **"It's Prime!" button** displayed below prime factor buttons
- When clicked:
  - Check if `isPrimeTarget === true`
  - If true: Treat as success (same as factorization success)
  - If false: Do nothing (no penalty for wrong guess)
- Players must recognize when target cannot be factorized
- Timer continues running - no hints provided

### 8. Simple Mode Logic (v1.2 - Completed)
- **Display**: Shows target and intermediate side by side (both large, prominent)
  - Initial state: `Target: 18    Intermediate: 18`
  - After operations: `Target: 18    Intermediate: 9` (after dividing by 2)
- **Equation Display**: Shows regular multiplication equation below (same as Normal Mode)
  - Example: `2 × 3 = 6` (shows PRODUCT, not intermediate)
  - Used for undo functionality (click primes in equation)
- **Prime Selection**:
  - Check if `currentIntermediate % prime === 0` (divides evenly)
  - If yes: Update `currentIntermediate = currentIntermediate / prime`
  - If yes: ALSO update `currentProduct = calculateProduct(selectedPrimes)` for equation display
  - If no: Do nothing (silent rejection)
- **Success Detection**: When `currentIntermediate === 1`
- **Undo**: 
  - Multiply `currentIntermediate` by the removed prime
  - Recalculate `currentProduct` for equation display
- **UI Changes**: 
  - Show two large numbers side by side at top (target + intermediate)
  - Show equation display below (same as Normal Mode, for undo)
  - Update target display area to show both target and intermediate values

### 9. Firebase Authentication (v1.3 - In Progress)
- **Firebase SDK**: Load from CDN in index.html
  ```html
  <script src="https://www.gstatic.com/firebasejs/10.x.x/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.x.x/firebase-auth-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.x.x/firebase-firestore-compat.js"></script>
  ```
- **Configuration**: Store Firebase config in firebase-config.js
  ```javascript
  const firebaseConfig = {
    apiKey: "...",
    authDomain: "...",
    projectId: "...",
    // ... other config
  };
  firebase.initializeApp(firebaseConfig);
  ```
- **Google Sign-In**:
  ```javascript
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      // user.displayName, user.photoURL, user.uid
    });
  ```
- **Auth State Listener**:
  ```javascript
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in
      updateUIForSignedInUser(user);
    } else {
      // User is signed out
      updateUIForSignedOutUser();
    }
  });
  ```

### 10. Firestore Database Structure (v1.3 - In Progress)

#### **Collections:**

**`scores` collection:**
```javascript
{
  scoreId: "auto_generated",        // Document ID
  userId: "google_user_id",         // Firebase Auth UID
  name: "Ben Goldstein",            // Display name
  photoURL: "https://..." | null,   // Profile photo (optional)
  mode: "normal" | "simple",        // Game mode
  numbersFactored: 15,              // Score (primary sort)
  undos: 3,                         // Undos (secondary sort)
  timestamp: firebase.Timestamp     // When score was achieved
}
```

**`users` collection (optional - for future enhancements):**
```javascript
{
  userId: "google_user_id",         // Document ID = UID
  name: "Ben Goldstein",
  photoURL: "https://...",
  totalGames: 25,
  lastPlayed: firebase.Timestamp
}
```

#### **Queries:**

**Get Top 10 for a mode:**
```javascript
firebase.firestore()
  .collection('scores')
  .where('mode', '==', 'normal')
  .orderBy('numbersFactored', 'desc')
  .orderBy('undos', 'asc')
  .limit(10)
  .get();
```

**Get User's Personal Best:**
```javascript
firebase.firestore()
  .collection('scores')
  .where('userId', '==', currentUser.uid)
  .where('mode', '==', 'normal')
  .orderBy('numbersFactored', 'desc')
  .orderBy('undos', 'asc')
  .limit(1)
  .get();
```

**Calculate User Rank:**
```javascript
// Count how many scores are better than user's score
firebase.firestore()
  .collection('scores')
  .where('mode', '==', 'normal')
  .where('numbersFactored', '>', userScore)
  .get()
  .then(snapshot => {
    const rank = snapshot.size + 1;
  });
```

**Real-Time Listener:**
```javascript
firebase.firestore()
  .collection('scores')
  .where('mode', '==', 'normal')
  .orderBy('numbersFactored', 'desc')
  .orderBy('undos', 'asc')
  .limit(10)
  .onSnapshot((snapshot) => {
    // Updates automatically when scores change!
    updateLeaderboardUI(snapshot.docs);
  });
```

#### **Security Rules:**
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Scores collection
    match /scores/{scoreId} {
      // Anyone can read scores
      allow read: if true;
      
      // Only authenticated users can create their own scores
      allow create: if request.auth != null 
                    && request.resource.data.userId == request.auth.uid
                    && request.resource.data.numbersFactored is int
                    && request.resource.data.numbersFactored >= 0
                    && request.resource.data.numbersFactored <= 100
                    && request.resource.data.undos is int
                    && request.resource.data.undos >= 0
                    && request.resource.data.mode in ['normal', 'simple'];
      
      // Users can only update their own scores
      allow update: if request.auth != null 
                    && resource.data.userId == request.auth.uid;
      
      // Users can only delete their own scores
      allow delete: if request.auth != null 
                    && resource.data.userId == request.auth.uid;
    }
  }
}
```

#### **Database Indexes:**

Firestore requires indexes when you query with multiple `orderBy()` fields or combine `where()` with `orderBy()`.

**Why we need indexes:**
- Our leaderboard queries sort by TWO fields: `numbersFactored` (descending) AND `undos` (ascending)
- Without an index, Firestore will throw: **"The query requires an index"**
- Indexes make queries fast and efficient

**Indexes to create in Firebase Console:**

1. **Collection**: `scores`
   - **Fields indexed**:
     - `mode` - Ascending
     - `numbersFactored` - Descending
     - `undos` - Ascending
   - **Query scope**: Collection
   - **Used for**: Getting top 10 scores for each mode

**How to create:**
1. Go to Firebase Console → Firestore Database → Indexes tab
2. Click "Create Index"
3. Enter collection name and fields as specified above
4. Click "Create" and wait ~2 minutes for index to build

**Alternative**: Click the blue error link in browser console when query fails - Firebase will auto-generate the index creation link!

### 11. Leaderboard Logic (v1.3 - In Progress)

**Save Score Flow:**
```javascript
async function saveScore(user, mode, numbersFactored, undos) {
  // 1. Check if this is a personal best
  const personalBest = await getPersonalBest(user.uid, mode);
  
  // 2. Compare scores (higher numbersFactored is better, then lower undos)
  const isBetter = !personalBest || 
                   numbersFactored > personalBest.numbersFactored ||
                   (numbersFactored === personalBest.numbersFactored && 
                    undos < personalBest.undos);
  
  // 3. Only save if it's a new personal best
  if (isBetter) {
    // Delete old personal best if exists
    if (personalBest) {
      await firebase.firestore()
        .collection('scores')
        .doc(personalBest.id)
        .delete();
    }
    
    // Save new score
    await firebase.firestore()
      .collection('scores')
      .add({
        userId: user.uid,
        name: user.displayName,
        photoURL: user.photoURL || null,
        mode: mode,
        numbersFactored: numbersFactored,
        undos: undos,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
    
    return true; // New personal best!
  }
  
  return false; // Not a personal best
}
```

**Calculate Rank:**
```javascript
async function getUserRank(userId, mode) {
  // Get user's score
  const userScore = await getPersonalBest(userId, mode);
  if (!userScore) return null;
  
  // Count better scores
  const betterScores = await firebase.firestore()
    .collection('scores')
    .where('mode', '==', mode)
    .where('numbersFactored', '>', userScore.numbersFactored)
    .get();
  
  // Count tied scores with fewer undos
  const tiedScores = await firebase.firestore()
    .collection('scores')
    .where('mode', '==', mode)
    .where('numbersFactored', '==', userScore.numbersFactored)
    .where('undos', '<', userScore.undos)
    .get();
  
  return betterScores.size + tiedScores.size + 1;
}
```

---

## Known Constraints & Considerations

### Constraints (Updated v1.1)
1. Target numbers: 80% composite (5-100, factorable by primes ≤ 29), 20% large primes (31-97)
2. 1-minute total game time (not per number)
3. No backend/database (all client-side)
4. Must work in modern browsers

### Considerations
1. **Performance**: Ensure smooth experience even with rapid clicking
2. **Audio**: Some browsers require user interaction before playing audio
3. **Random Generation**: May need efficient algorithm to avoid regenerating many times
4. **Accessibility**: Consider keyboard navigation (future enhancement)
5. **Mobile**: Touch events may need special handling (optional for v1)

---

## Testing Checklist

### Functional Testing
- [x] Target numbers: ~80% composite (factorable), ~20% large primes ✅
- [x] Prime selection increments product correctly ✅
- [x] Multiple selections of same prime work ✅
- [x] Undo removes last occurrence correctly ✅
- [x] Success triggers on exact match ✅
- [x] New target generates instantly after success ✅
- [x] Countdown works before game starts ✅
- [x] Timer counts down correctly ✅
- [x] Game ends when timer reaches 0 ✅
- [x] Scores track accurately ✅
- [x] All sounds play at correct times ✅
- [x] Prime recognition button works (v1.1) ✅
- [x] Correct prime click triggers success (v1.1) ✅
- [x] Wrong prime click does nothing (v1.1) ✅

### UI Testing
- [x] All buttons are clickable and responsive ✅
- [x] Equation display updates in real-time ✅
- [x] Visual feedback is clear and immediate ✅
- [x] Screen transitions work smoothly ✅
- [x] How to Play instructions are clear ✅
- [x] Score screen displays correctly ✅
- [x] Return to main menu works ✅

### Browser Testing
- [x] Chrome ✅ (Tested Oct 14, 2025)
- [ ] Firefox (Not tested)
- [ ] Safari (Not tested)
- [ ] Edge (Not tested)

### Edge Case Testing
- [x] Rapid clicking doesn't break game ✅
- [x] Clicking during countdown doesn't cause issues ✅
- [x] Multiple undos in succession work correctly ✅
- [x] Timer reaching 0 during interaction ✅
- [x] Audio plays correctly after page load ✅

---

## Current Blockers / Issues Found During Testing

### Issues Identified - Oct 14, 2025

1. **"How to Play" button not working** - Button click doesn't show instructions screen ✅ FIXED
2. **Undo doesn't trigger success** - If player reaches target number by undoing, success event doesn't fire ✅ FIXED
3. **Game over screen not showing scores** - Score board missing or not visible at game end ✅ FIXED (was working, user tested successfully)
4. **GO sound caused countdown to freeze** - Attempted to add "GO!" sound when game starts, but caused countdown to stick on 1. Feature removed, countdown bug fixed. ✅ FIXED
5. **Success screen doesn't pause naturally** - New target appeared immediately after success, felt jarring. Added 600ms delay for better UX. ✅ FIXED

### Issues Identified - Oct 16, 2025 (v1.2 Development)

6. **Simple Mode equation shows wrong result** - Equation display in Simple Mode always showed 1 (or wrong value) instead of correct product. Root cause: `currentProduct` wasn't being updated in Simple Mode's `selectPrime()` and `undoPrime()` functions. Fixed by calculating `currentProduct` in both modes. ✅ FIXED

---

## Next Steps
1. ✅ ~~Decide on technology stack~~ - Using Vanilla JS + Firebase
2. ✅ ~~Set up project structure~~ - Completed
3. ✅ ~~Implement all phases 1-10~~ - Completed (v1.0, v1.1, v1.2)
4. **🚧 IN PROGRESS: Phase 11 (v1.3) - Authentication & Leaderboard**
   - Create Firebase project
   - Implement Google Sign-In
   - Build leaderboard system
   - Add real-time updates
5. **Future**: Additional enhancements (stats, achievements, challenges, etc.)

---

## Questions to Resolve
- [x] ~~Exact visual design/color scheme?~~ - Purple gradient, modern UI
- [x] ~~Sound file format?~~ - Using Web Audio API (no files needed)
- [x] ~~Animation library or pure CSS?~~ - Pure CSS animations
- [x] ~~Preferred framework/vanilla JS decision?~~ - Vanilla JS chosen

---

## Version History
- **v1.0.0** (Oct 11, 2025): Initial specification created
- **v1.0.0-beta** (Oct 14, 2025): Initial implementation complete, entering testing phase
  - All core features implemented (HTML, CSS, JavaScript)
  - 5 JavaScript modules created (main, game, ui, audio, utils)
  - Phases 1-6 completed
  - Currently in Phase 7 (Testing & Bug Fixes)
- **v1.0.0-beta.1** (Oct 14, 2025): Bug fixes after initial testing
  - Fixed: "How to Play" button (function name mismatch)
  - Fixed: Undo now checks for target match
  - Fixed: Countdown now shows all numbers including "Go!"
  - Removed: GO sound feature (caused countdown freeze)
- **v1.0.0-rc** (Oct 14, 2025): All testing completed successfully
  - ✅ All functional tests passed
  - ✅ All UI tests passed
  - ✅ All edge case tests passed
  - ✅ Chrome browser tested and working
  - Phase 7 complete - Game is fully functional
  - Ready for Phase 8 (Documentation)
- **v1.0.0** (Oct 14, 2025): 🎉 PROJECT COMPLETE!
  - Fixed: Success animation pause (600ms delay for better UX)
  - Created: Comprehensive README.md with full documentation
  - Phase 8 complete - All documentation finished
  - All 8 phases successfully completed
  - Game is production-ready
  - 5 bugs fixed total
  - 100% test pass rate
  - Total files: 13 (HTML, CSS, 5 JS modules, 3 spec files, README, learning journal)
- **v1.1.0** (Oct 14, 2025): 🎯 PRIME RECOGNITION FEATURE ADDED!
  - Added: Large prime numbers (31-97) as targets (20% chance)
  - Added: "It's Prime!" button for prime recognition
  - Updated: Target generation algorithm (80% composite, 20% prime)
  - Updated: Game state to track isPrimeTarget flag
  - Updated: Success detection to handle both factorization and prime recognition
  - Styled: Orange/red gradient button to stand out
  - Tested: All new functionality working correctly
  - Phase 9 complete - Feature successfully deployed
  - Educational value increased: Players now learn prime recognition alongside factorization
- **v1.2.0** (Oct 16, 2025): 🎓 SIMPLE MODE FOR BEGINNERS ADDED!
  - Added: Simple Mode alongside Normal Mode with mode selector on main menu
  - Added: Side-by-side display of Target and Intermediate values in Simple Mode
  - Added: Division-based gameplay where intermediate updates as factors are selected
  - Fixed: Bug #6 - Equation display now correctly shows product in Simple Mode
  - Updated: UI to show both target/intermediate AND equation in Simple Mode
  - Updated: Game logic to validate prime divisibility (silent rejection if not divisible)
  - Styled: Responsive layout for target/intermediate display with flexbox
  - Tested: All Simple Mode functionality working correctly
  - Phase 10 complete - Feature successfully implemented
  - Educational value increased: Beginners can see division progress alongside multiplication
  - Total files: 15 (HTML, CSS, 5 JS modules, 4 spec files, README, learning journal, workflows)
- **v1.3.0** (Oct 19, 2025 - IN PROGRESS): 🔐 AUTHENTICATION & LEADERBOARD!
  - Phase 11 started - User authentication and competitive leaderboard
  - Backend: Firebase (Authentication + Cloud Firestore)
  - Feature: Google Sign-In with one click
  - Feature: Two separate leaderboards (Normal Mode & Simple Mode)
  - Feature: Real-time leaderboard updates
  - Feature: Save personal best scores only
  - Feature: Rank by most numbers factored, then least undos
  - Feature: Profile photos with default avatar fallback
  - Optional: Can play as guest without signing in
  - Security: Firestore rules prevent cheating
  - Specs: Updated specefictions.md and dev_spec_status.md with complete feature details
  - Learning: Added detailed Firebase explanations to learning_journal.md
  - Total new files: 3 (firebase-config.js, auth.js, leaderboard.js)


