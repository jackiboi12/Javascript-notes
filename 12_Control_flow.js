// if statement
console.log(`\n Topic-1`);
const loggedInFromGoogle = true;
const loggedInFromEmail = false;
if (loggedInFromEmail || loggedInFromGoogle) {
  console.log("Connected"); // Logs "Connected" if either condition is true
} else {
  console.log("Not connected"); // Logs "Not connected" if both conditions are false
}

// switch statement
console.log(`\n Topic-2`);
const month = "Jan";
switch (month) {
  case "Jan":
    console.log("Jan"); // Logs "Jan" if month is "Jan"
    break;
  case "Feb":
    console.log("Feb"); // Logs "Feb" if month is "Feb"
    break;
  case "March":
    console.log("Mar"); // Logs "Mar" if month is "March"
    break;
  default:
    console.log("None"); // Logs "None" if no case matches
    break;
}

// Truthy and falsy values
console.log(`\n Topic-3`);
const userEmail = "Aditya@gmail.com";
if (userEmail) {
  console.log("Got user email"); // Logs if userEmail is truthy (non-empty string)
} else {
  console.log("Don't have user email"); // Logs if userEmail is falsy (e.g., null or undefined)
}

// To check if an array is empty
const myuserName = [];
if (myuserName.length === 0) {
  console.log("Array is empty"); // Logs "Array is empty" if the array has no elements
}

// To check if an object is empty
// Object.keys(emptyObj) is an array, so we can use .length to check if the object is empty
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty"); // Logs "Object is empty" if the object has no keys
}

// Falsy values -> false, 0, -0, BigInt 0n, "", null, undefined, NaN
// Truthy values -> "0", 'false', "  ", [], {}, function(){}

// Note
// Remember their output
console.log(`\n Topic-4`);
console.log(false == 0); // true, because 0 is falsy
console.log(false == ""); // true, because an empty string is falsy
console.log(0 == ""); // true, because both are falsy values

// Nullish Coalescing (??) Operator: returns the right-hand operand when the left-hand operand is null or undefined
console.log(`\n Topic-5`);
let val1;
val1 = 5 ?? 10;
console.log(val1); // 5, because 5 is not null or undefined
val1 = null ?? undefined;
console.log(`null??undefined:-> ${val1}`); // undefined, because null is nullish and undefined is nullish
val1 = undefined ?? null;
console.log(`undefined??null:-> ${val1}`); // null, because undefined is nullish
val1 = undefined ?? 10;
console.log(val1); // 10, because undefined is nullish and 10 is not nullish

// Ternary operator
console.log(`\n Topic-6`);
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("More than 80"); // Logs "More than 80" because iceTeaPrice is 100

// **Extra Example for Ternary Operator**
const age = 20;
const access = age >= 18 ? "Granted" : "Denied";
console.log(access); // Logs "Granted" because age is greater than or equal to 18
