// Topic-1
console.log(`\n Topic-1`);
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Example - 1
// Map can return a new array based on the transformation applied to each element
// The map method creates a new array with the results of calling the provided function on every element in the array
const newNums1 = myNums.map((num) => {
  return num + 10; // Adds 10 to each number
});
console.log(newNums1); // Logs [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// Example - 2
// Chaining map and filter
const newNums2 = myNums
  .map((num) => num * 10) // Multiply each number by 10
  .map((num) => num - 2) // Subtract 2 from each result
  .filter((num) => num > 20); // Filter out numbers less than or equal to 20

console.log(newNums2); // Logs [28, 38, 48, 58, 68, 78, 88, 98, 108]

// Notes:
// - The `map` method creates a new array by transforming each element of the original array.
// - `map` can be chained to perform multiple transformations on the array, as shown in Example 2.
// - `filter` is used to filter out elements based on a condition. It only returns elements that meet the specified condition (in this case, numbers greater than 20).
// - Chaining allows you to perform multiple operations on the array in a single expression, with each operation being applied to the result of the previous one.
