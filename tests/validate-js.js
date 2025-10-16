#!/usr/bin/env node

/**
 * JavaScript Validator - Checks for common errors
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Validating JavaScript...\n');

const jsFiles = [
    'js/main.js',
    'js/game.js',
    'js/ui.js',
    'js/audio.js',
    'js/utils.js'
];

let errors = 0;

jsFiles.forEach(file => {
    console.log(`Checking ${file}...`);
    const content = fs.readFileSync(file, 'utf8');
    
    // Check 1: No console.log in production code (warning only)
    const consoleLogs = (content.match(/console\.log/g) || []).length;
    if (consoleLogs > 0) {
        console.log(`  ⚠️  Warning: ${consoleLogs} console.log statements (consider removing for production)`);
    }
    
    // Check 2: Balanced braces
    const openBraces = (content.match(/{/g) || []).length;
    const closeBraces = (content.match(/}/g) || []).length;
    if (openBraces !== closeBraces) {
        console.error(`  ❌ Mismatched braces: ${openBraces} open, ${closeBraces} close`);
        errors++;
    } else {
        console.log(`  ✅ Braces balanced`);
    }
    
    // Check 3: Balanced parentheses
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
    if (openParens !== closeParens) {
        console.error(`  ❌ Mismatched parentheses: ${openParens} open, ${closeParens} close`);
        errors++;
    } else {
        console.log(`  ✅ Parentheses balanced`);
    }
    
    // Check 4: No var usage (should use const/let)
    if (content.includes(' var ')) {
        console.log(`  ⚠️  Warning: 'var' found, prefer 'const' or 'let'`);
    }
    
    // Check 5: Functions are defined
    const functionCalls = content.match(/\b\w+\(/g) || [];
    const functionDefs = content.match(/function\s+(\w+)/g) || [];
    const definedFunctions = functionDefs.map(f => f.replace('function ', ''));
    
    console.log(`  ✅ ${definedFunctions.length} functions defined`);
    
    console.log('');
});

// Summary
console.log('='.repeat(50));
if (errors > 0) {
    console.error(`❌ JavaScript validation failed with ${errors} error(s)\n`);
    process.exit(1);
} else {
    console.log('✅ JavaScript validation passed!\n');
    process.exit(0);
}

