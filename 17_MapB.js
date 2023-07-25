const myNums = [1,2,3,4,5,6,7,8,9,10];
//Example - 1
// const newNums = myNums.map((num)=>{
//     return num+10;

// })


//Example - 2
const newNums = myNums.map((num)=>num+10).map((num)=> num-2).filter((num)=> num>15)
//filter ko condition jaise jagah use karte hai 
//Map ko calculation ya kuch assign kara h udhar

console.log(newNums);
