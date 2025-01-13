//Scope -> {}
// Scope defines where variables can be accessed or modified.

//Topic-1
// Scope issue with `var`
console.log(`\nTopic-1`);
if (true) {
  var a = 10; // `var` is function-scoped or global-scoped, not block-scoped
}
console.log(a); // Output: 10

// Notes:
// - Variables declared with `var` are accessible outside the block in which they are defined, making `var` function-scoped or global-scoped.
// - This can lead to unintended behavior, such as variables being accessible in places where they shouldn't be.
// - It is recommended to use `let` or `const` instead of `var` because they are block-scoped, making the code more predictable and less error-prone.
// - `let` and `const` are confined to the block `{}` in which they are declared, providing better scoping control.

// Example of using `let` for block scoping
if (true) {
  let b = 20;
  console.log(b); // Output: 20
}
// console.log(b); // Error: b is not defined (outside the block scope)

//--------------------

//Topic-2
// Block scope with `const`
console.log(`\nTopic-2`);

const b = 20; // Global scope
if (true) {
  const b = 11; // Block scope
  console.log("INNER", b); // Output: INNER 11
}
console.log(b); // Output: 20

// Notes:
// - Variables declared with `const` and `let` inside a block `{}` are not accessible outside the block, ensuring better scoping.
// - `const` is used for variables whose value should not change (immutable binding), but it is still block-scoped.
// - Even with `const`, you can declare the same variable name in different scopes because of block scoping.
// - This behavior helps prevent accidental overwriting of variables in different scopes.

// Example of reusing variable names in different blocks
if (true) {
  const b = 30; // Block scope
  console.log("Block 1", b); // Output: Block 1 30
}
if (true) {
  const b = 40; // Different block scope
  console.log("Block 2", b); // Output: Block 2 40
}

//--------------------

//Topic-3
// Nested block scopes
console.log(`\nTopic-3`);

if (true) {
  const username = "Aditya"; // Block scope
  if (username === "Aditya") {
    const website = " yt "; // Nested block scope
    console.log(username + website); // Output: Aditya yt
  }
  // console.log(website); // Error: website is not defined (outside its block scope)
}
// console.log(username); // Error: username is not defined (outside its block scope)

// Notes:
// - Nested blocks create nested scopes, meaning variables declared in an inner block cannot be accessed from an outer block.
// - This helps avoid variable name collisions and ensures data encapsulation within blocks, making the code more modular and secure.
// - Variables declared in an inner scope are "isolated" from the outer scope, preventing accidental overwriting or access to unintended values.

// Example of nested block scoping
if (true) {
  const outerVar = "Outer";
  if (true) {
    const innerVar = "Inner";
    console.log(outerVar + " " + innerVar); // Output: Outer Inner
  }
  // console.log(innerVar); // Error: innerVar is not defined (outside its block scope)
}

//--------------------

//Topic-4
// Two ways to create a function
console.log(`\nTopic-4`);

// Function declaration
function addOne(num) {
  return num + 1;
}

// Function expression
const addTwo = function (num) {
  return num + 2;
};

console.log(addOne(5)); // Output: 6
console.log(addTwo(6)); // Output: 8

// Notes:
// - Function declarations are hoisted, meaning they can be used before they are defined in the code. This allows for more flexibility in code structure.
// - Function expressions are not hoisted, so they must be defined before use. This provides more controlled scoping, as the function is only available after its definition.
// - Use function declarations for globally accessible functions and function expressions for more controlled scoping and to avoid accidental usage before definition.

// Example of hoisting with function declaration
console.log(addOne(10)); // Output: 11 (works even before the function is defined)

// Example of function expression (not hoisted)
try {
  console.log(addTwo(10)); // Error: addTwo is not a function
} catch (error) {
  console.log(error.message); // Output: addTwo is not a function
}

// **Key Points for Revision**
// 1. **`var` Scope**: Variables declared with `var` are function-scoped or global-scoped, not block-scoped, which can cause unintended behavior. Use `let` or `const` for block scoping.
// 2. **`const` and `let` Block Scope**: Variables declared with `const` and `let` are confined to the block `{}` in which they are declared, ensuring better scoping and preventing accidental overwriting.
// 3. **Nested Scopes**: Nested blocks create nested scopes, and variables declared in inner blocks cannot be accessed from outer blocks, helping avoid collisions and ensuring encapsulation.
// 4. **Function Declarations vs. Function Expressions**: Function declarations are hoisted and can be used before their definition, while function expressions are not hoisted and must be defined before use. Use function declarations for globally accessible functions and expressions for controlled scoping.
