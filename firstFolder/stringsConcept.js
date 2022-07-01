let cityName = "New York City"; //treat as string datatype
let cityName2 = new String('New York City'); //treat as object datatype
console.log(typeof cityName); //prints string
console.log(typeof cityName2); //prints object 

/* length
is a variable property of string class
to get the number of character in the string (or to get length of string)
*/

let cityNameLength = cityName.length; 
console.log(`length = ${cityNameLength}`) //prints 13

/*
to convert string into uppercase 
function: toUpperCase()
toUpperCase() does not change the original value in the variable
to do that, save toUpperCase into a new variable 
*/

cityName.toUpperCase();

/*to convert string into lowercase 
function: toLowerCase()

toLowerCase() does not change the original value in the variable
*/
let cityName_L = cityName.toLowerCase();

/*What if you want to find out if a string starts with a given pattern
use function: startsWith()
if String starts with the given pattern 
method returns true
otherwise 
method returns false
*/
cityNameStartsWith_n = cityName.startsWith('n');
console.log(`\ncityName -> ${cityName}`);
console.log(`does ${cityName} start with 'n'?: ${cityNameStartsWith_n}`);

let startsWithPattern = 'neW y';
startsWithPattern = startsWithPattern.toUpperCase();
let cityName_Uppercase = cityName.toUpperCase();
let cityNameStartsWith_neW_Y = cityName_Uppercase.startsWith(startsWithPattern);
console.log(`\ncityName -> ${cityName}`);

