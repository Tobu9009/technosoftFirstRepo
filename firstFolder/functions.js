/*
functions 

before you create a function, ask below questions 
1. what is the purpose of function? 
2. Do I need any input from user? 
    If yes,
    a) how many inputs I need from user? 

3. Should I return any value back to user at the end of my function? 
    If yes
        make sure to write return statement 
    If no 

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

/* 
create a function to print 'hello username'
1. What is the purpose of function? 
    helloUser
2. Do I need any  input from user? 
    1(input represent username)

*/

function helloUser(username){ //username is the local variable to this function(scope of user-variable is helloUser function)
    console.log(`hello ${username}`);
}

console.log('\nCalling helloUser() function\n');
helloUser('Gigi')


/*
create a function to add two numbers 
1. what is the purpose of fuction 
    add2Nums
2. Do I need any input from user 
    2(num1, num2)
3. Should I return any value back to user at the end of my function? 
    yes
        return the result()
*/

function add2Nums(num1, num2){
    let result = num1 + num2; 
    return result;
}

console.log(`\ncallling add 2 nums\n`)
add2Nums(1, 4)
console.log(`\nAfter calling add2nums() function\n`);

let result = add2Nums(1, 4);


/*
homework 6
Q1 create a function to convert any sentence into titleCase

Q2 create a function to reverse a string

Q3 create a function to add numbers of a given array array 

Q4 create a function to find the average of given array 
*/

/*

function expression
#2 
var myFunction = function(input parameters){
    code inside
    the function 
    return statement -> only if you plan to return something back to the user at the end of function
}

*/

let printHello2 = function(){
    console.log('Hello')
}

const helloUser2 = function(userName){
    console.log(`Hello ${userName}`)
}

console.log('\ncalling print hello2 function\n')
printHello2();
console.log('\nAfter calling printHello2() function\n')

console.log('\nCalling helloUser2 function\n')
helloUser2('Gigi')
console.log('\nAfter calling hellouser2 function\n')

//functions are the type of variable function expressions
console.log(typeof helloUser2); //prints function

/*
arrow function 
let funcName = (input parameters) => {
    code inside the function

    return statement
}
*/
let printHello3 = () =>{
    console.log('Hello')
}

const helloUser3 = (userName) => {
    console.log(`Hello ${userName}`)
}

console.log('\ncalling print hello3 function\n')
printHello3();
console.log('\nAfter calling printHello3() function\n')

console.log('\nCalling helloUser3 function\n')
helloUser3('Gigi')
console.log('\nAfter calling hellouser3 function\n')

let add2Nums1 = (num1, num2) => {
    return num1 + num2;
}
//is equivlent to 

let add2Nums2 = (num1, num2) => num1 + num2; //this shortcut requires only one line of code in the function body, returns num1 + num2