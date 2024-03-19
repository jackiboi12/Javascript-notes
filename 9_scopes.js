//scope -> {}
//  //Topic-1
// console.log(`\n Topic-1`);
// if(true){
//     var a = 10;
// }
// console.log(a);  //output->10
//scope se bahar nahi jaani chahiye value
//isliye dont use var

//Topic-2
console.log(`\n Topic-2`);
const b = 20; //global scope
if (true) {
  const b = 11; //block scope
  console.log("INNER ", b);
}
console.log(b);

//Topic-3
console.log(`\n Topic-3`);
if (true) {
  const username = "Aditya";
  if (username === "Aditya") {
    const website = " yt ";
    console.log(username + website);
  }
  // console.log(website);
  //gives error because scope se bahar aagye
}
// console.log(username);
//gives error because scope se bahar aagye

//two ways to create a function
//Topic-4
console.log(`\n Topic-4`);
function addOne(num) {
  return num + 1;
}
const addTwo = function (num) {
  return num + 2;
};
addOne(5);
addTwo(6);
