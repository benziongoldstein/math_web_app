# Prime Factorization Game 🎮

A fun, educational web-based game for practicing prime factorization skills. Race against the clock to match target numbers by multiplying prime numbers!

![Game Version](https://img.shields.io/badge/version-1.2.0-blue)
![Status](https://img.shields.io/badge/status-fully%20functional-brightgreen)
![Features](https://img.shields.io/badge/modes-2%20game%20modes-purple)

## 🌐 Play Online

**Live Demo**: [https://benziongoldstein.github.io/math_web_app/](https://benziongoldstein.github.io/math_web_app/)

Try the game now - no installation needed! Or play locally by following the instructions below.

---

## 📝 Description

This interactive math game helps players practice prime factorization in a fun, arcade-style format. Players have 60 seconds to correctly factorize as many composite numbers as possible by selecting and multiplying prime numbers.

### Key Features
- ✅ **Two game modes** - Normal Mode and Simple Mode for different skill levels
- ✅ **Prime recognition** - Identify prime numbers (v1.1)
- ✅ **Simple Mode** - See division progress in real-time for easier learning (v1.2)
- ✅ **60-second timed gameplay** - Fast-paced challenge
- ✅ **10 prime numbers to choose from** - 2, 3, 5, 7, 11, 13, 17, 19, 23, 29
- ✅ **Undo functionality** - Click primes in equation to remove them
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
│   └── utils.js            # Helper functions (number generation, calculations)
├── assets/
│   ├── sounds/             # (Empty - using Web Audio API)
│   └── images/             # (Optional future images)
├── specs/
│   ├── specefictions.md    # Product specification
│   ├── dev_spec_status.md  # Development status and tracking
│   └── learning_journal.md # Learning documentation
└── README.md               # This file
```

---

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Structure and markup
- **CSS3** - Styling, animations, responsive design
- **Vanilla JavaScript (ES6+)** - Game logic and interactivity

### Audio
- **Web Audio API** - Procedurally generated sound effects (no audio files needed!)

### Development
- **Python HTTP Server** - Local development server
- **Git** - Version control

### Browser Support
- ✅ Chrome (tested)
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
- No penalties - just try to maximize correct answers!

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

- **Current Version**: 1.2.0
- **Total Development Time**: ~2 days
- **Lines of Code**: ~1000 lines
- **Files Created**: 15
- **Bugs Fixed**: 6
- **Tests Passed**: 100% ✅
- **Features**: 2 game modes, prime recognition, responsive design

---

## 🐛 Known Issues

None! All tests passed. 🎉

If you find a bug, please document it in `specs/dev_spec_status.md`.

---

## 🚧 Future Enhancements

Potential features for future versions:
- [ ] Difficulty levels (different number ranges, more primes)
- [ ] Leaderboard/high scores with local storage
- [ ] Hint system
- [ ] Untimed practice mode
- [ ] Sound on/off toggle
- [ ] More prime numbers available
- [ ] Multiplayer/competitive mode
- [ ] Statistics tracking across sessions
- [ ] Separate score tracking for primes vs composites
- [ ] Advanced mode with larger numbers

---

## 📜 Credits

**Developed by**: Ben  
**Development Approach**: AI-assisted incremental development  
**Date**: October 2025  
**Version**: 1.2.0  
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
- Testing and debugging workflow
- Documentation best practices

Check out `specs/learning_journal.md` for detailed learning notes!

---

**Enjoy the game and happy factorizing!** 🧮✨
