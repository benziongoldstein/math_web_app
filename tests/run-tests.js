#!/usr/bin/env node

/**
 * Simple Test Runner
 * Validates core functionality without external dependencies
 */

const fs = require('fs');
const path = require('path');

let testsRun = 0;
let testsPassed = 0;
let testsFailed = 0;

function test(name, fn) {
    testsRun++;
    try {
        fn();
        testsPassed++;
        console.log(`✅ ${name}`);
        return true;
    } catch (error) {
        testsFailed++;
        console.error(`❌ ${name}`);
        console.error(`   ${error.message}`);
        return false;
    }
}

function assert(condition, message) {
    if (!condition) {
        throw new Error(message || 'Assertion failed');
    }
}

console.log('\n🧪 Running Tests...\n');

// Test 1: Check all required files exist
test('All required files exist', () => {
    const requiredFiles = [
        'index.html',
        'css/styles.css',
        'js/main.js',
        'js/game.js',
        'js/ui.js',
        'js/audio.js',
        'js/utils.js'
    ];
    
    requiredFiles.forEach(file => {
        const filePath = path.join(process.cwd(), file);
        assert(fs.existsSync(filePath), `Missing file: ${file}`);
    });
});

// Test 2: Validate index.html structure
test('index.html contains required elements', () => {
    const html = fs.readFileSync('index.html', 'utf8');
    
    assert(html.includes('<!DOCTYPE html>'), 'Missing DOCTYPE');
    assert(html.includes('<title>'), 'Missing title tag');
    assert(html.includes('id="main-menu"'), 'Missing main menu');
    assert(html.includes('id="game-screen"'), 'Missing game screen');
    assert(html.includes('id="game-over"'), 'Missing game over screen');
    assert(html.includes('class="prime-btn"'), 'Missing prime buttons');
    assert(html.includes('id="prime-recognition-btn"'), 'Missing prime recognition button');
    assert(html.includes('id="normal-mode-btn"'), 'Missing normal mode button');
    assert(html.includes('id="simple-mode-btn"'), 'Missing simple mode button');
});

// Test 3: Validate JavaScript files structure
test('JavaScript files contain required functions', () => {
    const gameJs = fs.readFileSync('js/game.js', 'utf8');
    const uiJs = fs.readFileSync('js/ui.js', 'utf8');
    const utilsJs = fs.readFileSync('js/utils.js', 'utf8');
    const mainJs = fs.readFileSync('js/main.js', 'utf8');
    
    // game.js
    assert(gameJs.includes('function initGame'), 'Missing initGame function');
    assert(gameJs.includes('function selectPrime'), 'Missing selectPrime function');
    assert(gameJs.includes('function undoPrime'), 'Missing undoPrime function');
    assert(gameJs.includes('function setGameMode'), 'Missing setGameMode function');
    assert(gameJs.includes('gameMode:'), 'Missing gameMode in gameState');
    
    // ui.js
    assert(uiJs.includes('function updateUI'), 'Missing updateUI function');
    assert(uiJs.includes('function updateEquationDisplay'), 'Missing updateEquationDisplay function');
    
    // utils.js
    assert(utilsJs.includes('function generateRandomComposite'), 'Missing generateRandomComposite function');
    assert(utilsJs.includes('function generateRandomTarget'), 'Missing generateRandomTarget function');
    assert(utilsJs.includes('LARGE_PRIMES'), 'Missing LARGE_PRIMES array');
    
    // main.js
    assert(mainJs.includes('setupEventListeners'), 'Missing setupEventListeners function');
});

// Test 4: Validate constants
test('Utils contains correct prime arrays', () => {
    const utilsJs = fs.readFileSync('js/utils.js', 'utf8');
    
    assert(utilsJs.includes('[2, 3, 5, 7, 11, 13, 17, 19, 23, 29]'), 'Missing or incorrect AVAILABLE_PRIMES');
    assert(utilsJs.includes('31') && utilsJs.includes('97'), 'Missing large primes in LARGE_PRIMES');
});

// Test 5: CSS contains required styles
test('CSS contains required styles', () => {
    const css = fs.readFileSync('css/styles.css', 'utf8');
    
    assert(css.includes('.prime-btn'), 'Missing .prime-btn styles');
    assert(css.includes('.mode-btn'), 'Missing .mode-btn styles');
    assert(css.includes('.equation-display'), 'Missing .equation-display styles');
    assert(css.includes('@media'), 'Missing responsive styles');
});

// Test 6: Spec files exist and are complete
test('Specification files exist and are complete', () => {
    assert(fs.existsSync('specs/specefictions.md'), 'Missing specefictions.md');
    assert(fs.existsSync('specs/dev_spec_status.md'), 'Missing dev_spec_status.md');
    assert(fs.existsSync('specs/auto_test_spec.md'), 'Missing auto_test_spec.md');
    assert(fs.existsSync('README.md'), 'Missing README.md');
    
    const autoTestSpec = fs.readFileSync('specs/auto_test_spec.md', 'utf8');
    assert(autoTestSpec.includes('Test Coverage'), 'auto_test_spec.md incomplete');
});

// Test 7: No syntax errors in JS (basic check)
test('JavaScript files have no obvious syntax errors', () => {
    const jsFiles = ['js/main.js', 'js/game.js', 'js/ui.js', 'js/audio.js', 'js/utils.js'];
    
    jsFiles.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for common syntax errors
        const openBraces = (content.match(/{/g) || []).length;
        const closeBraces = (content.match(/}/g) || []).length;
        assert(openBraces === closeBraces, `${file}: Mismatched braces`);
        
        const openParens = (content.match(/\(/g) || []).length;
        const closeParens = (content.match(/\)/g) || []).length;
        assert(openParens === closeParens, `${file}: Mismatched parentheses`);
    });
});

// Test 8: Game modes implemented
test('Both game modes are properly implemented', () => {
    const gameJs = fs.readFileSync('js/game.js', 'utf8');
    const uiJs = fs.readFileSync('js/ui.js', 'utf8');
    
    assert(gameJs.includes("gameMode === 'simple'"), 'Simple mode logic missing in game.js');
    assert(gameJs.includes("gameMode === 'normal'"), 'Normal mode check missing in game.js');
    assert(uiJs.includes("gameMode === 'simple'"), 'Simple mode display logic missing in ui.js');
    assert(gameJs.includes('currentIntermediate'), 'Simple mode intermediate tracking missing');
});

// Summary
console.log('\n' + '='.repeat(50));
console.log(`📊 Test Summary:`);
console.log(`   Total:  ${testsRun}`);
console.log(`   ✅ Pass: ${testsPassed}`);
console.log(`   ❌ Fail: ${testsFailed}`);
console.log('='.repeat(50) + '\n');

if (testsFailed > 0) {
    console.error('❌ Tests failed! Please fix the issues above.\n');
    process.exit(1);
} else {
    console.log('✅ All tests passed!\n');
    process.exit(0);
}

