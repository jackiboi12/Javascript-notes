//Topic-1
//Use of spread operator in object
console.log(`\n Topic-1`);
const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "c",
  4: "d",
};
const obj3 = {
  5: "e",
  6: "f",
};
//Object.assign()
//const obj4 = Object.assign({},obj1,obj2,obj3)

const obj4 = { ...obj1, ...obj2, ...obj3 };
console.log(obj4);

//Topic-2 Some methods
console.log(`\n Topic-2`);
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));
console.log(obj1.hasOwnProperty("1"));

//Topic-3
console.log(`\n Topic-3`);
const course = {
  coursename: "JS in hindi",
  price: 999,
  courseInstructor: "Aditya",
};
const { courseInstructor: inst } = course; //inst->shortNotation
const { coursename: c_name } = course;
//console.log(courseInstructor);   //cannot perform this operation because we have assigned other name its like props
console.log(inst);
console.log(c_name);
