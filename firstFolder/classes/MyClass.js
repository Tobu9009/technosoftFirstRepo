/*
class contains variables and functions

*/

const myGreetingFunctions = require('./MyGreetingFunctions');
const myStringFunctions = require('./MyStringFunctions')

/*
if we want to access any function or variable from different class
we need the object of class(Create object if not created already)
in which variable and function is present

syntax of creating class object: 
let objName = new ClassName();

*/
const msf = new myStringFunctions(); //creating class object 
let output = msf.toAbbreviation('live life KING size')
console.log(output);

//Greeting to user 'Robert'
const mgf = new myGreetingFunctions();
mgf.helloUser('Robert')

//Greeting to user 'gIGI'
const modifiedUserName = msf.toTitleCase('gIGI');
mgf.helloUser(modifiedUserName);


