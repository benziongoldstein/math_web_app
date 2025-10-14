// Utility Functions

// Available primes that can be used for factorization
const AVAILABLE_PRIMES = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

/**
 * Check if a number can be factorized using only available primes
 * @param {number} num - The number to check
 * @returns {boolean} - True if the number can be factorized
 */
function canBeFactorized(num) {
    let temp = num;
    
    // Try to divide by each available prime
    for (let prime of AVAILABLE_PRIMES) {
        while (temp % prime === 0) {
            temp = temp / prime;
        }
    }
    
    // If temp is 1, the number was completely factorized
    return temp === 1;
}

/**
 * Check if a number is prime
 * @param {number} num - The number to check
 * @returns {boolean} - True if the number is prime
 */
function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    
    return true;
}

/**
 * Generate a random composite number between min and max
 * that can be factorized using available primes
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} - A valid composite number
 */
function generateRandomComposite(min, max) {
    let attempts = 0;
    const maxAttempts = 1000;
    
    while (attempts < maxAttempts) {
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        
        // Check if it's not a large prime and can be factorized
        if (!isPrime(num) && canBeFactorized(num)) {
            return num;
        }
        
        attempts++;
    }
    
    // Fallback: return a number we know works (like 12 = 2×2×3)
    return 12;
}

/**
 * Generate a random prime greater than 29 within the range
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} - A random prime number greater than 29
 */
function generateRandomPrimeGreaterThan29(min, max) {
    // List of primes between 31 and 100 that are greater than 29
    const primesGreaterThan29 = [31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    
    // Filter primes within the range
    const validPrimes = primesGreaterThan29.filter(p => p >= min && p <= max);
    
    if (validPrimes.length === 0) {
        // Fallback to smallest prime > 29 if no valid primes in range
        return 31;
    }
    
    const randomIndex = Math.floor(Math.random() * validPrimes.length);
    return validPrimes[randomIndex];
}

/**
 * Generate a random target number (composite 80% of the time, prime 20% of the time)
 * @param {number} min - Minimum value for composite numbers
 * @param {number} max - Maximum value for composite numbers
 * @returns {number} - A valid target number
 */
function generateRandomTarget(min, max) {
    // 20% chance to generate a prime number greater than 29
    if (Math.random() < 0.2) {
        return generateRandomPrimeGreaterThan29(min, max);
    } else {
        return generateRandomComposite(min, max);
    }
}

/**
 * Calculate the product of an array of numbers
 * @param {number[]} numbers - Array of numbers to multiply
 * @returns {number} - The product
 */
function calculateProduct(numbers) {
    if (numbers.length === 0) return 1;
    return numbers.reduce((acc, val) => acc * val, 1);
}


