# Automated Testing Specification

**Project**: Math Practice Web App  
**Version**: 1.2.0  
**Purpose**: Define automated testing strategy and implementation for CI/CD pipeline  
**Last Updated**: October 14, 2025

---

## Overview

This document outlines the automated testing strategy for the Prime Factorization Game, including what should be tested, how tests are structured, and how they integrate with our GitHub Actions CI/CD pipeline.

---

## Testing Philosophy

### Goals
1. **Catch bugs early** - Before they reach production
2. **Prevent regressions** - Ensure new features don't break old ones
3. **Maintain quality** - Enforce standards through automated checks
4. **Enable confidence** - Deploy knowing code works

### Test Levels
1. **Unit Tests** - Individual functions (utils, calculations)
2. **Integration Tests** - Feature interactions (game logic)
3. **End-to-End Tests** - Full user workflows (gameplay scenarios)
4. **Visual Tests** - UI rendering (manual/screenshot comparison)

---

## Test Coverage Requirements

### Core Game Logic (Critical - Must Pass)

#### 1. Target Number Generation
**File**: `js/utils.js`
- ✅ Composite numbers are always factorizable by available primes
- ✅ 20% of targets are large primes (31-97)
- ✅ 80% of targets are composites (5-100)
- ✅ No invalid numbers generated (primes > 29 that aren't in large prime list)

**Test Scenarios**:
```javascript
// Generate 100 targets, verify distribution
- Composite count: 75-85 (80% ± 5%)
- Prime count: 15-25 (20% ± 5%)
- All composites can be factorized
- All primes are in [31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]
```

#### 2. Normal Mode - Multiplication Logic
**File**: `js/game.js` - selectPrime()
- ✅ Selecting primes multiplies correctly
- ✅ Same prime can be selected multiple times
- ✅ Product updates in real-time
- ✅ Success triggers when product equals target
- ✅ New target generated after success

**Test Scenarios**:
```javascript
// Target: 12
- Click 2 → product = 2
- Click 2 → product = 4
- Click 3 → product = 12 → SUCCESS
- Verify: score increments, new target generated
```

#### 3. Simple Mode - Division Logic
**File**: `js/game.js` - selectPrime() (Simple Mode)
- ✅ Only primes that divide evenly are accepted
- ✅ Non-divisible primes are silently rejected
- ✅ Intermediate updates correctly after each division
- ✅ Success triggers when intermediate reaches 1
- ✅ Display shows division format: `18 ÷ 2 ÷ 3 = 3`

**Test Scenarios**:
```javascript
// Target: 18, Mode: Simple
- Click 2 → intermediate = 9 (18/2)
- Click 5 → nothing happens (doesn't divide)
- Click 3 → intermediate = 3 (9/3)
- Click 3 → intermediate = 1 (3/3) → SUCCESS
```

#### 4. Undo Functionality
**File**: `js/game.js` - undoPrime()
- ✅ Undo removes last occurrence of selected prime
- ✅ Product/intermediate recalculates correctly
- ✅ Undo count increments
- ✅ Success triggers if undo reaches target/1
- ✅ Works in both Normal and Simple modes

**Test Scenarios**:
```javascript
// Normal Mode: Target 12, selected [2,3,2]
- Undo 2 → selected [2,3], product = 6
- Undo 3 → selected [2], product = 2
- Verify undo count = 2

// Simple Mode: Target 18, selected [2,3], intermediate 3
- Undo 3 → selected [2], intermediate = 9 (3*3)
- Verify undo count increments
```

#### 5. Prime Recognition Feature
**File**: `js/game.js` - handlePrimeClick()
- ✅ Clicking "It's Prime!" on prime target → success
- ✅ Clicking "It's Prime!" on composite → nothing happens
- ✅ Works in both game modes

**Test Scenarios**:
```javascript
// Target: 37 (prime)
- Click "It's Prime!" → SUCCESS

// Target: 36 (composite)
- Click "It's Prime!" → nothing happens
- Verify no score change, target unchanged
```

#### 6. Timer & Scoring
**File**: `js/game.js` - timer, scoring
- ✅ Timer starts at 60 seconds
- ✅ Timer counts down every second
- ✅ Game ends when timer reaches 0
- ✅ Correct Factors score increments on success
- ✅ Undo Count increments on undo
- ✅ Scores persist during game session
- ✅ Scores reset on new game

**Test Scenarios**:
```javascript
// Timer
- Start game → timer = 60
- Wait 5 seconds → timer = 55
- Set timer to 1, wait 2 seconds → game ends

// Scoring
- Solve target → correctFactors = 1
- Solve again → correctFactors = 2
- Undo once → undoCount = 1
- Return to menu → scores reset to 0
```

---

### UI/UX Tests (Important - Should Pass)

#### 7. Screen Navigation
**Files**: `js/main.js`, `js/ui.js`
- ✅ Main menu displays on load
- ✅ "How to Play" button shows instructions
- ✅ "Start Game" triggers countdown
- ✅ Countdown shows 3, 2, 1, Go!
- ✅ Game screen appears after countdown
- ✅ Game over screen shows after timer ends
- ✅ "Return to Menu" button works

#### 8. Mode Selection
**Files**: `index.html`, `js/main.js`
- ✅ Normal Mode button starts in active state
- ✅ Clicking Simple Mode switches active state
- ✅ Selected mode persists through game
- ✅ Mode resets when returning to menu

#### 9. Equation Display
**File**: `js/ui.js` - updateEquationDisplay()
- ✅ Normal Mode shows: `2 × 3 = 6`
- ✅ Simple Mode shows: `18 ÷ 2 ÷ 3 = 3`
- ✅ Primes in equation are clickable
- ✅ Clicking prime triggers undo
- ✅ Display updates in real-time

#### 10. Audio Feedback
**File**: `js/audio.js`
- ✅ Click sound plays on prime selection
- ✅ Success sound plays on correct answer
- ✅ Undo sound plays on undo action
- ✅ No errors if audio fails (graceful degradation)

---

### Edge Cases (Nice to Have)

#### 11. Rapid Clicking
- ✅ Multiple rapid clicks don't break game
- ✅ Product/intermediate calculated correctly
- ✅ No race conditions

#### 12. Invalid States
- ✅ Can't interact during countdown
- ✅ Can't interact after game ends
- ✅ Undo with no selections does nothing
- ✅ Timer never goes negative

#### 13. Browser Compatibility
- ✅ Works in Chrome
- ✅ Works in Firefox
- ✅ Works in Safari
- ✅ Works in Edge

---

## Test Implementation Strategy

### Tools & Framework

**For Unit/Integration Tests**:
- **Jest** - JavaScript testing framework
- **Testing Library** - DOM testing utilities
- Tests run in Node.js environment

**For End-to-End Tests**:
- **Playwright** - Browser automation
- Tests run in actual browsers
- Can test visual aspects and interactions

**For Code Quality**:
- **ESLint** - JavaScript linting
- **HTML Validator** - HTML validation
- **CSS Validator** - CSS validation (optional)

---

## File Structure

```
math_web_app/
├── .github/
│   └── workflows/
│       ├── test.yml          # Run tests on PR
│       └── deploy.yml        # Deploy on merge to main
├── tests/
│   ├── unit/
│   │   ├── utils.test.js     # Test utils.js functions
│   │   └── calculations.test.js
│   ├── integration/
│   │   ├── game-logic.test.js    # Test game.js functions
│   │   └── mode-switching.test.js
│   └── e2e/
│       ├── normal-mode.spec.js   # E2E test for Normal Mode
│       ├── simple-mode.spec.js   # E2E test for Simple Mode
│       └── prime-recognition.spec.js
├── package.json              # Dependencies (Jest, Playwright)
└── jest.config.js            # Jest configuration
```

---

## GitHub Actions Integration

### Workflow 1: Test on Pull Request

**File**: `.github/workflows/test.yml`

**Triggers**: 
- Every push to PR
- Every new PR created

**Steps**:
1. Checkout code
2. Setup Node.js
3. Install dependencies (`npm install`)
4. Run linter (`npm run lint`)
5. Run unit tests (`npm run test:unit`)
6. Run integration tests (`npm run test:integration`)
7. Run E2E tests (`npm run test:e2e`)
8. Generate test coverage report
9. Comment results on PR

**Result**: ✅ PR can merge | ❌ PR blocked (tests failed)

---

### Workflow 2: Deploy on Merge to Main

**File**: `.github/workflows/deploy.yml`

**Triggers**:
- Push to `main` branch (after PR merge)

**Steps**:
1. Checkout code
2. Run tests (safety check)
3. Build if needed
4. Deploy to GitHub Pages
5. Verify deployment successful
6. Notify on failure

**Result**: Live site automatically updated!

---

## Branch Protection Rules

### Main Branch Requirements
- ✅ Require pull request before merging
- ✅ Require status checks to pass before merging
  - ✅ All tests must pass
  - ✅ Linting must pass
- ✅ Require branches to be up to date
- ❌ Don't allow force push
- ❌ Don't allow deletions

### PR Requirements
- At least 1 passing test suite
- No linter errors
- No merge conflicts

---

## Test Execution

### Locally (Development)
```bash
# Run all tests
npm test

# Run specific suite
npm run test:unit
npm run test:integration
npm run test:e2e

# Watch mode (auto-rerun on changes)
npm run test:watch

# Coverage report
npm run test:coverage
```

### In CI (GitHub Actions)
- Automatically runs on every PR
- Results posted as PR comment
- Merge blocked if tests fail

---

## Success Criteria

### Minimum Requirements
- ✅ All critical tests pass (100%)
- ✅ At least 80% of important tests pass
- ✅ No linter errors
- ✅ No console errors in E2E tests

### Target Goals
- ✅ 100% of all tests pass
- ✅ Test coverage > 80%
- ✅ All browsers tested successfully

---

## Maintenance

### When to Update Tests
- ✅ Adding new feature → Add tests first (TDD)
- ✅ Fixing bug → Add test to prevent regression
- ✅ Changing functionality → Update affected tests
- ✅ Monthly → Review and update test suite

### Test Quality Standards
- Tests should be **fast** (< 5 min total)
- Tests should be **reliable** (no flaky tests)
- Tests should be **clear** (easy to understand failures)
- Tests should be **isolated** (independent of each other)

---

## Future Enhancements

### Phase 1 (Current)
- Basic test suite covering critical features
- GitHub Actions integration
- Automated deployment

### Phase 2 (Future)
- Visual regression testing (screenshot comparison)
- Performance testing (load time, FPS)
- Accessibility testing (a11y)
- Cross-browser testing matrix

### Phase 3 (Advanced)
- Continuous monitoring (error tracking)
- A/B testing framework
- Analytics integration
- User behavior testing

---

## Resources & Documentation

### Testing Best Practices
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Playwright Documentation](https://playwright.dev/)
- [Testing Library](https://testing-library.com/)
- [GitHub Actions](https://docs.github.com/en/actions)

### Our Testing Guides
- See `tests/README.md` for how to write tests
- See workflow files for CI/CD configuration
- See this spec for what to test

---

**This specification will evolve as the project grows!**

