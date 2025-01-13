// An IIFE (Immediately Invoked Function Expression)
// IIFE helps by keeping variables and functions within their own scope, preventing global pollution
(function addTwo() {
  console.log("Connected"); // Logs "Connected" immediately when the function is invoked
})();

// Arrow function IIFE
((name) => {
  console.log(`Db connected, thanks ${name}`); // Logs a personalized message with the name
})("Aditya"); // Immediately invoked with the argument "Aditya"

// ---------------Note---------------
// Control Flow
// Global Execution Context (allocated all to 'this')
// Function Execution Context
// Eval Execution Context

// JS runs in two phases:
// 1. Memory Creation Phase (1st cycle)
//   - All variables are set to undefined
//   - Functions are set to their definitions

// 2. Execution Phase (2nd cycle)
//   - Variables are assigned their values
//   - A new execution context is created for each function call, with a new variable environment and execution thread
//   - This process repeats for each function call, creating a new execution context for each function
//   - After the function execution, the execution context is deleted automatically

// Example: Let's look at a simple function call to demonstrate execution context
function exampleFunction() {
  let x = 10; // x is set in the memory creation phase
  console.log(x); // Logs the value of x in the execution phase
}

exampleFunction(); // This triggers the function execution, creating a new execution context

// Another example with nested function calls
function outerFunction() {
  let outerVar = "Outer";
  function innerFunction() {
    let innerVar = "Inner";
    console.log(outerVar, innerVar); // Accesses both outer and inner variables
  }
  innerFunction(); // Calls the inner function, creating a new execution context for it
}

outerFunction(); // Triggers outer function execution, leading to nested execution contexts

// **Key Points for Revision**
// - IIFE is useful for keeping code isolated in its own scope.
// - Execution contexts are created in both the memory creation and execution phases.
// - Each function call creates a new execution context that is deleted after execution.
