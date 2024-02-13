//Topic-1
console.log("Topic-1");
//Joining 2 or more arrays
const hero1 = new Array("Batman", "Superman")
const hero2 = new Array("spiderman", "Beetle")

// //By push method -> Wrong way 
// hero1.push(hero2);
// //hero2 ke saare element ko ek he array ka element treat kardeya 


// //By concat method -> Better but use spread operator for 2 or more arrays
//  //concat return new array
// const all_hero = hero1.concat(hero2);
// console.log(all_hero);


//Spread Operator -> ...xyz
const all_hero = [...hero1,...hero2];
console.log(all_hero);


//Topic-2
//Multiple Array ko single array format mai karne ke liye use 'flat'
//Flat operation 
console.log();
console.log("Topic-2");
const ano_arr = [1,2,3,[4,5,6],7,[6,7,[3,4]]]
const real_ano_arr = ano_arr.flat(Infinity);
console.log(real_ano_arr);


//Topic-3
console.log();
console.log("Topic-3");
console.log(Array.isArray([1,2,3]));    //isArray return T/f 
console.log(Array.isArray("HELLO WORLD"));
console.log(Array.from("ADITYA"));  //convert array from iterable object
//It converts the string "ADITYA" into an array where each character becomes an element in the array.
console.log(Array.from({name:"Aditya"}));  //return empty array because an object is not iterable 
let score1 = 100;
let score2 = 1000;
let score3 = "aditya";
console.log(Array.of(score1,score2,score3));    //Return array from set of elements



