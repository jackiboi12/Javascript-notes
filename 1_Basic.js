"use strict"; //treat all js code in newer version
//alert("hello")
//Wrong syntax because we are using nodejs not browser
console.log("Topic-1");
let age = 19;
let names = "Aditya";
let nullValue = null;
let accountState; //output-> undefined
console.log(typeof names); //output->String
console.log(typeof null); //output-> object
console.log(typeof nullValue); //output-> object
console.log(typeof undefined); //output-> undefined
console.table([age, names, nullValue, accountState]); //table representation of data with index

//Dont use Var because it lacks block scope

//Two Type of Datatype-> Primitive and Non-primitive(reference Type)
//Primitive-> String , Number , BigInt , null, undefined , Boolean, Symbol
//Non-primitive-> Arrays, Object, functions
/*
Note-1
Stack include Primitive Value
Heap include Non-primitive Value
*/
/*
Note-2
Primitive data types are immutable.
Reference data types, on the other hand, are mutable. 
*/
/*
Note-3
When working with reference values, variables are accessed by reference, not by the actual value stored. 
When assigning a reference value from one variable to another, the address of the actual object on the heap is copied to the new variable. 
This means both variables now reference the same object, allowing manipulation of the original object from both variables.
*/
console.log();
console.log("Topic-2"); 
let username = "AdityaJ";
let secondUsername = username;
secondUsername  = "Anant";
//Only Second value gets changed because it is stored in Stack memory 
console.table([username,secondUsername]);

let obj = {
    name:"AdityaJakhmola",
    car:"Honda"
}
let obj2 = obj;
obj2.car = "Maruti";
//Both value gets changed because it is stored in Heap memory 
console.table([obj.car,obj2.car]);

