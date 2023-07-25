const user = {
    username: "aditya",
    loginCount :8,
    signedIn:true,
    getUserDetails:function(){
        console.log(`Username:${this.username}`);
    }

}

console.log(user.getUserDetails());
// console.log(this);  //{} coz this is in browser

// new-> ggives new instance , constructor function
// ex-> const data = new Date()

function User(username,loginCount){
    this.username=username;
    this.loginCount = loginCount
    // return this
}
const userOne = new User("Aditya",12)
console.log(userOne);
const userTwo = new User("Adi",13)
console.log(userTwo);