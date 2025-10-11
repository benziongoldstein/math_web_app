# Learning Journal - Math Web App Project

**Student**: Ben  
**Started**: October 11, 2025  
**Goal**: Learn software development while building a math practice web app with AI assistance

---

## 📚 Table of Contents
1. [Questions & Answers](#questions--answers)
2. [Concepts Explained](#concepts-explained)
3. [Terms Dictionary](#terms-dictionary)
4. [Step-by-Step Learning](#step-by-step-learning)

---

## Questions & Answers

### Day 1: October 11, 2025

#### **Q1: What is this file structure? (Folders and files in the project)**
**Asked**: During specification review

**Answer**: 
The file structure is how we organize all the files in our project. Think of it like organizing a house - each folder (room) has a specific purpose:

- **index.html** = The "front door" - the main page that opens in the browser
- **css/** = The "interior decorator" folder - makes everything look pretty (colors, sizes, layout)
- **js/** = The "brain" folder - contains all the logic and behavior files:
  - `main.js` = The coordinator (connects everything)
  - `game.js` = Game logic (generates numbers, checks answers, tracks score)
  - `ui.js` = Updates what you see on screen
  - `audio.js` = Plays sounds
  - `utils.js` = Helper functions
- **assets/** = The "storage room" - media files (sounds, images)
- **specs/** = The "planning documents" - what to build and how

**Why organize this way?**
1. Easy to find things (need to change a sound? Go to `assets/sounds/`)
2. Each file has ONE job (easier to understand)
3. Professional standard (how real developers work)

---

## Concepts Explained

### What is HTML?
**HTML (HyperText Markup Language)** is the structure of a web page.

**Simple analogy**: If a website was a house...
- HTML = The walls, doors, windows (structure)
- CSS = The paint, decorations, furniture (style)
- JavaScript = The electricity, plumbing, smart features (behavior)

**Example**:
```html
<button>Click Me</button>
```
This creates a button with the text "Click Me".

### What is CSS?
**CSS (Cascading Style Sheets)** makes things look good.

**Example**:
```css
button {
  color: blue;
  font-size: 20px;
}
```
This makes all buttons blue with large text.

### What is JavaScript?
**JavaScript** makes web pages interactive and adds behavior.

**Example**:
```javascript
button.addEventListener('click', function() {
  alert('You clicked me!');
});
```
This makes something happen when you click a button.

---

## Terms Dictionary

### A-C
- **API** (Application Programming Interface): A way for programs to talk to each other
- **Browser**: The program you use to view websites (Chrome, Firefox, etc.)
- **CSS**: The language that styles web pages (colors, fonts, layout)

### D-F
- **Deployment**: Putting your website online so others can use it
- **Framework**: Pre-built code that helps you build things faster (like React, Vue)

### G-I
- **Git**: A tool for tracking changes to your code
- **HTML**: The language that structures web pages

### J-L
- **JavaScript**: The language that makes web pages interactive
- **Local Development**: Building/testing on your own computer (before putting online)

### M-R
- **Module**: A separate file containing related code
- **Repository (Repo)**: A folder that stores your project and its history

### S-Z
- **Syntax**: The rules for writing code correctly
- **Variable**: A container that stores information

*(Will add more terms as we learn them)*

---

## Step-by-Step Learning

### Phase 1: Setup & Structure (Not Started)

#### Step 1: Create Folder Structure
**What we'll learn:**
- How folders organize projects
- Why we separate different types of files
- How to create files and folders

**What we'll do:**
- Create folders: `css/`, `js/`, `assets/sounds/`, `assets/images/`
- Create empty files: `index.html`, `styles.css`, JavaScript files
- See how everything connects

*(Steps will be added as we go)*

---

## Today I Learned (TIL)

### October 11, 2025
- ✅ **File structure organization**: Why and how to organize project files
- ✅ **Separation of concerns**: HTML (structure), CSS (style), JavaScript (behavior)
- ✅ **Project planning**: Writing specifications before coding
- ✅ **Development phases**: Breaking a big project into manageable steps

---

#### **Q2: What is JS?**
**Asked**: End of Day 1

**Answer**: 
**JS = JavaScript** (it's just the short form)

JavaScript is the programming language that makes websites interactive and dynamic. 

In our game:
- JS generates the random numbers
- JS checks if your answer is correct
- JS makes the timer count down
- JS plays sounds when you click
- JS does all the "thinking" and game logic

**Simple way to remember**: JS is the "brain" of your website that makes things happen.

---

## Questions to Ask Next Time

*Write down anything you're curious about here, and we'll answer it as we build!*

- 

---

## Resources for Learning More

### Beginner-Friendly Sites
- **MDN Web Docs** (developer.mozilla.org): Best resource for HTML, CSS, JavaScript
- **W3Schools** (w3schools.com): Simple tutorials and examples
- **FreeCodeCamp** (freecodecamp.org): Interactive learning

### When You're Ready
- **JavaScript.info**: Deep dive into JavaScript
- **CSS-Tricks**: All about styling websites

---

## Notes & Reflections

*Your thoughts as you learn...*

**First thoughts:**
"I don't know much about software development yet, but I'm excited to learn by building something real with AI assistance!"

---

*This document will grow as we build the project together! 🚀*

