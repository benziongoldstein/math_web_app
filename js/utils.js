// Utility Functions

// Available primes that can be used for factorization
const AVAILABLE_PRIMES = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

// Large primes (31-97) for prime recognition feature
const LARGE_PRIMES = [31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

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
 * Calculate the product of an array of numbers
 * @param {number[]} numbers - Array of numbers to multiply
 * @returns {number} - The product
 */
function calculateProduct(numbers) {
    if (numbers.length === 0) return 1;
    return numbers.reduce((acc, val) => acc * val, 1);
}

/**
 * Generate a random large prime number (31-97)
 * @returns {number} - A random large prime
 */
function generateRandomLargePrime() {
    const randomIndex = Math.floor(Math.random() * LARGE_PRIMES.length);
    return LARGE_PRIMES[randomIndex];
}

/**
 * Generate a random target (composite or prime based on 20% chance)
 * @param {number} min - Minimum value for composites
 * @param {number} max - Maximum value for composites
 * @returns {object} - {value: number, isPrime: boolean}
 */
function generateRandomTarget(min, max) {
    // 20% chance of generating a prime
    if (Math.random() < 0.2) {
        return {
            value: generateRandomLargePrime(),
            isPrime: true
        };
    } else {
        return {
            value: generateRandomComposite(min, max),
            isPrime: false
        };
    }
}


