const myNums = [1,2,3]
//Example 1
// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)
//-------------or--------
const myTotal = myNums.reduce((acc,curr)=>acc+curr,0)
//idhar 0 -> acc ki first value ko assign karne ke liye use kara hai 
 console.log(myTotal);


 //Example 2
 const shoppingCart = [
    {itemName:"js Course",price:777},
    {itemName:"python Course",price:444},
    {itemName:"mobile Course",price:999}
 ]
 const totalPrice = shoppingCart.reduce((acc,item)=>acc+item.price,0)
 console.log(totalPrice);