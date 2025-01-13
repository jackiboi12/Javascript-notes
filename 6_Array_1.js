// ----------------- Arrays in JavaScript ---------------

// Arrays are resizable and can contain mixed data types.
// Unlike static arrays in C/C++, JS arrays dynamically resize and can hold different types (e.g., numbers, strings, objects).

// **Shallow Copy**: Points to the same reference (changes affect all references).
// **Deep Copy**: Creates a new reference (changes don't affect the original).

// **JS Array Copy Operations**:
// - Methods like `slice()` and the spread operator `[...arr]` create shallow copies.

// --------------------
// **Array Initialization**
const myArr1 = new Array(10, 9, 8, 7); // Using the Array constructor
console.log(myArr1[3]); // Output: 7 (Index starts from 0)

const myArr2 = [4, 5, 6, 7]; // Using array literal
console.log(myArr2[2]); // Output: 6

// --------------------
// **Array Methods: Push and Pop**
console.log("Topic-1");

myArr1.push(6); // Adds an element to the end
console.log(myArr1); // [10, 9, 8, 7, 6]

myArr1.pop(); // Removes the last element
console.log(myArr1); // [10, 9, 8, 7]

// **Note**: Push and Pop are efficient as they operate at the array's end.

// --------------------
// **Shift and Unshift**
console.log();
console.log("Topic-2");

myArr1.unshift(11); // Adds an element at the beginning
console.log(myArr1); // [11, 10, 9, 8, 7]

console.log(myArr1.shift()); // Removes the first element and returns it
console.log(myArr1); // [10, 9, 8, 7]

// **Note**: `unshift` and `shift` are slower for large arrays as they reindex all elements.

// --------------------
// **Search Methods: Includes and IndexOf**
console.log();
console.log("Topic-3");

console.log(myArr1.includes(7)); // Checks presence (True/False) → true
console.log(myArr1.indexOf(8)); // Returns index or -1 if not found → 2

// **Tip**: Use `includes` for presence checks and `indexOf` for position retrieval.

// --------------------
// **Convert Array to String**
console.log();
console.log("Topic-4");

const strArray = myArr1.join(); // Converts to string (default separator: ",")
console.log(strArray); // "10,9,8,7"
console.log(typeof strArray); // "string"

// Use a custom separator: `join("-")` → "10-9-8-7"

// --------------------
// **Slice and Splice**
console.log();
console.log("Topic-5");
console.log("Slice and Splice");

const array6 = [1, 2, 3, 4, 5];
console.log("Original Array:", array6);

// **Slice**: Non-destructive (does not modify the original array)
const slice_array = array6.slice(1, 3); // Extracts index 1 to 2 (end index excluded)
console.log("Slice Result:", slice_array); // [2, 3]
console.log("After Slice:", array6); // [1, 2, 3, 4, 5]

// **Splice**: Destructive (modifies the original array)
const splice_array = array6.splice(1, 3); // Removes 3 elements starting at index 1
console.log("Splice Result:", splice_array); // [2, 3, 4]
console.log("After Splice:", array6); // [1, 5]

// --------------------
// **Key Points for Revision**
/*
1. Use `push`/`pop` for efficient operations at the array's end.
2. Avoid `shift`/`unshift` for large arrays due to reindexing overhead.
3. Use `slice` for non-destructive operations and `splice` for modifying the array.
4. `includes` checks presence; `indexOf` retrieves the index.
5. `join` is useful for converting arrays to strings with custom separators.
*/
