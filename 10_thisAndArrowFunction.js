//this keyword-> current context ko refer karrhe h 
// scope ke andhar ho tab this ka use karo 
//Example 1
console.log(`\n Topic-1`);
const user = {
    username: "hitesh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log("this: ",this);
    }
}
user.welcomeMessage()
user.username = "Aditya"
user.welcomeMessage()


//Example 2
console.log(`\n Topic-2`);
//function ke andhar "this" use nahi hoga
//object mai hoga use 
const ok = function(){
    let ok1 = "hello "
    console.log(this.ok1);
    console.log(this);    //output-> undefined 

}
ok();


//Example 3->Arrow function mai bhi same output aayega
console.log(`\n Topic-3`);
const okji  = ()=>{
    let ok1 = "hello "
    console.log(this.username);
    //output-> undefined 
}
ok();


//Example 4
// console.log(`\n Topic-4`);
// const addTwo = (num1,num2)=>{
//     return num1+num2;
// }
// -----------------different way -----------------
// const addTwo  = (num1,num2)=> num1+num2;
// -----------------different way -----------------
// const addTwo = (num1,num2)=> (num1+num2);
// -----------------different way -----------------
// const addTwo = (num1,num2)=> ({
//     username:"Aditya",
//     age:88
// });
// console.log(addTwo());


