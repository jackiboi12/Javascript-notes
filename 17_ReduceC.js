// Topic-1
console.log(`\n Topic-1`);
const myNums = [1, 2, 3, 4];

// Example 1
// The reduce method is used to reduce the array to a single value (in this case, the sum of all elements).
// The first argument is a callback function with two parameters: accumulator (acc) and currentValue (curr).
// The second argument (0) is the initial value for the accumulator.
const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);
console.log(myTotal); // Logs 10 (1 + 2 + 3 + 4)

// Example 2
// Reduce can also be used with arrays of objects, like a shopping cart, to accumulate a total value (price in this case).
const shoppingCart = [
  { itemName: "js Course", price: 777 },
  { itemName: "python Course", price: 444 },
  { itemName: "mobile Course", price: 999 },
];

// Accumulate the total price of items in the shopping cart
const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(totalPrice); // Logs 2220 (777 + 444 + 999)

// Notes:
// - `reduce` is used to accumulate or reduce all elements of an array to a single value. 
// - The callback function receives two arguments: the accumulator (acc) and the current value (curr).
// - The accumulator is updated on each iteration and passed to the next iteration.
// - The second argument of `reduce` (0 in this case) is the initial value for the accumulator. If not provided, it will default to the first element of the array.
// - In Example 1, the accumulator starts at 0, and each element of `myNums` is added to it.
// - In Example 2, the accumulator starts at 0, and each `item.price` is added to it, resulting in the total price of the shopping cart.
