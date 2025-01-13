// Number and Mathematics in JavaScript

// Topic 1: Number Formatting and Precision
console.log("Topic-1");

const one = 10000000000; // A large number
const two = 123.28; // A decimal number

// Formatting the number with commas for better readability (Indian format)
console.log(one.toLocaleString("en-IN")); // Output: '1,00,00,00,000'
// Additional example: Formatting in US format
console.log(one.toLocaleString("en-US")); // Output: '10,000,000,000'

// Limiting the number of decimal places to 3
console.log(one.toFixed(3)); // Output: '10000000000.000'

// Displaying the number with a total of 4 significant digits
console.log(two.toPrecision(4)); // Output: '123.3'

// Displaying the number with a total of 3 significant digits
console.log(two.toPrecision(3)); // Output: '123'

// **Important Point**: `toLocaleString` can be used to format numbers in various local formats. In this case, "en-IN" is for the Indian format (lakhs and crores). You can change the locale for different formats.
// Additional example: Formatting a currency value
const amount = 123456.78;
console.log(amount.toLocaleString("en-IN", { style: "currency", currency: "INR" })); // Output: '₹1,23,456.78'

console.log(); // Empty line for better readability

// Topic 2: Math Object and Random Numbers
console.log("Topic-2");

// Accessing the value of π (pi)
console.log(Math.PI); // Output: 3.141592653589793

// Getting the absolute value of a number
console.log(Math.abs(-54)); // Output: 54

// Rounding a number to the nearest integer
console.log(Math.round(5.3)); // Output: 5

// Rounding a number up to the nearest integer
console.log(Math.ceil(4.6)); // Output: 5

// Rounding a number down to the nearest integer
console.log(Math.floor(4.6)); // Output: 4

// Finding the maximum value from a list of numbers
console.log(Math.max(4, 3, 2, 3)); // Output: 4
// Finding the minimum value from a list of numbers
console.log(Math.min(4, 3, 2, 3)); // Output: 2

// Generating a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); // Output: Random number between 0 and 1

// Generating a random integer between a specified range (min and max)
const min = 10; // Minimum value
const max = 20; // Maximum value
// Formula to generate random integer between min and max
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Output: Random integer between 10 and 20

// Additional examples for random number generation:
const randomFloat = Math.random() * (max - min) + min; // Random float between min and max
console.log(randomFloat); // Output: Random float between 10 and 20

// Generating a random even number between 10 and 20
const randomEven = Math.floor(Math.random() * ((max - min) / 2 + 1)) * 2 + min;
console.log(randomEven); // Output: Random even number between 10 and 20

// **Important Point**: `Math.random()` generates a pseudorandom floating-point number. It is not suitable for cryptographic purposes, but it works fine for general use cases like games or simulations. 
// Also, note that when generating random integers, the formula `(Math.floor(Math.random() * (max - min + 1)) + min)` ensures the inclusion of both the `min` and `max` values.

console.log(); // Empty line for better readability

// Additional Notes
/*
1. Use `toLocaleString` for formatting numbers based on different locales. This is particularly useful for displaying numbers in user-friendly formats, such as currency or large numbers with commas.
2. `toFixed` is useful for controlling the number of decimal places in a number, especially when displaying prices or measurements.
3. `Math` is a built-in object in JavaScript that provides various mathematical constants and functions. It’s essential for any number manipulation in JS.
4. `Math.random()` generates a pseudorandom floating-point number; use it carefully for applications that require true randomness (e.g., security or cryptography).
5. Always remember to adjust the formula for generating random numbers to ensure inclusivity of the minimum and maximum values. This is important when you need to guarantee that the boundary values are included in the range.
6. **Rounding Methods Recap**:
   - `Math.round()`: Rounds to the nearest integer.
   - `Math.ceil()`: Rounds up to the nearest integer.
   - `Math.floor()`: Rounds down to the nearest integer.
7. **Random Number Applications**: Random numbers are widely used in simulations, games, and testing scenarios. Ensure proper range adjustments as needed.
*/
