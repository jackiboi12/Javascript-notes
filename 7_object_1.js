//Constructor se banega agr obj then -> singleton
// If an object is created using a constructor function, it can follow the singleton pattern.
// Singleton pattern ensures that only one instance of the object is created and reused.

//Literal se banega agr obj then -> not a singleton
// Objects created using literals are not singletons; they can have multiple independent instances.

// Object.create -> It's not a constructor function and doesn't create instances of classes.
// It directly creates objects with a specified prototype.

//--------------------

//Topic-1
//Object literals
console.log("Topic-1");

// Using Symbol to create a unique key
const idd = Symbol("Key1");
console.log(idd); // Symbol(Key1)

const jsUser = {
  // Left side is treated as a string key by default
  name: "Aditya ",
  language: "Hindi", // Can be accessed using jsUser.language
  age: 20,
  [idd]: "myKey1", // Symbol key example, accessible only with Symbol reference
  location: "UP",
  isLoggedin: true,
  lastLoginDays: ["Monday", "Tuesday"],
};

// Accessing properties
console.log(jsUser.name); // Output: Aditya
console.log(jsUser["name"]); // Another way to access properties
console.log(jsUser[idd]); // Accessing the Symbol key

// Modifying properties
jsUser.name = "Satyam"; // Updates the value of 'name'

// Freezing the object (Optional)
// Object.freeze(jsUser);
// After freezing, properties cannot be modified, added, or deleted.

// Adding methods to the object
jsUser.greeting1 = function () {
  console.log("Hello World");
};
jsUser.greeting2 = function () {
  console.log(`Hello js user I am , ${this.name}`);
};

// Calling methods
console.log(jsUser.greeting1()); // Output: Hello World
console.log(jsUser.greeting2()); // Output: Hello js user I am , Satyam

//--------------------

//Topic-2
//Different ways to define an object
console.log(`\nTopic-2`);

// Method 1: Using an empty object and adding properties dynamically
const t_user = {};
t_user.id = "123abc";
t_user.name = "Aditya";
t_user.status = true;
console.log(t_user); // Output: { id: '123abc', name: 'Aditya', status: true }

// Method 2: Defining an object with nested properties
const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Hitesh",
      lastname: "sir",
    },
  },
};
console.log(regularUser.fullname.userfullname.firstname); // Output: Hitesh

// Method 3: Array of objects
const finalUsers = [
  {
    id: 1,
    fullname: "Adi Sharma",
  },
  {
    id: 2,
    fullname: "Raj Sharma",
  },
];
console.log(finalUsers[1].id); // Output: 2
console.log(finalUsers[0].fullname); // Output: Adi Sharma

// Notes:
// - Use Symbols for unique keys to avoid accidental overwriting of properties.
// - Object.freeze can be used to make objects immutable (useful for constants).
// - Nested objects and arrays are useful for organizing hierarchical data.

// **Key Points for Revision**
// 1. The Singleton pattern can be implemented using constructor functions, ensuring only one instance of an object is created.
// 2. Object literals are not singletons; they can have multiple independent instances.
// 3. Object.create allows creating objects with a specified prototype without using constructors.
// 4. Symbols are used for unique keys to avoid accidental overwriting of properties.
// 5. Object.freeze makes an object immutable, preventing modifications, additions, or deletions.
// 6. Objects can be defined using dynamic properties, nested objects, and arrays of objects to organize data.
