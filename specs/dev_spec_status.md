# Development Specification & Status

## Project Information
**Project Name**: Math Practice Web App (Prime Factorization Game)  
**Version**: 1.0.0  
**Last Updated**: October 11, 2025  
**Development Status**: Not Started  

---

## Technology Stack

### Frontend
- **Language**: JavaScript (ES6+)
- **Markup**: HTML5
- **Styling**: CSS3
- **Framework**: TBD (Options: Vanilla JS, React, Vue, Svelte)
- **Audio**: Web Audio API or HTML5 Audio elements

### Development Tools
- **Code Editor**: Any modern IDE
- **Version Control**: Git
- **Browser Testing**: Chrome, Firefox, Safari, Edge
- **Local Server**: Live Server or similar (for testing)

### Deployment (Future)
- **Hosting**: TBD (Options: GitHub Pages, Netlify, Vercel)
- **Environment**: Static site (no backend required for v1)

---

## Project Architecture

### File Structure (Proposed)
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
│   └── utils.js            # Helper functions
├── assets/
│   ├── sounds/             # Audio files
│   │   ├── click.mp3
│   │   ├── success.mp3
│   │   └── undo.mp3
│   └── images/             # Any images/icons (optional)
├── specs/
│   ├── specefictions.md    # Product specification
│   └── dev_spec_status.md  # This file
└── README.md               # Project documentation
```

### Module Breakdown

#### 1. Main Entry (main.js)
- Initialize the application
- Set up event listeners
- Coordinate between modules

#### 2. Game Logic (game.js)
- Generate random composite numbers
- Track game state (timer, scores, selections)
- Handle prime selection logic
- Calculate products
- Validate matches
- Undo functionality

#### 3. UI Management (ui.js)
- Render game screens (main menu, gameplay, score screen)
- Update displays (timer, target, equation, scores)
- Handle animations and visual feedback
- Screen transitions

#### 4. Audio Management (audio.js)
- Load sound files
- Play sounds on events (click, success, undo)
- Handle audio settings/muting (optional)

#### 5. Utilities (utils.js)
- Random number generation
- Prime factorization validation
- Composite number filtering
- Helper functions

---

## Feature Implementation Status

### Core Features

| Feature | Status | Priority | Notes |
|---------|--------|----------|-------|
| **Main Menu Screen** | Not Started | High | Includes title, Start button, How to Play button |
| **How to Play Screen** | Not Started | High | Instructions modal/screen |
| **Target Number Generation** | Not Started | Critical | Must generate only composite numbers (5-100) |
| **Prime Number Display** | Not Started | Critical | 10 clickable prime buttons (2,3,5,7,11,13,17,19,23,29) |
| **Prime Selection Logic** | Not Started | Critical | Allow multiple selections of same prime |
| **Equation Display** | Not Started | Critical | Show "2 × 3 × 5 = 30" format with clickable primes |
| **Product Calculation** | Not Started | Critical | Real-time multiplication of selected primes |
| **Match Detection** | Not Started | Critical | Check if product equals target |
| **Success Feedback** | Not Started | High | Visual animation + sound on match |
| **Auto-Generate Next Target** | Not Started | High | Instant new target after success |
| **Undo Functionality** | Not Started | High | Remove last occurrence of clicked prime |
| **Start Countdown** | Not Started | High | "3...2...1...Go!" before game starts |
| **60-Second Timer** | Not Started | Critical | Countdown from 60 to 0 |
| **Score Tracking** | Not Started | Critical | Track Correct Factors and Undo Count |
| **Game End Screen** | Not Started | High | Display final scores with return button |
| **Click Sound** | Not Started | Medium | Play on prime selection |
| **Success Sound** | Not Started | Medium | Play on successful match |
| **Undo Sound** | Not Started | Medium | Play on undo action |

### UI/UX Features

| Feature | Status | Priority | Notes |
|---------|--------|----------|-------|
| **Responsive Layout** | Not Started | High | Desktop + tablet support |
| **Visual Design** | Not Started | High | Simple, fun, modern aesthetic |
| **Button Hover Effects** | Not Started | Low | Improve interactivity feel |
| **Success Animation** | Not Started | Medium | Celebrate correct factorization |
| **Timer Visual Alert** | Not Started | Low | Optional: warning when time running low |
| **Smooth Transitions** | Not Started | Medium | Between screens/states |

---

## Implementation Phases

### Phase 1: Setup & Structure (Not Started)
- [ ] Create project folder structure
- [ ] Set up HTML boilerplate
- [ ] Create CSS file with basic styling
- [ ] Set up JavaScript module files
- [ ] Initialize Git repository
- [ ] Create README

### Phase 2: Core Game Logic (Not Started)
- [ ] Implement composite number generator
- [ ] Create game state management
- [ ] Implement prime selection logic
- [ ] Build product calculation function
- [ ] Create match detection logic
- [ ] Implement undo logic (remove last occurrence)
- [ ] Add timer countdown logic
- [ ] Implement score tracking

### Phase 3: UI - Main Screens (Not Started)
- [ ] Build main menu screen HTML/CSS
- [ ] Build "How to Play" screen HTML/CSS
- [ ] Build game screen layout HTML/CSS
- [ ] Build game end screen HTML/CSS
- [ ] Implement screen navigation/transitions
- [ ] Add start countdown display ("3...2...1...Go!")

### Phase 4: UI - Game Elements (Not Started)
- [ ] Create target number display
- [ ] Create prime number buttons (10 primes)
- [ ] Create equation display (clickable primes)
- [ ] Create timer display
- [ ] Create score display (Correct Factors, Undo Count)
- [ ] Add visual feedback for selections

### Phase 5: Interactions & Animations (Not Started)
- [ ] Wire up prime button click events
- [ ] Wire up equation prime click events (undo)
- [ ] Implement success animation/feedback
- [ ] Add button hover/active states
- [ ] Add smooth transitions
- [ ] Implement auto-clear on success

### Phase 6: Audio Integration (Not Started)
- [ ] Source/create sound files (click, success, undo)
- [ ] Implement audio loading
- [ ] Wire up click sound
- [ ] Wire up success sound
- [ ] Wire up undo sound
- [ ] Test audio across browsers

### Phase 7: Testing & Polish (Not Started)
- [ ] Test all game flows
- [ ] Test edge cases (rapid clicking, timer edge cases)
- [ ] Test undo with multiple same primes
- [ ] Browser compatibility testing
- [ ] Performance optimization
- [ ] Fix any bugs
- [ ] Polish visual design
- [ ] Ensure all sounds work properly

### Phase 8: Documentation & Deployment Prep (Not Started)
- [ ] Write comprehensive README
- [ ] Document code with comments
- [ ] Create setup/installation instructions
- [ ] Prepare for deployment (optional)

---

## Technical Implementation Details

### 1. Composite Number Generation
**Algorithm**:
- Generate random number between 5-100
- Check if number is composite (can be factorized by available primes)
- If prime or invalid, regenerate
- Return valid composite number

**Available Primes for Factorization**: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29

**Invalid Targets (Primes to Exclude)**: 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97

### 2. Game State Management
**State Object**:
```javascript
{
  screen: 'main' | 'playing' | 'gameOver',
  targetNumber: number,
  selectedPrimes: array,
  currentProduct: number,
  timer: number (seconds remaining),
  scores: {
    correctFactors: number,
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

---

## Known Constraints & Considerations

### Constraints
1. Only composite numbers between 5-100 that can be factorized by primes ≤ 29
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
- [ ] Target numbers are always composite and factorable
- [ ] Prime selection increments product correctly
- [ ] Multiple selections of same prime work
- [ ] Undo removes last occurrence correctly
- [ ] Success triggers on exact match
- [ ] New target generates instantly after success
- [ ] Countdown works before game starts
- [ ] Timer counts down correctly
- [ ] Game ends when timer reaches 0
- [ ] Scores track accurately
- [ ] All sounds play at correct times

### UI Testing
- [ ] All buttons are clickable and responsive
- [ ] Equation display updates in real-time
- [ ] Visual feedback is clear and immediate
- [ ] Screen transitions work smoothly
- [ ] How to Play instructions are clear
- [ ] Score screen displays correctly
- [ ] Return to main menu works

### Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Edge Case Testing
- [ ] Rapid clicking doesn't break game
- [ ] Clicking during countdown doesn't cause issues
- [ ] Multiple undos in succession work correctly
- [ ] Timer reaching 0 during interaction
- [ ] Audio plays correctly after page load

---

## Current Blockers
None - project not yet started

---

## Next Steps
1. Decide on technology stack (vanilla JS vs framework)
2. Set up project structure
3. Begin Phase 1: Setup & Structure
4. Implement core game logic (Phase 2)

---

## Questions to Resolve
- [ ] Exact visual design/color scheme?
- [ ] Sound file format (MP3, WAV, OGG)?
- [ ] Animation library or pure CSS?
- [ ] Preferred framework/vanilla JS decision?

---

## Version History
- **v1.0.0** (Oct 11, 2025): Initial specification created

