//Topic-1
//Use of spread operator in objects
console.log(`\nTopic-1`);

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "c",
  4: "d",
};
const obj3 = {
  5: "e",
  6: "f",
};

// Merging objects using Object.assign() (older way)
// const obj4 = Object.assign({}, obj1, obj2, obj3);

// Merging objects using spread operator (modern and preferred way)
// Spread operator creates a shallow copy of the objects and merges them.
const obj4 = { ...obj1, ...obj2, ...obj3 };
console.log(obj4); // Output: { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f' }

// Notes:
// - Spread operator is cleaner and more readable compared to Object.assign().
// - Both methods only perform a shallow merge (nested objects are not deeply merged).

//--------------------

//Topic-2
//Some useful methods for objects
console.log(`\nTopic-2`);

// Object.keys(): Returns an array of keys in the object
console.log(Object.keys(obj1)); // Output: ['1', '2']

// Object.values(): Returns an array of values in the object
console.log(Object.values(obj1)); // Output: ['a', 'b']

// Object.entries(): Returns an array of key-value pairs as subarrays
console.log(Object.entries(obj1)); // Output: [['1', 'a'], ['2', 'b']]

// hasOwnProperty(): Checks if the object has the specified key (own property)
console.log(obj1.hasOwnProperty("1")); // Output: true

// Notes:
// - `Object.keys`, `Object.values`, and `Object.entries` are useful for iterating over objects.
// - `hasOwnProperty` checks if a key is directly on the object, not inherited from the prototype chain.

//--------------------

//Topic-3
//Object destructuring
console.log(`\nTopic-3`);

const course = {
  coursename: "JS in Hindi",
  price: 999,
  courseInstructor: "Aditya",
};

// Destructuring properties from the object
// Using alias (short notation) to rename properties while destructuring
const { courseInstructor: inst } = course; // 'inst' is an alias for 'courseInstructor'
const { coursename: c_name } = course;

// Accessing the destructured properties
console.log(inst); // Output: Aditya
console.log(c_name); // Output: JS in Hindi

// Notes:
// - Destructuring allows you to extract specific properties from an object and assign them to variables.
// - Using aliases (like `inst` and `c_name`) is helpful when you want more concise or meaningful variable names.
// - Attempting to access the original property name (e.g., `courseInstructor`) will throw an error because it has been aliased.
