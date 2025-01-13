// Topic-1: While and Do-While Loops
console.log(`\n Topic-1`);

// Example 1: While Loop with Increment
console.log(`\n Example-1`);
let i = 2;
while (i <= 10) {
  console.log(`Value of index is ${i}`); // Logs the current value of i
  i = i + 2; // Increments i by 2 after each iteration
}

// Example 2: While Loop with Array Iteration
console.log(`\n Example-2`);
let MYarray = ["Flash", "Batman", "Goku"];
let arr = 0;
while (arr < MYarray.length) {
  console.log(`Value is ${MYarray[arr]}`); // Logs the current element in the array
  arr = arr + 1; // Increments arr to move to the next array element
}

// Example 3: Do-While Loop (guarantees at least one execution)
console.log(`\n Example-3`);
let score = 11;
do {
  console.log(`Score is ${score}`); // Logs the current score
  score++; // Increments score by 1 after each iteration
} while (score <= 10); // The loop will not execute again because score is already 11
