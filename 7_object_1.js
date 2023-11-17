//constructor se banega agr obj then -> singleton
//Singleton pattern ensures that only one instance of the object is created.
// Object.create->It's not a constructor function and doesn't create instances of classes; it directly creates objects with a specified prototype
//literal se banega agr obj then -> not a singleton

//Topic-1
//object literals
console.log("Topic-1");
const idd = Symbol("Key1")
console.log(idd);
const jsUser = {
    //left side wala string ki tarah treat hota hai 
    name:"Aditya ",
    "language":"Hindi", //isko .language se print nahi karwa sakte
    age:20,
    [idd]:"myKey1",  //representation of Symbol in Array
    location:"UP",
    isLoggedin: true,
    lastLoginDays:["Monday","Tuesday"]
}

console.log(jsUser.name);
//--------different way to do this ----------
console.log(jsUser["name"]);
console.log(jsUser[idd]);

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

