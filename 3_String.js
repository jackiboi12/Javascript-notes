//String
const age = 20
const name = new String ('Aditya');
// console.log(name + age); old format 
//use ` this when dealing with string 
console.log(`My name is ${name} and my age is ${age}`);

console.log();

//Topic-1
const gameName = new String("Jackiboi");
//This way of representing String container key value pair 
//so we can access property and index also 
console.log(gameName);
console.log(gameName[1]);
console.log(gameName.toUpperCase());
//Here original value is not changed because 
//Stack m all primitive data store hota hai 
//Copy banti h data ki and wahi aage jaati h 
console.log(gameName.charAt(3));
console.log(gameName.indexOf("k"));

const newString =gameName.substring(0,4)
console.log(newString);
const anoString = gameName.slice(-6,4)
console.log(anoString);

console.log();
//Topic-2
const name1 = "   adi  "
console.log(name1.trim());  //removes all spaces
const url = "https://aditya.com/aditya%20jakhmola"
console.log(url.replace('%20',"-"));
console.log(url.includes("aditya"));    //givs bool value
console.log(url.split("a"));    //return value in array form 
