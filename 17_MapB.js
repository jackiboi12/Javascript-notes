//Topic-1
console.log(`\n Topic-1`);
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Example - 1
//Map can also return values
// const newNums = myNums.map((num)=>{
//     return num+10;

// })
// console.log(newNums);

//Example - 2
const newNums = myNums
  .map((num) => num * 10)
  .map((num) => num - 2)
  .filter((num) => num > 20);
//chaining ka result he aage proceed hoga
//filter is for condition checking
console.log(newNums);
