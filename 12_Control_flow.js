//if
console.log(`\n Topic-1`);
const loggedInFromGoogle = true;
const loggedInFromEmail = false;
if(loggedInFromEmail||loggedInFromGoogle){
    console.log("Connected");
}else{
    console.log("Not connected");
}


//switch
console.log(`\n Topic-2`);
const month = "Jan";
switch (month) {
    case "Jan":
        console.log("Jan");
        break;
    case "Feb":
        console.log("Feb");
        break;
    case "March":
        console.log("Mar");
        break;

    default:
        console.log("13");
        break;
}


//Truthy and falsy
console.log(`\n Topic-3`);
const userEmail = "Aditya@gmail.com"
if(userEmail){
    console.log("Got user email");
}else{
    console.log("Dont have user email");
}
const emptyObj = {}
if(Object.keys(emptyObj).length===0){
    console.log("Obj i empty");
}
// false value -> false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN
//true value -> "0" , 'false' , " " , [] , {} , function(){}


//Note 
//remember their output 
console.log(`\n Topic-4`);
console.log(false==0);
console.log(false=="");
console.log(0=="");


//Nullish Coalescing ( ?? ) Operator:null undefined
console.log(`\n Topic-5`);
let val1;
val1 = 5??10
console.log(val1);
val1 = null??undefined
console.log(val1);
val1 = undefined??10
console.log(val1);


//Ternary operator
console.log(`\n Topic-6`);
const iceTeaPrice = 100;
iceTeaPrice <=80 ?console.log("less than 80"):console.log("More than 80");;