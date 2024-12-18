// `this` keyword -> Refers to the current context.
// Use `this` when working within the scope of an object.

//Topic-1: Using `this` inside an object
console.log(`\n Topic-1`);

const user = {
  username: "hitesh",
  price: 999,
  welcomeMessage: function () {
    // `this` refers to the object in which the method is called.
    console.log(`${this.username}, welcome to the website`);
    console.log("this: ", this);
  },
};

// Accessing `this` within an object
user.welcomeMessage(); // Output: hitesh, welcome to the website

// Updating the username property and calling the method again
user.username = "Aditya";
user.welcomeMessage(); // Output: Aditya, welcome to the website

// Notes:
// - Inside an object method, `this` refers to the object itself.
// - If the object property is updated, `this` reflects the updated value during method execution.

//--------------------

//Topic-2: Using `this` inside a regular function
console.log(`\n Topic-2`);

const ok = function () {
  let ok1 = "hello ";
  // console.log(this.ok1); // Error: `this` does not work for local variables in a function.
  // Function scope: `this` is undefined in strict mode.
  console.log(this); // Output: undefined (in strict mode)
};
ok();

// Notes:
// - In regular functions, `this` depends on the context in which the function is called.
// - If not called as a method of an object, `this` is `undefined` in strict mode or refers to the global object in non-strict mode.
// - Avoid relying on `this` in regular functions unless bound to an object explicitly.

//--------------------

//Topic-3: Using `this` in arrow functions
console.log(`\n Topic-3`);

const okji = () => {
  let ok1 = "hello ";
  // console.log(this.username); // Output: undefined
  console.log(this); // Output: `this` from the outer lexical context
};
okji();

// Notes:
// - Arrow functions do not have their own `this`. They inherit `this` from their enclosing lexical scope.
// - If `this` is not defined in the outer scope, it will remain `undefined`.

//--------------------

//Topic-4: Different ways to write arrow functions
console.log(`\n Topic-4`);

// Full function syntax
const addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo(4, 3)); // Output: 7

// Shortened syntax (implicit return)
const addTwoShort = (num1, num2) => num1 + num2;
console.log(addTwoShort(4, 3)); // Output: 7

// Parentheses for clarity (optional)
const addTwoWithParentheses = (num1, num2) => (num1 + num2);
console.log(addTwoWithParentheses(4, 3)); // Output: 7

// Returning an object (wrap the object in parentheses)
const addTwoReturnObject = (num1, num2) => ({
  username: "Aditya",
  age: 88,
});
console.log(addTwoReturnObject(4, 3)); // Output: { username: 'Aditya', age: 88 }

// Notes:
// - Arrow functions are concise and great for one-liners.
// - Use parentheses when returning objects to avoid syntax errors.
// - Avoid using `this` in arrow functions when you need dynamic context, as it is lexically bound.
