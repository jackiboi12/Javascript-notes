//An IIFE (Immediately Invoked Function Expression)
//IIFE helps by keeping variables and functions within their own scope, preventing global pollution
(function addTwo(){
    console.log("Connected");
    
})();

((name)=>{
    console.log(`Db connected ,thanks ${name}`);
})("Aditya");

// ---------------Note--------------- 
// Control Flow 
//Global Execution Context(allocated all to 'this')
//Function Execution Context
//Eval Execution Context

//JS run on two phase
//Memory Creation phase->(1st cycle) 
//(all variables are set to undefined and function are set to defination  )
//Execution Phase->(2nd Cycle)
//variable ko unki value assign kr denge and 
//for funtion ek new box(new Execution Context) banega uske andhr new variable environment + execution thread and same repeat hoga (memory phase and execution phase )
//After that the new Box will delete automatically 


