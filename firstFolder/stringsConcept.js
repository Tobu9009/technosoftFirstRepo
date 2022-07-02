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

input: 1 string
return type: boolean

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
console.log(`does ${cityName} start with 'neW Y' : ${cityNameStartsWith_neW_Y}`);

//ends with 
let cityNameEndsWith_K_city = cityName.endsWith('k City'); //case sensitive for starts with, ends with, includes 
console.log(`does ${cityName} end with 'k City' : ${cityNameEndsWith_K_city}`)

//includes function
let cityNameIncludes_rk_Ci = cityName.includes('rk Ci');
console.log(`\ncityName -> ${cityName}`);
console.log(`does ${cityName} contain 'rk Ci' : ${cityNameIncludes_rk_Ci}`); //returns true

/*replace function 
input: 2 string 
    (replace this, replaceWith);
return type: 
    String 

replace() does not change the original value in the varible
replace() replaces the data and return the new string  

*/
let sentence = 'dEaDer tHan A DoOrKNob'
let newSentence = sentence.replace('a','Z');
console.log(newSentence);

let sentence_replace_all_a_Z = sentence.replace(/a/g, 'Z'); //g is global flag, to replace all lower case a's
console.log(`sentence_replace_all_a_Z -> ${sentence_replace_all_a_Z}`)

let sentence_replace_all_a_z_ignoreCase = sentence.replace(/a/gi, 'Z'); //i is to replace all a's regardless of case 
console.log(`sentence_replace_all_a_z_ignoreCase -> ${sentence_replace_all_a_z_ignoreCase}`);


//concatenation function
let str1 = 'Hello', str2 = ' ', str3 = 'World', str4 = '!';
let str = str1.concat(str2, str3, str4);
console.log(str);

//trim function 
let sent = '             Hello World have a good day.     '
let sent_AfterTrim = sent.trim();

//sent = sent.trim();
console.log('*'.concat(sent, '*')); //*             Hello World have a good day.     *
console.log('*'.concat(sent_AfterTrim, '*')); //*Hello World have a good day.*

/*to increase lenght of the string by adding given character 
function:
pad start() -> adds padding in the beginning
padEnd() -> adds padding in the end 

padStart()-> adds padding in the beginning to increase the length of the string
2 inputs required: 
number: length of string after padding
string: character we would like to use for padding
return type: 
string: string after padding

string:Hello 
input: padStart(7,*)
prints: **Hello 

string:Hello 
input: padStart(4,*)
prints: Hello 
*/
let padString = 'Hello';
let padString_AfterPadding = padString.padStart(7, '*');//7 is the requirement for the length of string, * is the 

console.log(`\npadString -> ${padString}`);
console.log(`padString_AfterPadding -> ${padString_AfterPadding}`);

let padString_AfterPadding2 = padString.padStart(4, '*');
console.log(`padString_AfterPadding2 -> ${padString_AfterPadding2}`);

//to find which character/pattern is present at a given index of a string
//input: number
//output: string
let mySentence = 'My name is Tobu Widjaja'
let charAt23 = mySentence.charAt(5);
console.log(`\nmySentence -> ${mySentence}`);
console.log(`Character present at index-23 -> ${charAt23}`)

//index is beyond the scope
let charAt200 = mySentence.charAt(200);
console.log(`Character present at index-200 -> ${charAt200}`)

//invalid index value 
let charAtNeg4 = mySentence.charAt(-4);
console.log(`Character present at index-(-4) -> ${charAtNeg4}`);

/*to find which index the pattern/character you are looking for is in (first occurance)
input: string
output: number

indexOf()
if the given pattern is exactly rpesent in the String 
    method returns the index of First Occurance of the starting of the pattern
otherwise 
    method returns -1 

given string: Hello
indexOf(e) = 1 
indexOf(E) = -1 
indexOf(l) = 2
indexOf(ell) = 1
*/

//to find the last occurance of the the pattern/character you are looking for is in
//function lastIndexOf();

