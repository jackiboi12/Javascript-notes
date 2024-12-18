// -----------------Arrays---------------
//Arrays are resizable & can contain mix of datatypes
// JS arrays can dynamically resize, unlike arrays in other languages like C/C++.
// They can hold values of different types (e.g., number, string, objects).

//Shallow Copy -> same reference Point (Value gets changed), similar to heap
// Shallow copy means two variables point to the same memory reference.
//   Example: Changing the array in one variable affects the other.


//Deep copy -> do not share same reference point, similar to stack
// Deep copy creates a new memory reference, so changes to one array don’t affect the other.

//JS Array-copy-operation creates Shallow Copies
// Methods like `slice()` and `spread operator ([...arr])` create shallow copies.


//Two ways to init an Array
//Method-1
const myArr1 = new Array(10, 9, 8, 7); 
console.log(myArr1[3]); //Output: 7 -> Index starts from 0

//Method-2
const myArr2 = [4, 5, 6, 7];
console.log(myArr2[2]); //Output: 6

//Array Method
console.log("Topic-1");
myArr1.push(6); // add element to the end
console.log(myArr1); // [10, 9, 8, 7, 6]

myArr1.pop(); // removes last element
console.log(myArr1); // [10, 9, 8, 7]

// Push and Pop are efficient because they operate on the end of the array.

//--------------------

//Important Note:
//Shift and Unshift are expensive for large arrays as they change the index of every element.
console.log();
console.log("Topic-2");

myArr1.unshift(11); // add element at the beginning
// Be careful with unshift: All elements shift to the right (index +1).
console.log(myArr1); // [11, 10, 9, 8, 7]

console.log(myArr1.shift()); // removes the first element from an array and returns it
console.log(myArr1); // [10, 9, 8, 7]

// Use `push`/`pop` for better performance instead of `unshift`/`shift`.

//--------------------

console.log();
console.log("Topic-3");

console.log(myArr1.includes(7)); // return True/False -> true
console.log(myArr1.indexOf(8)); // return -1 if element does not exist, else return index

//Important:
//`includes` is good for checking presence but does not return the index.
//`indexOf` is useful when you need the position of the element.

console.log();
console.log("Topic-4");

//To convert array into String
const strArray = myArr1.join(); // Converts the array to a string with default separator ","
console.log(strArray); // "10,9,8,7"
console.log(typeof strArray); // "string"

// You can pass a custom separator: `join("-")` → "10-9-8-7"

//--------------------

console.log();
console.log("Topic-5");
console.log("Slice and Splice");

// Difference Between Slice and Splice:
const array6 = new Array(1, 2, 3, 4, 5);
console.log("A", array6);

//Slice -> does not manipulate the original array
const slice_array = array6.slice(1, 3); // Extracts elements from index 1 to 2 (end index not included)
console.log(slice_array); // [2, 3]
console.log("B", array6); // Value remains the same: [1, 2, 3, 4, 5]

//Splice -> manipulates the original array (removes or replaces elements)
const splice_array = array6.splice(1, 3); // Removes 3 elements starting from index 1
console.log(splice_array); // [2, 3, 4]
console.log("C", array6); // Remaining array: [1, 5]

// Use `slice` when you don't want to modify the original array.
// Use `splice` for deleting/replacing elements and modifying the original array.
