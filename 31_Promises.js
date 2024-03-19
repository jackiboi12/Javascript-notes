//Promise is an object representing the eventual completion or failure of an asynchronous operation
//Example 1
const promiseOne = new Promise(function (resolve, reject) {
  //Below task is a async task
  //ex:database calls, cryptography,network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve(); //why this??? Question (1)
  }, 1000);
});
promiseOne.then(function () {
  console.log("Promise consumed");
});
//"then" ka connection hai "resolve" ke saath
//"then" ek callback function return karta hai
// And jo bhi Promise m hua usko return maardega
// Ans 1)->to connect "then" and "resolve" we use resolve() in line 8

//Example 2 without assigning new variable
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

//Example 3
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({
      username: "aditya",
      email: "satyam@example.com",
    });
    //resolve ke andhar data bhi PASS karskte ho (mostly object)
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
  //Now upar wale "resolve()" ne "then" ko connect karliya h so
  //Now "then" wala function parameters leskta hai and jo bhi "resolve" ke andar hoga usko call maarskta hai
});

//Example 4
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({
        username: "aditya",
        email: "satyam@example.com",
      });
    } else {
      reject("ERROR: something went Wrong");
    }
  }, 1000);
});
//IMP-> chaining
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("The Promised is either resolved or rejected");
  });

//Example 5
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "js", password: "123" });
    } else {
      reject("Error!! on JS");
    }
  }, 1000);
});
//async function cannot handle catch badhiya tareeke se
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

//Example 5
// async function getAllUsers(){
//     try {
//          const response = await fetch('https://jsonplaceholder.typicode.com/users')
//          const data = await response.json();
//          console.log(data);
//     } catch (error) {
//         console.log("Error");
//     }
// }
// getAllUsers();
// -------------------or--------------------
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
