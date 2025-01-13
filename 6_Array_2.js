//Topic-1
console.log("Topic-1");

//Joining 2 or more arrays
const hero1 = new Array("Batman", "Superman");
const hero2 = new Array("spiderman", "Beetle");

// //By push method -> Wrong way
// hero1.push(hero2);
// // This method adds the entire hero2 array as a single element to hero1.
// // Example Output: ["Batman", "Superman", ["spiderman", "Beetle"]]

// //By concat method -> Better but use spread operator for 2 or more arrays
// // concat returns a new array by merging arrays.
// const all_hero = hero1.concat(hero2);
// console.log(all_hero);

// Spread Operator -> ...xyz
// The spread operator is the most efficient and readable way to merge arrays.
const all_hero = [...hero1, ...hero2];
console.log(all_hero); // Output: ["Batman", "Superman", "spiderman", "Beetle"]

//Topic-2
// Multiple arrays can be combined into a single array format using 'flat'
console.log();
console.log("Topic-2");

const ano_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [3, 4]]];
// The 'flat' method is used to flatten nested arrays into a single array.
// By default, it flattens one level. To flatten deeply nested arrays, pass Infinity.
const real_ano_arr = ano_arr.flat(Infinity);
console.log(real_ano_arr); // Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 3, 4]

//Topic-3
console.log();
console.log("Topic-3");

// Array.isArray checks if the value is an array or not
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("HELLO WORLD")); // false

// Array.from converts an iterable object into an array
console.log(Array.from("ADITYA"));
// Output: ["A", "D", "I", "T", "Y", "A"]
// It converts the string "ADITYA" into an array where each character becomes an element in the array.

console.log(Array.from({ name: "Aditya" }));
// Output: []
// An object is not iterable, so it returns an empty array.
// If the object has a Symbol.iterator property, it can be iterated over.

let score1 = 100;
let score2 = 1000;
let score3 = "aditya";

// Array.of creates a new array from the provided elements
console.log(Array.of(score1, score2, score3));
// Output: [100, 1000, "aditya"]
// Unlike the Array() constructor, Array.of ensures the arguments are treated as array elements, even if there's only one element.

// **Key Points for Revision**
// 1. The push method adds an array as a single element, not merging arrays.
// 2. The concat method merges arrays but returns a new array.
// 3. The spread operator is the most efficient way to merge arrays.
// 4. The flat method flattens nested arrays. Use Infinity to flatten deeply nested arrays.
// 5. Array.isArray checks if the value is an array.
// 6. Array.from converts an iterable object (like a string) into an array.
// 7. Array.of creates an array from the given arguments, even if there's only one element.
