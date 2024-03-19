//Number and Maths
//Topic-1
console.log("Topic-1");
const one = 10000000000;
const two = 123.28;
console.log(one.toLocaleString("en-IN")); //beech m commas daaldega for better understanding
console.log(one.toFixed(3)); //decimal kitne lagenge
console.log(two.toPrecision(4));
console.log(two.toPrecision(3));
//Topic-2
console.log("Topic-2");
console.log(Math.PI);
console.log(Math.abs(-54));
console.log(Math.round(5.3));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.max(4, 3, 2, 3));
console.log(Math.random()); //output is between 0-1
//formula for max min in random
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
