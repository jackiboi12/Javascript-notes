//Array specific Loop
//array ke andar object-> [{},{},{}]

//For-of Loop
//Example 1
// const arr = [1,2,3,4,5];
// for (const num of arr) {
//     console.log(num);
    
// }

//Example 2
// const greetings = "Hello World!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
    
// }


//Maps->Map object hold key-value pairs 
//remembers the original insertion order of the keys
//value unique hogi 
//Example 3
const map = new Map();
map.set('IN',"INDIA")
map.set('IN',"INDIA")
map.set('IN',"INDIA")
map.set('CU',"CANADA")
map.set('PAK',"PAKISTAN")
// console.log(map);
// for (const [key,value] of map) {
//     console.log(key,"->",value);
    
// }


//Example 4
//iske output mai error aayega 
//ye [key,value] wali cheez karne se bhi object iterable nahi hoga
//for-of yaha kaam nahi aayega 
const myObject = {
    "game1":"NFS",
    "game2":"NFS1"
}
// for (const [key,value] of myObject) {
//     console.log(key,"->",value);
// }






