// -----------------Arrays---------------
//Arrays are resizable & can contain mix of datatypes
//Shallow Copy->same reference Point (Value gets changed)
//Deep copy-> donot share same reference point 
//JS Array-copy-operation create Shallow Copies

//Two ways to init an Array 
//Method-1
const myArr1 = new Array(10,9,8,7);
console.log(myArr1[3]);
//Method-2
const myArr2 = [4,5,6,7];
console.log(myArr2[2]);

//Array Method
console.log("Topic-1");
myArr1.push(6); //add element 
console.log(myArr1);
myArr1.pop();    //removes last element \

console.log();
console.log("Topic-2");
myArr1.unshift(11);  
//add element in the zero index
//prefer not to do this-> sabhi element ke index+1 hojaate hai  
console.log(myArr1);
console.log(myArr1.shift());    // removes the first element from an array and returns it
console.log(myArr1);

console.log();
console.log("Topic-3");
console.log(myArr1.includes(7));    //return True/False
console.log(myArr1.indexOf(8));    //return -1 if doesnot exist else return  index


console.log();
console.log("Topic-4");
//To convert array into String 
const strArray = myArr1.join()
console.log(strArray);
console.log(typeof strArray);


//Slice and splice
//Slice -> donot manipulate array 
//Splice -> removes that elements from original array
console.log();
console.log("Topic-5");
console.log("Slice and Splice");
const array6 = new Array(1,2,3,4,5);
console.log("A",array6);

const slice_array = array6.slice(1,3);  
console.log(slice_array);   
console.log("B",array6);    //Value will be same even after Slice operation

const splice_array = array6.splice(1,3);
console.log(splice_array);  //splice mai jo element liye hai vo original mai se hat jaayenge 
console.log("C",array6);


