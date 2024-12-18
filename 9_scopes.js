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
// - Variables declared with `var` are accessible outside the block in which they are defined.
// - This can lead to unintended behavior, so it's recommended to use `let` or `const` instead of `var`.
// - `let` and `const` are block-scoped, meaning they are confined to the block `{}` in which they are declared.

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
// - Variables declared with `const` and `let` inside a block `{}` are not accessible outside the block.
// - `const` is used for variables whose value should not change (immutable binding).
// - Even with `const`, you can declare the same variable name in different scopes because of block scoping.

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
// - Nested blocks create nested scopes, and variables declared in an inner block cannot be accessed from an outer block.
// - This helps avoid variable name collisions and ensures data encapsulation within blocks.

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
// - Function declarations are hoisted, meaning they can be used before they are defined in the code.
// - Function expressions are not hoisted, so they must be defined before use.
// - Use function declarations for globally accessible functions and function expressions for more controlled scoping.
