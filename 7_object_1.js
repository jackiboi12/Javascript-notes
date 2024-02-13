//constructor se banega agr obj then -> singleton
//literal se banega agr obj then -> not a singleton
//Singleton pattern ensures that only one instance of the object is created.
// Object.create->It's not a constructor function and doesn't create instances of classes; it directly creates objects with a specified prototype

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

//Topic-2
//some ways to define an Object
console.log(`\n Topic-2`);
const t_user = {}
t_user.id = "123abc"
t_user.name = "Aditya"
t_user.status = true
console.log(t_user);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname: {
            firstname:"Hitesh",
            lastname:"sir"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);
const finalUsers = [
    {
        id:1,
        fullname:"Adi sharma"
    },
    {
        id:2,
        fullname:"raj sharma"
    }
    
]
console.log(finalUsers[1].id);
console.log(finalUsers[0].fullname);

