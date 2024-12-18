// Conversions

// Topic 1: Boolean to Number Conversion
console.log("Topic-1");

let score = true;
console.log(typeof score); // Output: boolean

let valInNum = Number(score); // Convert boolean to number
console.log(typeof valInNum); // Output: number
console.log(valInNum); // Output: 1

// Notes:
// "33" => 33 (string to number conversion)
// "33abc" => NaN (invalid conversion)
// true => 1; false => 0

console.log(); // Empty line for better readability

// Topic 1 (continued): Number to String Conversion
let someNumber = 22;
console.log(typeof someNumber); // Output: number

let string = String(someNumber); // Convert number to string
console.log(typeof string); // Output: string
console.log(string); // Output: "22"

console.log(); // Empty line for better readability

// Topic 2: String Concatenation and Type Coercion
console.log("Topic-2");

console.log("1" + 2 + 2); // Output: "122"
// Explanation: The first value is a string, so subsequent values are coerced into strings.

console.log(1 + 2 + "2" + 2 + 2); // Output: "3222"
// Explanation: Numbers are added first until a string is encountered, after which concatenation happens.

let bye;
console.log(bye); // Output: undefined (variable declared but not initialized)

console.log(); // Empty line for better readability

// Topic 3: Comparison with null
console.log("Topic-3");

// Comparison (>, <, <=, >=) converts null to a number (treated as 0).
console.log(null > 0); // Output: false
console.log(null >= 0); // Output: true (only true case)
console.log(null == 0); // Output: false
// Explanation: Loose equality (==) does not treat null as 0, but numerical comparisons do.

console.log(); // Empty line for better readability

// Topic 4: Comparison with undefined
console.log("Topic-4");

// Comparisons with undefined always evaluate to false.
console.log(undefined >= 0); // Output: false
console.log(undefined == 0); // Output: false
console.log(undefined <= 0); // Output: false

console.log(); // Empty line for better readability

// Strict vs Loose Equality
console.log("=== checks data types also");
console.log("2" === 2); // Output: false (different types)
console.log("2" == 2); // Output: true (loose equality converts types)

console.log(); // Empty line for better readability

// Topic 5: Symbols
console.log("Topic-5");

// Use of Symbol -> Even if the same value is passed, Symbols are unique.
const id1 = Symbol("123");
const id2 = Symbol("123");
console.log(id1 === id2); // Output: false (different unique symbols)

// Additional Notes and Tips
/*
1. Always use strict equality (===) to avoid unexpected type coercion in comparisons.
2. Use the Number() function to convert strings to numbers safely.
3. Be cautious with comparisons involving null and undefined, as they can lead to confusion.
4. Symbols are unique identifiers, useful for creating object properties that avoid naming collisions.
5. Type coercion can lead to unexpected results; always be aware of the types you are working with.
6. Use `typeof` to check variable types before performing operations to ensure compatibility.
*/
