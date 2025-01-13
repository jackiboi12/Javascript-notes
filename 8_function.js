//Example 1
console.log(`\nTopic-1`);

// Default parameters in functions
function loginUserMessage(username = "sam") {
  // If no username is passed, the default value "sam" will be used.
  if (username === undefined) {
    // `!username` and `username === undefined` are equivalent in this case.
    console.log("Please enter a username");
  }
  return `${username} just logged in`; // Returns a message with the username
}
console.log(loginUserMessage("Aditya")); // Output: Aditya just logged in
console.log(loginUserMessage()); // Output: sam just logged in

// Notes:
// - Default parameters are useful to provide fallback values if no argument is passed.
// - `undefined` can be checked using `!username` or `username === undefined`.
// - Default parameters are evaluated when the function is called, so the default value is used only if no argument is passed or if the argument is `undefined`.
// - This feature allows functions to be more flexible and reduces the need for additional checks for missing arguments.

// Example with default parameters for multiple arguments
function createUserProfile(name = "Guest", age = 25) {
  return `User: ${name}, Age: ${age}`;
}
console.log(createUserProfile("Alice", 30)); // Output: User: Alice, Age: 30
console.log(createUserProfile()); // Output: User: Guest, Age: 25


//--------------------

//Example 2
console.log(`\nTopic-2`);

// Use of rest operator (same syntax as spread operator)
// The rest operator bundles multiple arguments into a single array.
function calCartPrice(val1, val2, ...num1) {
  // `val1` and `val2` are individual arguments.
  // `...num1` collects the remaining arguments into an array.
  return num1;
}
console.log(calCartPrice(112, 200, 300, 200, 232, 344, 55)); 
// Output: [300, 200, 232, 344, 55]

// Notes:
// - Rest operator is used in function parameters to handle a variable number of arguments.
// - It converts the remaining arguments into an array for easier processing.
// - Example: `val1 = 112`, `val2 = 200`, `num1 = [300, 200, 232, 344, 55]`.
// - The rest operator is useful when you don't know how many arguments will be passed to the function, allowing flexibility in handling them.
// - Unlike the spread operator, which is used to unpack elements, the rest operator is used to collect elements into an array.

// Example of combining rest operator with other parameters
function logScores(playerName, ...scores) {
  console.log(`${playerName}'s scores: ${scores.join(", ")}`);
}
logScores("John", 90, 85, 88, 92); // Output: John's scores: 90, 85, 88, 92


//--------------------

//Example 3
// Object with function
console.log(`\nTopic-3`);

const user = {
  username: "Hitesh",
  price: 99,
};

function handleObj(anyobject) {
  // Accessing object properties within a function
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// Passing an object to the function
handleObj(user); // Output: Username is Hitesh and price is 99

// Directly passing an object literal
handleObj({
  username: "Aditya",
  price: 88,
}); // Output: Username is Aditya and price is 88

// Notes:
// - Objects can be passed to functions for processing.
// - Directly passing object literals is also possible if the structure matches the expected format.
// - When passing an object to a function, the function can access and manipulate the object's properties.
// - Passing object literals directly to functions can be useful for one-time or temporary use cases, avoiding the need to create an explicit variable.

// Example of passing an object with a method
const userWithMethod = {
  username: "Alice",
  greet: function() {
    console.log(`Hello, ${this.username}`);
  },
};

handleObj(userWithMethod); // Output: Username is Alice and price is undefined
userWithMethod.greet(); // Output: Hello, Alice


//--------------------

//Example 4
// Array with function
console.log(`\nTopic-4`);

const arr = [200, 300, 1, 3];

function gtArr(anyarr) {
  // Accessing the second element of the array
  return anyarr[1];
}

console.log(gtArr(arr)); // Output: 300
console.log(gtArr([4, 2, 3, 4])); // Output: 2

// Notes:
// - Arrays can be passed as arguments to functions.
// - The function can manipulate or return specific elements from the array.
// - Arrays are commonly used in functions when you need to process multiple values, like in a list of items or scores.
// - You can access array elements by their index, starting from 0.
// - Passing arrays to functions makes it easy to work with a collection of data in a single parameter.

// Example of iterating over an array within a function
function sumArray(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}
console.log(sumArray([1, 2, 3, 4])); // Output: 10
