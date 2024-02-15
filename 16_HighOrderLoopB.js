//For-in Loop (use for object)
//Topic-1
// console.log(`\n Topic-1`);
//Example 1
const myObject2 = {
    game1:"NFS",
    game2:"GTA",
    game3:"Surfers"
}
// for (const key in myObject2) {
//     console.log(key);   //for printing key 
//     console.log(myObject2[key]);    //for printing values
// }


//Example 2
//arrays printing in for-in 
const prgmLang = ["js","ruby","Python"] 
for (const key in prgmLang) {
    console.log(key);   //ye index dega 
    console.log(prgmLang[key]);     //this will give you value
}

//Example 3 map and forin Loops
// iterate nahi karskte map ko 
//Maps are not iteratable


//for Each
//Topic-2
console.log(`\n Topic-2`);
const coding = ["js","python","cpp","java"];
//callback wale function use karna hota hai ie, no name
//Example 4A
coding.forEach(function(val){
    //console.log(val);

})

//Example 4B
coding.forEach((item)=>{
    //console.log(item);
})

//Example 4C
function printMe(item){
    //console.log(item);
}
coding.forEach(printMe)


//Example 5
coding.forEach((item,index,arr)=>{
    //console.log(item,index,arr);

})


//Example 6
const myCoding = [
    {   
        langName:"javascript",
        langFile :".js"
    },
    {   
        langName:"C++",
        langFile :".c++"
    },
    {   
        langName:"Python",
        langFile :".py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.langFile);
    console.log(item.langName);
})

//Note->For each value return nahi karta
