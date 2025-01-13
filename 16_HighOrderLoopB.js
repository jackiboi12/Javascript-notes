// For-in Loop (used for objects)
// Topic-1
console.log(`\n Topic-1`);

// Example 1: Using for-in to iterate over object keys
const myObject2 = {
  game1: "NFS",
  game2: "GTA",
  game3: "Surfers",
};
for (const key in myObject2) {
  console.log(key);   // Logs the key (property name)
  console.log(myObject2[key]);    // Logs the value associated with the key
}

// Example 2: Using for-in to iterate over array indices
const prgmLang = ["js", "ruby", "Python"];
for (const key in prgmLang) {
  console.log(key); // Logs the index of the array
  console.log(prgmLang[key]); // Logs the value at that index
}

// Example 3: Maps and for-in Loops
// Maps are not iterable with for-in. It only works for objects and arrays.
// You cannot use for-in to iterate over Map objects directly.

// For Each Loop
// Topic-2
console.log(`\n Topic-2`);

const coding = ["js", "python", "cpp", "java"];

// Example 4A: Using forEach with an anonymous function
coding.forEach(function (val) {
  console.log(val); // Logs each value in the array
});

// Example 4B: Using forEach with an arrow function
coding.forEach((item) => {
  console.log(item); // Logs each value in the array
});

// Example 4C: Using forEach with a named function
function printMe(item) {
  console.log(item); // Logs each value in the array
}
coding.forEach(printMe);

// Example 5: Using forEach with additional parameters (index and array)
coding.forEach((item, index, arr) => {
  console.log(item, index, arr); // Logs the value, index, and the entire array
});

// Example 6: Iterating through an array of objects with forEach
const myCoding = [
  {
    langName: "javascript",
    langFile: ".js",
  },
  {
    langName: "C++",
    langFile: ".c++",
  },
  {
    langName: "Python",
    langFile: ".py",
  },
];

myCoding.forEach((item) => {
  console.log(item.langFile); // Logs the file extension
  console.log(item.langName); // Logs the language name
});

// Note: For Each does not return a value, it simply executes the callback function on each element.
