// Array-specific Loop
// Array inside object -> [{}, {}, {}]

// For-of Loop
// Topic-1
console.log(`\n Topic-1`);

// Example 1: Looping through an array
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    console.log(num); // Logs each element of the array
}

// Example 2: Looping through a string (treats string as an array of characters)
const greetings = "Hello World!";
for (const greet of greetings) {
    console.log(`Each char is ${greet}`); // Logs each character in the string
}

// Topic-2: Maps - A Map object holds key-value pairs and remembers the original insertion order of the keys
console.log(`\n Topic-2`);

// Example 3: Using a Map object
const map = new Map();
map.set("IN", "INDIA");
map.set("CU", "CANADA");
map.set("PAK", "PAKISTAN");

// Logs the map's contents using a for-of loop
for (const [key, value] of map) {
    console.log(key, "->", value); // Logs each key-value pair in the map
}

// Topic-3: Objects - Objects are not iterable by default (cannot be used with for-of)
console.log(`\n Topic-3`);

// Example 4: Attempting to use for-of with an object (this will cause an error)
const myObject = {
  game1: "NFS",
  game2: "NFS1",
};

// The following code will throw an error because objects are not directly iterable like arrays or maps
// for (const [key, value] of myObject) {
//     console.log(key, "->", value);
// }

