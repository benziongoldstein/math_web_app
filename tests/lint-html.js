#!/usr/bin/env node

/**
 * HTML Linter - Basic HTML validation
 */

const fs = require('fs');

console.log('🔍 Linting HTML...\n');

const html = fs.readFileSync('index.html', 'utf8');
let errors = 0;

// Check 1: Proper HTML structure
if (!html.includes('<!DOCTYPE html>')) {
    console.error('❌ Missing <!DOCTYPE html>');
    errors++;
} else {
    console.log('✅ DOCTYPE present');
}

// Check 2: Required meta tags
if (!html.includes('<meta charset="UTF-8">')) {
    console.error('❌ Missing charset meta tag');
    errors++;
} else {
    console.log('✅ Charset meta tag present');
}

if (!html.includes('viewport')) {
    console.error('❌ Missing viewport meta tag');
    errors++;
} else {
    console.log('✅ Viewport meta tag present');
}

// Check 3: All IDs are unique
const idMatches = html.match(/id="([^"]+)"/g) || [];
const ids = idMatches.map(match => match.match(/id="([^"]+)"/)[1]);
const uniqueIds = new Set(ids);

if (ids.length !== uniqueIds.size) {
    console.error('❌ Duplicate IDs found');
    errors++;
} else {
    console.log('✅ All IDs are unique');
}

// Check 4: Links to CSS and JS files
if (!html.includes('href="css/styles.css"')) {
    console.error('❌ CSS file not linked');
    errors++;
} else {
    console.log('✅ CSS file linked');
}

const jsFiles = ['utils.js', 'audio.js', 'game.js', 'ui.js', 'main.js'];
jsFiles.forEach(file => {
    if (!html.includes(`src="js/${file}"`)) {
        console.error(`❌ Missing script: js/${file}`);
        errors++;
    } else {
        console.log(`✅ Script linked: js/${file}`);
    }
});

// Check 5: Balanced tags
const openDivs = (html.match(/<div/g) || []).length;
const closeDivs = (html.match(/<\/div>/g) || []).length;

if (openDivs !== closeDivs) {
    console.error(`❌ Unbalanced <div> tags (${openDivs} open, ${closeDivs} close)`);
    errors++;
} else {
    console.log('✅ Balanced <div> tags');
}

// Summary
console.log('\n' + '='.repeat(50));
if (errors > 0) {
    console.error(`❌ HTML linting failed with ${errors} error(s)\n`);
    process.exit(1);
} else {
    console.log('✅ HTML linting passed!\n');
    process.exit(0);
}

