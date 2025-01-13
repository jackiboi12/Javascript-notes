// Topic-1
console.log(`\n Topic-1`);
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Example 1 (filter vs forEach)
// Filter can return a new array, while forEach cannot (it modifies the array but does not return anything)

// Using filter
const newNums = myNums.filter((num) => {
  return num > 4; // Filters out numbers greater than 4
});
console.log(newNums); // Logs [5, 6, 7, 8, 9, 10]

// Using forEach
const newNums2 = [];
myNums.forEach((num) => {
  if (num > 4) {
    newNums2.push(num); // Adds numbers greater than 4 to the newNums2 array
  }
});
console.log(newNums2); // Logs [5, 6, 7, 8, 9, 10]

// Example 2
const books = [
  { title: "Book One", genre: "Fiction", edition: 1992 },
  { title: "Book two", genre: "Non-Fiction", edition: 1983 },
  { title: "Book three", genre: "History", edition: 2004 },
  { title: "Book Four", genre: "Science", edition: 2002 },
  { title: "Book five", genre: "Fiction", edition: 1999 },
];

// Using filter to find books by genre
const userBooks = books.filter((bk) => {
  return bk.genre === "Fiction"; // Filters books with genre "Fiction"
});

// Alternatively, filter books based on multiple conditions (edition > 2000 and genre is Science)
const userBooks2 = books.filter((bk) => {
  return bk.edition > 2000 && bk.genre === "Science";
});

console.log(userBooks); // Logs books with genre "Fiction"
console.log(userBooks2); // Logs books with edition > 2000 and genre "Science"

// Notes:
// - The `filter` method returns a new array with elements that satisfy the condition provided in the callback function.
// - `forEach` does not return anything; it only executes the callback function for each element in the array.
// - `filter` is generally used when you need to create a new array based on a condition, whereas `forEach` is used for side effects (e.g., modifying an array or logging values).
// - `filter` creates a shallow copy of the array, whereas `forEach` operates directly on the array it is called on.
