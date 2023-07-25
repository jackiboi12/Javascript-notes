//constructor se banega agr obj then -> singleton
// Object.create   //constructor method 
//literal se banega agr obj then -> not a singleton

//Topic-1
//object literals
const system = Symbol("Key1")
const jsUser = {
    //left side wala string ki tarah treat hota hai 
    name:"Aditya ",
    "language":"Hindi", //isko .language se print nahi karwa sakte
    age:20,
    [system]:"myKey1",  //representation of Symbol in Array
    location:"UP",
    isLoggedin: true,
    lastLoginDays:["Monday","Tuesday"]
}

console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser[system]);

jsUser.name = "Satyam";
// Object.freeze(jsUser); //isko karne ke baad kuch bhi change nahi karskte 

jsUser.greeting1 = function(){
    console.log("Hello World");
}
jsUser.greeting2 = function(){
    console.log(`Hello js user I am , ${this.name}`);
}
console.log(jsUser.greeting1());
console.log(jsUser.greeting2());

