//Example 1
console.log(`\n Topic-1`);
function loginUserMessage(username = "sam") {
  if (username === undefined) {
    //!username and username===undefined are same
    console.log("Please enter a username");
  }
  return `${username} just logged in`;
}
console.log(loginUserMessage("Aditya"));

//Example 2
console.log(`\n Topic-2`);
//use of rest operator (same syntax as spread operator )
//jo elements h vo sab khule mai milaha h
//unko ek bundle bana kr bhej do

function calCartPrice(val1, val2, ...num1) {
  return num1;
}
console.log(calCartPrice(112, 200, 300, 200, 232, 344, 55));
//Here , 112=val1, 200=val2 , num1=112,200,300,200,232,344,55
//rest operator will convert values into array format

//Example 3
//object with function
console.log(`\n Topic-3`);
const user = {
  username: "Hitesh",
  price: 99,
};
function handleObj(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}
//handleObj(user)
handleObj({
  username: "Aditya",
  price: 88,
});

//Example 4
//Array with function
console.log(`\n Topic-4`);
const arr = [200, 300, 1, 3];
function gtArr(anyarr) {
  return anyarr[1];
}
//console.log(gtArr(arr));
console.log(gtArr([4, 2, 3, 4]));
