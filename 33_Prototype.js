function multipleBy5(num){
    return num*5;
}
multipleBy5.power = 2
 console.log(multipleBy5(5));
 console.log(multipleBy5.power);
 console.log(multipleBy5.prototype);    //return {}
//function bhi ek object hai 

function createUser(username){
    this.username = username
}
createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}
const chai = new createUser("chai",25);
const tea = new createUser("tea",12);
chai.printMe()


// let myName = "Aditya  "
// console.log(myName.truelength);

let myHero = ["Thor","Spiderman"]
let heroPower = {
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.create
