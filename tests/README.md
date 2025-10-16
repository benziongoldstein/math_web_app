# Testing Documentation

## Overview

This directory contains automated tests for the Math Practice Web App. Tests run automatically on every Pull Request and before deployment.

## Test Files

### `run-tests.js`
Main test runner that validates:
- ✅ All required files exist
- ✅ HTML structure is correct
- ✅ JavaScript functions are present
- ✅ Game modes are implemented
- ✅ Constants are correct
- ✅ No obvious syntax errors

### `lint-html.js`
HTML linter that checks:
- ✅ DOCTYPE present
- ✅ Meta tags correct
- ✅ No duplicate IDs
- ✅ CSS and JS files linked
- ✅ Balanced HTML tags

### `validate-js.js`
JavaScript validator that checks:
- ✅ Balanced braces and parentheses
- ✅ No syntax errors
- ⚠️ Warnings for console.log and var usage

## Running Tests

### Locally
```bash
# Run all tests
npm test

# Run specific test
npm run lint        # HTML linting only
npm run validate    # JS validation only
```

### In CI/CD
Tests run automatically:
- **On Pull Request**: Tests must pass before merge
- **On Merge to Main**: Final test run before deploy

## Test Output

### Success ✅
```
🧪 Running Tests...

✅ All required files exist
✅ index.html contains required elements
✅ JavaScript files contain required functions
...

📊 Test Summary:
   Total:  8
   ✅ Pass: 8
   ❌ Fail: 0

✅ All tests passed!
```

### Failure ❌
```
🧪 Running Tests...

✅ All required files exist
❌ index.html contains required elements
   Missing file: index.html

📊 Test Summary:
   Total:  8
   ✅ Pass: 1
   ❌ Fail: 1

❌ Tests failed! Please fix the issues above.
```

## Adding New Tests

To add a new test in `run-tests.js`:

```javascript
test('Test name', () => {
    // Your test logic
    assert(condition, 'Error message');
});
```

## CI/CD Integration

### Test Workflow (`.github/workflows/test.yml`)
- Runs on every PR
- Blocks merge if tests fail
- Comments results on PR

### Deploy Workflow (`.github/workflows/deploy.yml`)
- Runs on merge to main
- Runs tests before deploy
- Deploys to GitHub Pages if tests pass

## Future Enhancements

### Phase 1 (Current)
- ✅ Basic validation tests
- ✅ HTML/JS linting
- ✅ CI/CD integration

### Phase 2 (Planned)
- [ ] Jest unit tests
- [ ] Playwright E2E tests
- [ ] Test coverage reports
- [ ] Visual regression tests

### Phase 3 (Future)
- [ ] Performance testing
- [ ] Accessibility testing
- [ ] Cross-browser testing
- [ ] Load testing

## Troubleshooting

### Tests fail locally but pass in CI
- Clear node_modules: `rm -rf node_modules && npm install`
- Check Node version matches CI (v18)

### Tests pass but deployment fails
- Check deploy workflow logs
- Verify GitHub Pages settings
- Check branch protection rules

## Resources

- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Testing Best Practices](https://testingjavascript.com/)
- See `specs/auto_test_spec.md` for detailed test specification

