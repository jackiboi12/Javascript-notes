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
// Object.assign creates a shallow copy of the source objects and merges them into the target object.
// It does not handle deep merging, meaning nested objects are not merged recursively.
const obj4 = Object.assign({}, obj1, obj2, obj3);
console.log(obj4); // Output: { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f' }

// Merging objects using spread operator (modern and preferred way)
// The spread operator is a cleaner and more readable way to merge objects.
// It also creates a shallow copy, similar to Object.assign().
const obj5 = { ...obj1, ...obj2, ...obj3 };
console.log(obj5); // Output: { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f' }

// Notes:
// - The spread operator is the preferred method because it is more concise and readable.
// - Both methods only perform a shallow merge, so if there are nested objects, they are not merged deeply.
// - In cases where deep merging is required, you may need to use a utility function or a library like Lodash's `_.merge()`.

// Example of shallow merge issue (nested objects)
const obj6 = {
  name: "John",
  address: { city: "New York", zip: "10001" },
};
const obj7 = {
  name: "Jane",
  address: { city: "Los Angeles", zip: "90001" },
};

const mergedObj = { ...obj6, ...obj7 };
console.log(mergedObj);
// Output: { name: 'Jane', address: { city: 'Los Angeles', zip: '90001' } }
// The `address` from `obj7` overwrites the `address` from `obj6`, causing shallow merging.


//--------------------

//Topic-2
//Some useful methods for objects
console.log(`\nTopic-2`);

// Object.keys(): Returns an array of keys in the object
console.log(Object.keys(obj1)); // Output: ['1', '2']
// Object.keys() is useful when you need to iterate over the keys of an object or check what keys are available.


// Object.values(): Returns an array of values in the object
console.log(Object.values(obj1)); // Output: ['a', 'b']
// Object.values() is useful when you need to work with the values of an object, for example, to perform operations on them.


// Object.entries(): Returns an array of key-value pairs as subarrays
console.log(Object.entries(obj1)); // Output: [['1', 'a'], ['2', 'b']]
// Object.entries() is useful when you need both the key and the value for iteration, or when you need to convert an object into a different format (like a Map).


// hasOwnProperty(): Checks if the object has the specified key (own property)
console.log(obj1.hasOwnProperty("1")); // Output: true
console.log(obj1.hasOwnProperty("3")); // Output: false
// hasOwnProperty() checks whether a property exists directly on the object, not inherited through the prototype chain.
// It's important for ensuring you're checking the object itself and not its prototype.


// Notes:
// - `Object.keys`, `Object.values`, and `Object.entries` are useful for iterating over objects.
// - `hasOwnProperty` checks if a key is directly on the object, not inherited from the prototype chain.
// - `Object.entries` is particularly useful when you need to work with both keys and values in a loop or map.


//--------------------

//Topic-3
//Object destructuring
console.log(`\nTopic-3`);

const course = {
  coursename: "JS in Hindi",
  price: 999,
  courseInstructor: "Aditya",
  duration: "3 months",
  level: "Beginner",
};

// Destructuring properties from the object
// Using alias (short notation) to rename properties while destructuring
const { courseInstructor: inst, coursename: c_name, price } = course; // 'inst' is an alias for 'courseInstructor'
// You can also destructure multiple properties at once and rename them using aliases.
const { level: courseLevel } = course;

// Accessing the destructured properties
console.log(inst); // Output: Aditya
console.log(c_name); // Output: JS in Hindi
console.log(price); // Output: 999
console.log(courseLevel); // Output: Beginner

// Destructuring with default values
// You can also assign default values to variables in case the property doesn't exist in the object.
const { duration = "N/A" } = course; // If `duration` is undefined, it will default to "N/A"
console.log(duration); // Output: 3 months

// Example of nested destructuring
const user = {
  name: "Alice",
  address: {
    city: "New York",
    zip: "10001",
  },
};

// Destructuring nested objects
const {
  address: { city, zip },
} = user;
console.log(city); // Output: New York
console.log(zip); // Output: 10001

// Notes:
// - Destructuring allows you to extract specific properties from objects and assign them to variables.
// - Using aliases (like `inst` and `c_name`) is helpful when you want more concise or meaningful variable names.
// - You can provide default values for destructured variables in case the property is missing from the object.
// - Nested destructuring allows you to extract properties from nested objects in a clean and readable way.


// **Key Points for Revision**
// 1. The spread operator (`...`) is used to merge objects, but it performs a shallow merge. Nested objects are not deeply merged.
// 2. `Object.assign()` is an older method for merging objects, but it is less readable than the spread operator.
// 3. `Object.keys()`, `Object.values()`, and `Object.entries()` are useful for iterating over an object's keys, values, or entries, respectively.
// 4. `hasOwnProperty()` is used to check if a property exists directly on the object and not on its prototype.
// 5. Object destructuring allows you to extract properties from an object and optionally rename them using aliases. You can also set default values and handle nested objects.
