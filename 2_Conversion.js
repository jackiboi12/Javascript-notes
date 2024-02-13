//Conversions

//Topic-1
console.log("Topic-1");
 let score  = true;
 console.log(typeof score);
 let valInNum = Number(score);
 console.log(typeof valInNum);
 console.log(valInNum)
//Note
// "33" => 33
// "33abc " => NAN
// true => 1; false =0

console.log();

let someNumber  = 22;
console.log(typeof someNumber); 
let string = String(someNumber);
console.log(typeof string);
console.log(string)

console.log();


//Topic-2
console.log("Topic-2");
console.log("1" + 2+2);     //Output-> 122 
// Because jo starting m primitive value hogi saare value uske hissab se change ho jaayengi 
//" " iske baad saaari values ko seperately he dekha jaayega
console.log(1 + 2 + "2"+2+2);     //Output-> 3222
let bye;
console.log(bye);       //output->undefined     
console.log();


//Topic - 3
console.log("Topic-3");
//comparison(>,<,<=,>=) convert null to number , treating it as 0
console.log(null>0);
console.log(null>=0);   //Only true case
console.log(null==0);
//Comparison(<,>,<=,>=) convert null to a number , treating it as 0 
//Therefore null>=0 is true but null>0 is false

console.log();

//Topic - 4
console.log("Topic-4");
//undefined wala comparison hamesha zero/False Hoga 
console.log(undefined>=0);
console.log(undefined==0);
console.log(undefined<=0);

console.log();

//=== check datatypes also 
console.log("2"===2);
console.log("2"==2);


console.log();

//Topic - 5
console.log("Topic-5");
//Use of Symbol -> same value pass karne par bhi === false show hoga
const id1 = Symbol('123')
const id2 = Symbol('123')
console.log(id1===id2);
