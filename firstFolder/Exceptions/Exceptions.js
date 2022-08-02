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
 * try {
 *      code which may/may not throw exception
 *
 * }
 * catch(e){
 *      code to execuite in case exception happens in try block
 * }
 * 
 * javascript vs java:
 * 
 * in js: 
 *      we can have only-one catch block with a try block
 * in java:
 *      we can have multiple-catch blocks with a try block
 * 
 * try{
 *      code
 * }catch (exception){
 * 
 * }catch (exception){
 * 
 * }catch (exception3) or exception4){
 * 
 * }
 * 
 * 8:40
 */