const MyClass = require("./MyClass");
const mc = new MyClass();
//mc.showSeasonName('jjj');   
//console.log('Hello world');

try{
    mc.showSeasonName('jjjj');
}
catch(e){
    console.log(e)
    console.log('Exception caught')
}

/**
 * try catch block 
 * is sed to handle exceptions
 * 
 * in try block: 
 *  we write code which may/may not throw exception 
 * in catch block: 
 *  we write the code to exectue in case exception happens 
 * 
 * in try block, we may wroite multiupole lines of code
 * as soon as exception hapens in teh try-block
 * javascript jumps in catch-block
 * 
 * if no exception occurs in try block, javascfript will never go into catch block 
 * 
 * try 
 */