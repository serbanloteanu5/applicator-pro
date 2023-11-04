/*
Filename: ComplexCode.js
Content: A complex code that calculates the sum of prime numbers up to a given limit using a custom function, and then validates if the result is a palindrome number or not.
*/

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Function to get the sum of prime numbers up to a given limit
function sumOfPrimes(limit) {
    let sum = 0;
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

// Check if the sum of primes is a palindrome number
function isPalindrome(sum) {
    const sumStr = sum.toString();
    const sumLength = sumStr.length;
    for (let i = 0; i < sumLength / 2; i++) {
        if (sumStr[i] !== sumStr[sumLength - i - 1]) {
            return false;
        }
    }
    return true;
}

// Main code execution
const limit = 1000;
const primeSum = sumOfPrimes(limit);

console.log(`The sum of prime numbers up to ${limit} is: ${primeSum}`);

if (isPalindrome(primeSum)) {
    console.log(`${primeSum} is a palindrome number.`);
} else {
    console.log(`${primeSum} is not a palindrome number.`);
}

// ... Continue with more code if desired.