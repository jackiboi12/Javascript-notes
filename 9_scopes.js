//Example 1
//scope -> {}
// if(true){
//     var a = 10;
// }
// console.log(a); 
//scope se bahar nahi jaani cahhiye value 
//isliye dont use var 


//Example 2
const b = 20;   //global
if(true){
    const b = 11;   //block 
    console.log("INNER ",b);
}
console.log(b);

//Example 3
if(true){
    const username = "Aditya"
    if(username==="Aditya"){
        const website = " yt "
        console.log(username+website);
    }
    // console.log(website);
    //gives error because scope se bahar aagye
}
// console.log(username);
//gives error because scope se bahar aagye



