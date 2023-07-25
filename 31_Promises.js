//Promise is an object representing the eventual completion or failure of an asynchronous operation
//Example 1
const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //database calls, cryptography,network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("Promise consumed");
})   //then ka connection hai resolve ke saath


//Example 2
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})


//Example 3
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(
            {username:"aditya",
            email:"satyam@example.com"}
            )
    },1000)
}) 
promiseThree.then(function(user){
    console.log(user);

})


//Example 4
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve(
                {username:"aditya",
            email:"satyam@example.com"})
        }else{
            reject("ERROR: something went Wrong")
        }
    },1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("The Promised is either resolved or rejected");
})


//Example 5
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"js",password:"123"})
        }else{
            reject("error on JS")
        }
    },1000)
})
async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
    
}
consumePromiseFive();


//Example 5
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json();
//     console.log(data);
//     } catch (error) {
//         console.log("Error");
//     }
// }
// getAllUsers();
// ----------or--------
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})



