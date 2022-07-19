/*
functions 

before you create a function, ask below questions 
1. what is the purpose of function? 
2. Do I need any input from user? 
    If yes,
    a) how many inputs I need from user? 

3. Should I return any value back to user at the end of my function? 

Syntax to create function: 

#1: 
function funcName(inputParameters){
    code inside the function
    return statement -> only if you plan to return something back to user at the end of function (Q3)\


}
funcName -> Name should refer the purpose of the function 
<inputParameters> -> 
    if we need input from user, 
        we need to create variables in the parenthesis 
    else 
        parenthesis will be empty
*/

/*
        create function to print Hello
*/

function printHello(){
    console.log('Hello');
}

console.log('\nCalling printHello() function');
printHello();
console.log(`\nAfter calling printHello() function`)
