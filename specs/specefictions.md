# Math Practice Web App - Product Specification

## Overview
A web-based arcade-style math game where players practice prime factorization by selecting prime numbers to match randomly generated target numbers within a 1-minute time limit.

## Game Objective
Players have **1 minute total** to correctly factorize as many random numbers as possible by clicking prime numbers that multiply together to reach the target.

---

## Core Gameplay

### Target Number Generation
- On game start (and after each successful factorization), a random target number is generated
- Range: **5 to 100** (inclusive)
- **Important**: Only generate **composite numbers** that can be factorized using the available primes
- **Avoid** generating prime numbers that cannot be factorized (e.g., 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97)
- Target is displayed prominently at the top of the screen

### Prime Number Selection Interface
- **10 prime numbers** displayed at the bottom of the page: `2, 3, 5, 7, 11, 13, 17, 19, 23, 29`
- Primes are clickable buttons/elements
- Each prime can be clicked **multiple times** (e.g., click "2" three times to get 2×2×2 = 8)
- Visual feedback shows which primes have been selected and in what order

### Multiplication Display
- Show the **current product** as primes are selected
- Display as a **clickable equation** format: `2 × 3 × 5 = 30`
- Each selected prime in the equation is clickable for undo functionality
- Updates in real-time as primes are selected or undone

### Success Condition
- When the current product **exactly matches** the target number:
  - **Positive visual feedback** (animation, color change, celebration effect)
  - Play a **success sound**
  - **Instantly generate a new random target number** (no pause/delay)
  - Increment the "Correct Factors" score by 1
  - Clear the equation display and reset current product

### Overshoot/Mismatch Handling
- If the product exceeds or doesn't match the target:
  - **No explicit error message or prevention**
  - Players must recognize the mismatch themselves
  - Players can use the undo feature to adjust their selections

---

## Timer System

### Game Start Countdown
- When player clicks "Start" button, show a countdown: **"3... 2... 1... Go!"**
- After countdown completes, the 1-minute timer begins
- First target number appears after the countdown

### Main Timer
- **60-second countdown timer** starts after the "Go!" countdown
- Timer is visible on screen at all times during gameplay
- Counts down from 60 to 0

### Game End
- When timer reaches 0:
  - Game immediately ends
  - All interactions are disabled
  - **Final score screen is displayed** showing:
    - Correct Factors: X
    - Undo Count: Y
  - Player must click a button (e.g., "Return to Main Menu" or "Done") to go back to the main screen
  - Scores reset when returning to main screen

---

## Undo Feature
- Players can **undo prime selections** one at a time
- Implementation:
  - Click on a **previously selected prime** in the equation display (e.g., click the "3" in "2 × 3 × 5 = 30")
  - Removes the **most recent (last) occurrence** of that clicked prime from the selection
  - Updates the current product accordingly
  - Play an **undo sound**
  - Example: If equation is "2 × 2 × 3 = 12" and player clicks the "2" in the equation, it becomes "2 × 3 = 6" (removes the last "2")
- Each undo increments the "Undo Count" by 1

---

## Scoring System
Track two metrics:

1. **Correct Factors**: Number of target numbers successfully factorized
2. **Undo Count**: Total number of undo actions used

Display both scores prominently during and after gameplay.

---

## Audio Feedback
Three distinct sounds:

1. **Click sound**: When selecting a prime number (brief, satisfying click)
2. **Success sound**: When reaching the target (celebratory, positive)
3. **Undo sound**: When undoing a selection (subtle, reversal-like)

All sounds should be simple, non-intrusive, and enhance the experience.

---

## Visual Design Requirements

### Style
- **Simple and clean** interface
- **Fun and engaging** visual aesthetic
- Appropriate for educational/practice context
- Modern web design principles

### Key Visual Elements
1. **Target number**: Large, prominent display at top
2. **Timer**: Clear countdown display
3. **Equation display**: Shows current multiplication as clickable equation (e.g., "2 × 3 × 5 = 30")
4. **Prime number buttons**: 10 primes at bottom, easily clickable
5. **Score display**: Shows "Correct Factors" and "Undo Count"
6. **Start button**: Initiates the game countdown
7. **Success feedback**: Animation/visual effect when target is reached
8. **Countdown display**: Shows "3... 2... 1... Go!" before game starts

### Visual Feedback States
- **Default state**: Neutral colors, ready for interaction
- **Selected prime in equation**: Clickable, shows it can be undone
- **Success state**: Positive colors (green), celebration animation
- **Active game**: Timer counting down, all elements interactive
- **Game over**: Final scores displayed, return button visible

---

## User Flow

### 1. Main Menu / Initial State
- Display game title
- Show **"How to Play"** button/section
- Show "Start" button
- Prime numbers visible but not yet interactive
- Scores show 0

### 2. How to Play (Before Game)
- Accessible via button on main menu
- Explains:
  - Goal: Match target numbers by multiplying primes
  - Time limit: 1 minute
  - How to select primes (click bottom buttons)
  - How to undo (click primes in equation)
  - Scoring system
- Can be dismissed to return to main menu

### 3. Game Start Sequence
- Player clicks "Start" button
- **Countdown appears**: "3... 2... 1... Go!"
- After "Go!", main 60-second timer begins
- First random target number (5-100, composite only) is generated and displayed
- Prime number buttons become interactive
- Equation display is empty or shows starting state

### 4. During Gameplay
- Player clicks primes from bottom buttons to build toward the target
- Equation display shows selected primes and current product (e.g., "2 × 3 = 6")
- Player can undo by clicking individual primes in the equation display
- Upon exact match: 
  - Success feedback (visual + sound)
  - New target generated **instantly**
  - Equation clears
  - Score increments
  - Continue playing
- Timer continues counting down throughout

### 5. Game End (Timer = 0)
- All interactions disabled
- Equation display and game elements fade or become inactive
- **Score screen displays**:
  - "Time's Up!" or similar message
  - Correct Factors: X
  - Undo Count: Y
  - "Return to Main Menu" or "Done" button
- Player clicks button to return to main menu
- Scores reset

### 6. Return to Main Menu
- Back to initial state
- Can view "How to Play" again
- Can start a new game

---

## Technical Requirements

### Platform & Deployment
- Local development environment
- Web-based (runs in browser)
- Technology stack: **Flexible** (can be vanilla HTML/CSS/JavaScript or any framework)
- No backend required for v1

### Responsiveness
- Must work on desktop screens
- Tablet support recommended
- Mobile support optional

### Performance
- Smooth animations and instant feedback
- No lag when clicking primes or undoing
- Efficient random number generation (composite numbers only)

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript support assumed

---

## Game Logic Requirements

### Composite Number Generation Algorithm
- Generate random numbers between 5 and 100
- Ensure all generated numbers can be factorized using available primes: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29
- Exclude prime numbers that have no factors other than 1 and themselves

### Valid Target Numbers (Examples)
- Composites: 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 26, 27, 28, 30, etc.
- All numbers with factors from the available prime set

### Invalid Target Numbers (Must Avoid)
- Primes greater than 29: 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97

---

## New Feature: Simple Mode (v1.2 - In Development)

### Feature Description
An alternative gameplay mode that shows intermediate division results, making factorization more intuitive and accessible for learners.

### Implementation Details
- **Mode Selection**: Player chooses between "Normal Mode" or "Simple Mode" on main menu before game starts
- **Display Format**: Shows complete division chain in one line: `18 ÷ 2 ÷ 3 = 3`
- **Prime Interaction**:
  - When player selects a prime, divide the current intermediate by that prime
  - If result is NOT a whole number, nothing happens (silent rejection)
  - If result IS a whole number, update the display with new intermediate
- **Success Condition**: When intermediate reaches 1 (all factors selected)
- **Prime Targets**: Work same as Normal Mode (click "It's Prime!")
- **Mode Persistence**: Selected mode applies to entire game session
- **Educational Value**: 
  - Players see exact progress after each selection
  - Wrong choices are obvious (nothing happens)
  - Easier to understand factorization process
  - Great for beginners!

---

## New Feature: Prime Number Recognition (v1.1 - Completed)

### Feature Description
In addition to factorizing composite numbers, players must also recognize and identify prime numbers.

### Implementation Details
- **20% of targets are prime numbers** (randomly mixed with composites)
- **Prime range**: 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 (15 primes between 30-100)
- **"Prime" button** added to the UI alongside prime factor buttons
- When target is prime:
  - Player cannot factorize it (will never reach the target)
  - Player must recognize it's prime and click "Prime" button
  - Correct click: Success sound + green flash + new target (same as factorization success)
  - Wrong click on composite: Nothing happens (no penalty)
- If player tries to factorize a prime:
  - Timer continues running normally
  - No hints or help provided
  - Player must realize on their own
- Score tracks both factorizations and prime identifications together

### Educational Value
- Teaches prime recognition alongside factorization
- Increases difficulty and strategic thinking
- More realistic mathematical challenge

---

## Future Enhancement Ideas (Out of Scope for v1)
- Difficulty levels (different number ranges, more primes)
- Leaderboard/high scores with persistence
- Hint system showing one factor
- Multiple game modes (timed vs. untimed, endless mode)
- Progression/achievement system
- Multiplayer/competitive mode
- Statistics tracking across sessions
- Custom prime set selection
- Separate score tracking for primes vs composites

---

## Success Metrics
A successful implementation will:
- Be intuitive and fun to play
- Provide clear visual and audio feedback
- Help players practice and improve at prime factorization
- Be stable and bug-free during gameplay
- Meet all core gameplay requirements outlined above
- Load quickly and run smoothly
- Have clear instructions accessible to new players
