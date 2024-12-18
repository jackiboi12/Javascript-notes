// String Manipulation in JavaScript

// Topic 1: String Interpolation
console.log("Topic-1");

const age = 20;
const name = new String("Aditya"); // Creating a String object
console.log(`My name is ${name} and my age is ${age}`); // Template literal for string interpolation

const name2 = new String("Shubham"); // Another String object
const age1 = new Number(20); // Creating a Number object
console.log(`My name is ${name2} and my age is ${age1}`); // Using template literals

console.log(); // Empty line for better readability

// Topic 2: String Properties and Methods
console.log("Topic-2");

const gameName = new String("Jackiboi"); // String object with value "Jackiboi"
console.log(gameName); // Displays the String object
console.log(gameName[1]); // Accessing character at index 1 ('a')
console.log(gameName.toUpperCase()); // Converts to uppercase (original value not changed)

console.log(gameName.charAt(6)); // Output: 'b' (character at index 6)
console.log(gameName.indexOf("k")); // Output: 3 (index of the first occurrence of 'k')

const newString = gameName.substring(0, 4); // Extracts characters from index 0 to 3
console.log(newString); // Output: 'Jack'

const anoString = gameName.slice(0, -1); // Removes the last character
console.log(anoString); // Output: 'Jackibo'

console.log(); // Empty line for better readability

// Topic 3: String Trimming and URL Manipulation
console.log("Topic-3");

const name1 = "   adi  "; // String with leading and trailing spaces
console.log(name1.trim()); // Removes all spaces, Output: 'adi'

const url = "https://aditya.com/aditya%20jakhmola"; // URL with encoded space
console.log(url.replace("%20", "-")); // Replaces '%20' with '-', Output: 'https://aditya.com/aditya-jakhmola'
console.log(url.includes("aditya")); // Checks if 'aditya' is in the URL, Output: true
console.log(url.split("a")); // Splits string by 'a', returns array of substrings

console.log(); // Empty line for better readability

// Topic 4: Substring and Slice Methods
console.log("Topic-4");

const s = "The morning is upon us."; // Example string
console.log(s.length); // Output: 25

console.log("Slice:");
console.log(s.slice(12)); // Output: "is upon us." (substring from index 12 to end)
console.log(s.slice(-11)); // Output: "is upon us." (negative index starts from the end)
console.log(s.slice(13, 16)); // Output: "s u" (from index 13 to 15)
console.log(s.slice(-8, -4)); // Output: "upon" (from -8 to -5)
console.log(s.slice(8, -4)); // Output: "ing is upon"

console.log("\nSubstring:");
console.log(s.substring(12)); // Output: "is upon us." (same as slice)
console.log(s.substring(13, 16)); // Output: "s u" (from index 13 to 15)
console.log(s.substring(16, 13)); // Output: "s u" (swaps if indexStart > indexEnd)
console.log(s.substring(-8, 4)); // Output: "The " (negative values treated as 0)

console.log(); // Empty line for better readability

// Additional Notes and Tips
/*
1. **String Interpolation:** Use template literals (``) for easier string interpolation.
2. **Immutable Strings:** String methods (e.g., `toUpperCase`, `slice`) do not modify the original string but return a new one.
3. **String Objects vs Primitives:** Avoid creating `String` objects unless necessary; primitive strings are simpler and faster.
4. **Whitespace Handling:** Use `trim()` to clean up strings with unwanted spaces (useful for user input).
5. **String Extraction:** 
   - `slice(start, end)`: Works with negative values; extracts up to but not including `end`.
   - `substring(start, end)`: Does not support negative values; swaps indices if `start > end`.
6. **URL Handling:** 
   - Use `replace()` to clean or modify URL components.
   - Use `includes()` to check for substrings in URLs or strings.
7. **Performance Tip:** For frequent string manipulations, consider using `join()` on arrays for better performance.
*/
