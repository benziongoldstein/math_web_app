# Prime Factorization Game 🎮

A fun, educational web-based game for practicing prime factorization skills. Race against the clock to match target numbers by multiplying prime numbers!

![Game Version](https://img.shields.io/badge/version-1.3.0-blue)
![Status](https://img.shields.io/badge/status-fully%20functional-brightgreen)
![Features](https://img.shields.io/badge/modes-2%20game%20modes-purple)
![Backend](https://img.shields.io/badge/backend-Firebase-orange)

## 🌐 Play Online

**Live Demo**: [https://benziongoldstein.github.io/math_web_app/](https://benziongoldstein.github.io/math_web_app/)

Try the game now - no installation needed! Or play locally by following the instructions below.

---

## 📝 Description

This interactive math game helps players practice prime factorization in a fun, arcade-style format. Players have 60 seconds to correctly factorize as many composite numbers as possible by selecting and multiplying prime numbers.

### Key Features

#### Gameplay
- ✅ **Two game modes** - Normal Mode and Simple Mode for different skill levels
- ✅ **Prime recognition** - Identify prime numbers (v1.1)
- ✅ **Simple Mode** - See division progress in real-time for easier learning (v1.2)
- ✅ **60-second timed gameplay** - Fast-paced challenge
- ✅ **10 prime numbers to choose from** - 2, 3, 5, 7, 11, 13, 17, 19, 23, 29
- ✅ **Undo functionality** - Click primes in equation to remove them

#### User Features (v1.3 - NEW!)
- ✅ **Google Sign-In** - One-click authentication with your Google account
- ✅ **Leaderboard** - Compete globally with separate boards for each mode
- ✅ **Personal Best Tracking** - Automatically save your highest scores
- ✅ **Real-time Rankings** - See your rank and top 10 players instantly
- ✅ **Profile Display** - Show your name and photo from Google account
- ✅ **Guest Mode** - Play without signing in (scores not saved)

#### Experience
- ✅ **Score tracking** - Tracks correct answers and undo count
- ✅ **Sound effects** - Click, success, and undo sounds
- ✅ **Visual feedback** - Green flash animation on success
- ✅ **Responsive design** - Works on desktop, tablet, and mobile
- ✅ **Beautiful UI** - Modern purple gradient design

---

## 🚀 How to Run

### Prerequisites
- Python 3.x installed (check with `python3 --version`)
- A modern web browser (Chrome, Firefox, Safari, or Edge)

### Steps to Run

1. **Navigate to the project directory:**
   ```bash
   cd /home/ben/math_web_app
   ```

2. **Start the Python server:**
   ```bash
   python3 -m http.server 8000
   ```

3. **Open your browser and go to:**
   ```
   http://localhost:8000
   ```

4. **To stop the server:**
   - Press `Ctrl + C` in the terminal

---

## 🎮 How to Play

### Choose Your Mode

**Normal Mode** 🎯
- See your multiplication equation (e.g., `2 × 3 × 5 = 30`)
- Match the target number exactly
- Great for practicing mental multiplication

**Simple Mode** 🎓
- See both Target and Intermediate values side by side
- Watch the target get divided by your selected primes
- Equation shows your factors for easy undo
- Perfect for beginners learning the relationship between multiplication and division
- Win when Intermediate reaches 1!

### Game Flow

1. **Main Menu**
   - Select your preferred mode: **Normal** or **Simple**
   - Click **"Start Game"** to begin
   - Click **"How to Play"** for instructions

2. **Countdown**
   - Watch the countdown: 3... 2... 1... Go!

3. **Gameplay** (60 seconds)
   - A target number (5-100) appears at the top
   - Click prime numbers at the bottom to multiply them together
   - Your equation updates in real-time (e.g., "2 × 3 × 5 = 30")
   - Match the target number exactly to succeed!
   - On success: green flash, sound, new target instantly appears
   - Score increments with each correct factorization

4. **Undo**
   - Click any prime **in your equation** to remove the last occurrence of that prime
   - Undo count tracks how many times you use this feature

5. **Game Over**
   - Timer reaches 0
   - Final scores displayed: Correct Factors and Undo Count
   - Click **"Return to Main Menu"** to play again

### Tips
- You can click the same prime multiple times (e.g., 2×2×2 = 8)
- Only composite numbers are generated (no impossible primes!)
- Use undo strategically when you overshoot the target
- Speed matters - try to solve as many as possible in 60 seconds!

### Using the Leaderboard (v1.3)

1. **Main Menu**
   - Click **"Sign in with Google"** at the bottom of the main menu
   - Authorize with your Google account (one-time setup)
   - Your profile photo and name will appear at the top

2. **Play & Save Scores**
   - Play the game as usual in your chosen mode
   - After each game, your score is automatically saved **if it's your personal best**
   - Only your highest score is stored (most correct factors, then least undos)

3. **View Leaderboard**
   - Click **"🏆 Leaderboard"** from the main menu
   - Switch between Normal Mode and Simple Mode tabs
   - See top 10 players ranked by:
     - Primary: Most numbers factored
     - Tie-breaker: Least undos used
   - Your personal rank is displayed at the top (if signed in)

4. **Guest Mode**
   - You can play without signing in
   - Scores will NOT be saved to the leaderboard
   - You can view the leaderboard as a guest

---

## 📁 Project Structure

```
math_web_app/
├── index.html              # Main HTML file (game structure)
├── css/
│   └── styles.css          # All styling and animations
├── js/
│   ├── main.js             # Entry point, event listeners
│   ├── game.js             # Game logic and state management
│   ├── ui.js               # UI updates and rendering
│   ├── audio.js            # Sound effects (Web Audio API)
│   ├── utils.js            # Helper functions (number generation, calculations)
│   ├── firebase-config.js  # Firebase configuration (v1.3)
│   ├── auth.js             # Authentication logic (v1.3)
│   └── leaderboard.js      # Leaderboard & score management (v1.3)
├── assets/
│   └── images/             # (Optional future images)
├── specs/
│   ├── specefictions.md    # Product specification
│   ├── dev_spec_status.md  # Development status and tracking
│   ├── learning_journal.md # Learning documentation
│   └── auto_test_spec.md   # Testing specification
├── .github/
│   └── workflows/
│       └── test.yml        # CI/CD automated testing
├── tests/
│   └── test.html           # Test suite
├── README.md               # This file
└── FIREBASE_SECURITY_RULES.md  # Security rules setup guide (v1.3)
```

---

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Structure and markup
- **CSS3** - Styling, animations, responsive design
- **Vanilla JavaScript (ES6+)** - Game logic and interactivity

### Backend (v1.3 - NEW!)
- **Firebase** - Google's Backend-as-a-Service (BaaS) platform
- **Firebase Authentication** - Google OAuth sign-in
- **Cloud Firestore** - NoSQL database for real-time score storage
- **Firestore Indexes** - 3 composite indexes for efficient queries

### Audio
- **Web Audio API** - Procedurally generated sound effects (no audio files needed!)

### Development & Deployment
- **Python HTTP Server** - Local development server
- **Git & GitHub** - Version control
- **GitHub Pages** - Static site hosting
- **GitHub Actions** - CI/CD automated testing on pull requests

### Browser Support
- ✅ Chrome (tested and fully functional)
- ✅ Firefox (should work)
- ✅ Safari (should work)
- ✅ Edge (should work)

---

## 🎯 Game Rules

### Valid Target Numbers
- Range: **5 to 100**
- **80% composite numbers** that can be factorized using the available primes
- **20% large prime numbers** (31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97)
- When you get a prime target, click the **"It's Prime!"** button to score!

### Available Primes
```
2, 3, 5, 7, 11, 13, 17, 19, 23, 29
```

### Scoring
- **Correct Factors**: +1 for each target number matched
- **Undo Count**: Tracks total undo actions used
- **Leaderboard Ranking (v1.3)**: 
  - Primary: Most numbers factored (higher is better)
  - Tie-breaker: Least undos used (lower is better)
  - Separate leaderboards for Normal Mode and Simple Mode
- No penalties - just try to maximize correct answers and minimize undos!

---

## 🧠 Learning Objectives

This game helps players:
- Practice **prime factorization** in a fun, engaging way
- Improve **mental math** skills
- Develop **number sense** with primes and composites
- Understand the **relationship between multiplication and division** (Simple Mode)
- Recognize **prime numbers** and their properties
- Work under **time pressure** to build fluency
- Learn through **immediate feedback** (visual and audio)
- Progress from Simple Mode (beginner) to Normal Mode (advanced)

---

## 📊 Development Stats

- **Current Version**: 1.3.0
- **Total Development Time**: ~3 weeks
- **Lines of Code**: ~1500+ lines
- **Files Created**: 18
- **Bugs Fixed**: 9
- **Tests Passed**: 100% ✅
- **Features**: 2 game modes, prime recognition, authentication, leaderboard, responsive design
- **Backend**: Firebase (Authentication + Cloud Firestore)
- **Database Indexes**: 3 composite indexes
- **Deployment**: GitHub Pages + Firebase

---

## 🐛 Known Issues

None! All tests passed. 🎉

If you find a bug, please document it in `specs/dev_spec_status.md`.

---

## 🚧 Future Enhancements

Potential features for future versions:
- [ ] Difficulty levels (different number ranges, more primes)
- [ ] Hint system
- [ ] Untimed practice mode
- [ ] Sound on/off toggle
- [ ] More prime numbers available
- [ ] Detailed statistics dashboard (average time, accuracy, etc.)
- [ ] Separate score tracking for primes vs composites
- [ ] Advanced mode with larger numbers
- [ ] Achievement badges
- [ ] Weekly/monthly leaderboard resets

---

## 📜 Credits

**Developed by**: Ben  
**Development Approach**: AI-assisted incremental development with spec-first workflow  
**Date**: October 2025  
**Version**: 1.3.0  
**Live Demo**: [https://benziongoldstein.github.io/math_web_app/](https://benziongoldstein.github.io/math_web_app/)  

### Acknowledgments
- Built as a learning project to understand web development
- Specification-driven development with comprehensive testing
- All code written with explanations for educational purposes

---

## 📄 License

This project is for educational purposes. Feel free to use, modify, and learn from it!

---

## 🎓 For Learners

This project demonstrates:
- Clean code organization (separation of concerns)
- State management in vanilla JavaScript
- Event-driven programming
- CSS animations and transitions
- Web Audio API usage
- Backend integration with Firebase
- Authentication implementation (OAuth)
- Real-time database operations (Firestore)
- Database query optimization (composite indexes)
- Security rules implementation
- CI/CD with GitHub Actions
- Testing and debugging workflow
- Documentation best practices

Check out `specs/learning_journal.md` for detailed learning notes!

---

**Enjoy the game and happy factorizing!** 🧮✨
