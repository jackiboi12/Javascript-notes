//Topic-1
console.log(`\n Topic-1`);
const myNums = [1,2,3,4,5,6,7,8,9,10];
//Example 1 (filter vs forEach)
//Filter can return but not in case of forEach

// const newNums = myNums.filter((num)=>{
//     return num>4
// })
// console.log(newNums);


// const newNums = []
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }

// })
// console.log(newNums);


//Example 2
const books = [
    {title:"Book One",genre:"Fiction",edition:1992},
    {title:"Book two",genre:"Non-Fiction",edition:1983},
    {title:"Book three",genre:"History",edition:2004},
    {title:"Book Four",genre:"Science",edition:2002},
    {title:"Book five",genre:"Fiction",edition:1999}   
]
// const userBooks = books.filter((bk)=>{
//     return bk.genre ==="Fiction"
// })
// const userBooks = books.filter((bk)=>{
//     return bk.edition>2000 && bk.genre==="Science"
// })

console.log(userBooks);