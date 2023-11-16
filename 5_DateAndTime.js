//Date and time 

//Topic-1
console.log("Topic-1");
//create Date object therefore typeOf date-> object
let myDate = new Date()
console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(typeof myDate);

console.log()

//Topic-2
console.log("Topic-2");
// let myCreatedDate = new Date(2023,0,23)
// let myCreatedDate = new Date(2023,0,23,5,3)
let myCreatedDate = new Date("01-14-2023")
// 0 ->january
// 23->2023
console.log(myCreatedDate);
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.getTime());
console.log()

//Topic-3
console.log("Topic-3");
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log()


//Topic-4
console.log("Topic-4");
let newDatte = new Date()
console.log(newDatte);
console.log(newDatte.getDate());
console.log(newDatte.getMonth()+1); //JavaScript counts months from 0 to 11