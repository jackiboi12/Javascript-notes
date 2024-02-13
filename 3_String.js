//String
console.log("Topic-1");
const age = 20;
const name = new String("Aditya");
// console.log(name + age); old format
//use ` this when dealing with string
console.log(`My name is ${name} and my age is ${age}`);

const name2 = new String("Shubham");
const age1 = new Number(20);
console.log(`My name is ${name2} and my age is ${age1}`);

console.log();

//Topic-1
console.log("Topic-2");
const gameName = new String("Jackiboi");
//This way of representing String are key value pair
//so we can access property and index also
console.log(gameName);
console.log(gameName[1]);
console.log(gameName.toUpperCase());
//Here original value is not changed because
//Stack m all primitive data store hota hai
//Copy banti h data ki and wahi aage jaati h
console.log(gameName.charAt(6));
console.log(gameName.indexOf("k"));

const newString = gameName.substring(0, 4); //4 will not be included
console.log(newString);
const anoString = gameName.slice(0, -1); //Slice take -ve Values
console.log(anoString);

console.log();
//Topic-2
console.log("Topic-3");
const name1 = "   adi  ";
console.log(name1);
console.log(name1.trim()); //removes all spaces
const url = "https://aditya.com/aditya%20jakhmola";
console.log(url.replace("%20", "-"));
console.log(url.includes("aditya")); //gives bool value
console.log(url.split("a")); //return string value in array format

console.log();
//Topic-3
console.log("Topic-3");
//Substring and Slice operator
const s = "The morning is upon us.";
console.log(s.length);
console.log("Slice:");
console.log(s.slice(12)); //"is upon us."
console.log(s.slice(-11)); //"is upon us."
//-ve indexing starts from -1 from backwards
console.log(s.slice(23)); //""
console.log(s.slice(13, 16)); //"s u"
console.log(s.slice(16, 13)); //"" ->if (indexStart>indexLast no output)
console.log(s.slice(-8, -4)); //"upon"
console.log(s.slice(-8, 4)); //""
console.log(s.slice(8, -4)); //"ing is upon"

console.log("\nSubstring:");
console.log(s.substring(12)); //"is upon us."
console.log(s.substring(-11)); //"The morning is upon us."
//substring treat -ve values as 0 so its start from 0 index
console.log(s.substring(23)); //""
console.log(s.substring(13, 16)); //"s u"
console.log(s.substring(16, 13)); //"s u" ->if (indexStart>indexLast it will swap)
console.log(s.substring(-8, -4)); //"" (0 to 0)
console.log(s.substring(-8, 4)); //"The "
console.log(s.substring(8, -4)); //"The morn" (Here, -4 changes to 0 then swap therefore 0-8 indexing )
