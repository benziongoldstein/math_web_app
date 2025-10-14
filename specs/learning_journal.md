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

#### **Q3: What are the different ways to run a web app locally? Which should I use?**
**Asked**: Day 2, before starting development

**Answer**: 
There are 3 main options to test your web app on your computer:

**Option 1: Double-Click HTML File**
- Just open `index.html` in your browser
- **Pros**: Super simple, no setup
- **Cons**: Some features don't work (browser security), not realistic
- **Best for**: Quick viewing of basic pages

**Option 2: Python Server** ⭐ **(We chose this!)**
- Run command: `python3 -m http.server 8000`
- Open: `http://localhost:8000` in browser
- **Pros**: 
  - No installation needed (we have Python)
  - Works for all web projects
  - Professional setup
  - Avoids browser security issues
- **Best for**: Real development (what we're doing!)

**Option 3: Node.js Server**
- Requires installing packages first
- Similar to Python server
- **Best for**: When using Node.js tools

**Why we picked Option 2**: 
You already have Python installed, it works for any future projects, and it's how real developers test web apps locally.

---

#### **Q4: What are HTML concepts like `id`, `class`, and `data-` attributes?**
**Asked**: Day 2, after creating the HTML file

**Answer**: 
These are ways to label and organize HTML elements so CSS and JavaScript can work with them.

**1. `id="something"` - Unique Name**
- Like a person's unique ID card
- Each `id` should only be used ONCE on the page
- JavaScript uses it to find specific elements
- Example from our project:
  ```html
  <button id="start-btn">Start Game</button>
  ```
  JS can find this exact button using `id="start-btn"`

**2. `class="something"` - Group Label**
- Like a uniform that multiple people wear
- Multiple elements can have the same class
- CSS uses it to style groups of elements
- Example from our project:
  ```html
  <button class="btn">Start</button>
  <button class="btn">How to Play</button>
  ```
  Both buttons get the same styling because they share `class="btn"`

**3. `data-prime="2"` - Custom Data Storage**
- Store extra information in an element
- JavaScript can read this data later
- Example from our project:
  ```html
  <button class="prime-btn" data-prime="2">2</button>
  <button class="prime-btn" data-prime="3">3</button>
  ```
  When you click a button, JS reads `data-prime` to know which number (2 or 3) you clicked

**Quick Summary:**
- `id` = Unique name (one per page)
- `class` = Group label (many can share it)
- `data-` = Custom info storage

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

