// Strict Mode
"use strict"; // Enforces stricter parsing and error handling in JS, catching common mistakes.

// Alert Function (Browser only)
// alert("hello"); // Commented out because `alert` is not available in Node.js.

// Topic 1: Variable Declaration and Data Types
console.log("Topic-1");

// Declaring variables
let age = 19; // Number type
let names = "Aditya"; // String type
let nullValue = null; // Null type (special object type)
let accountState; // Undefined (not assigned any value)

// Checking data types
console.log(typeof names); // Output -> string
console.log(typeof null); // Output -> object (quirk in JS)
console.log(typeof nullValue); // Output -> object (same as null)
console.log(typeof undefined); // Output -> undefined

// Displaying variables in a table format
console.table([age, names, nullValue, accountState]);

// **Avoid using `var` for variable declarations** because it lacks block scope and may cause unintended behavior.

// Data Types in JavaScript
// 1. **Primitive Types:** String, Number, BigInt, null, undefined, Boolean, Symbol
// 2. **Non-Primitive Types (Reference Types):** Arrays, Objects, Functions

/*
**Key Notes:**
1. Stack stores Primitive Values (fixed memory size).
2. Heap stores Non-Primitive Values (dynamic memory size).
3. Primitive data types are immutable (cannot be changed after creation).
4. Reference data types are mutable (can be modified).
*/

/*
**Important:**
- Reference values are accessed by reference (pointer to memory location).
- Copying a reference value assigns the same memory address to the new variable.
- Any change in one reference affects the other because they point to the same object.
*/

console.log(); // Empty line for better readability

// Topic 2: Reference and Value Assignment
console.log("Topic-2");

// Example of Primitive Value Assignment
let username = "AdityaJ"; // Primitive type
let secondUsername = username; // Value is copied (stack memory)
secondUsername = "Anant"; // Changes only `secondUsername`
console.table([username, secondUsername]); // Original value remains unchanged

// Example of Reference Value Assignment
let obj = {
  name: "AdityaJakhmola",
  car: "Honda",
};

let obj2 = obj; // Both `obj` and `obj2` point to the same object in heap memory
obj2.car = "Maruti"; // Changes reflect in both variables
console.table([obj.car, obj2.car]); // Both display "Maruti"

/*
**Why does this happen?**
- Reference types store the address of the object in memory (heap).
- Assigning one reference to another variable does not copy the object; it copies the address.
- Changes to the object via one reference are visible through all references pointing to it.
*/
