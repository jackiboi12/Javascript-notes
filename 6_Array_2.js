//Topic-1
console.log("Topic-1");
//Joining 2 or more arrays
const hero1 = new Array("Batman", "Superman");
const hero2 = new Array("spiderman", "Beetle");

// //By push method -> Wrong way
// hero1.push(hero2);
// //hero2 ke saare element ko ek he array ka element treat kardeya
// Example Output: ["Batman", "Superman", ["spiderman", "Beetle"]]

// //By concat method -> Better but use spread operator for 2 or more arrays
// //concat returns a new array
// const all_hero = hero1.concat(hero2);
// console.log(all_hero);

//Spread Operator -> ...xyz
// Spread operator is the most efficient and readable way to merge arrays.
const all_hero = [...hero1, ...hero2];
console.log(all_hero); // Output: ["Batman", "Superman", "spiderman", "Beetle"]

//--------------------

//Topic-2
//Multiple Array ko single array format mai karne ke liye use 'flat'
console.log();
console.log("Topic-2");

const ano_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [3, 4]]];
// 'flat' method is used to flatten nested arrays into a single array.
// By default, it flattens one level. To flatten deeply nested arrays, pass Infinity.
const real_ano_arr = ano_arr.flat(Infinity); 
console.log(real_ano_arr); // Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 3, 4]

//--------------------

//Topic-3
console.log();
console.log("Topic-3");

//Array.isArray checks if the value is an array or not
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("HELLO WORLD")); // false

//Array.from converts an iterable object into an array
console.log(Array.from("ADITYA")); 
// Output: ["A", "D", "I", "T", "Y", "A"]
// It converts the string "ADITYA" into an array where each character becomes an element in the array.

console.log(Array.from({ name: "Aditya" })); 
// Output: []
// An object is not iterable, so it returns an empty array.

let score1 = 100;
let score2 = 1000;
let score3 = "aditya";

//Array.of creates a new array from the provided elements
console.log(Array.of(score1, score2, score3)); 
// Output: [100, 1000, "aditya"]
// Unlike Array() constructor, Array.of ensures the arguments are treated as array elements.
