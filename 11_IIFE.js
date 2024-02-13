//An IIFE (Immediately Invoked Function Expression)
(function addTwo(){
    console.log("Connected");
    
})();

((name)=>{
    console.log(`Db connected ,thanks ${name}`);
})("Aditya");

// ---------------Note--------------- 
// Control Flow 
//Global Execution Context(allocated all to 'this')

//Memory phase->(1st cycle) 
//(variables->undefined and function->defination ,set kardenge )
//Excution Phase->(2nd Cycle)
//variable ko unki value assign kr denge and 
//for funtion ek new box banega uske andhr new variable environment + execution thread and same repeat hoga (memory and execute phase )

//Function Execution Context
//Eval Execution Context

