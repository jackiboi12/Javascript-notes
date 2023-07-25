//if
const loggedInFromGoogle = true;
const loggedInFromEmail = false;
if(loggedInFromEmail||loggedInFromGoogle){
    console.log("Connected");
}else{
    console.log("Not connected");
}


//switch
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
console.log(false==0);
console.log(false=="");
console.log(0=="");


//Nullish Coalescing ( ?? ) Operator:null undefined
let val1;
val1 = 5??10
console.log(val1);
val1 = null??undefined
console.log(val1);
val1 = undefined??10
console.log(val1);


//Ternary operator
const iceTeaPrice = 100;
iceTeaPrice <=80 ?console.log("less than 80"):console.log("More than 80");;