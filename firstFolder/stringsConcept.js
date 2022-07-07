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

/*
to compare if two strings are equal 
function: localCompare
if both strings are equal, function returns 0 
if one string is greater than another, function returns 1
if one string is lesser than another, function returns -1 

*/
let stmt1 = 'New York City'; //value 220 
let stmt2 = 'New York City'; //value 220 
//let stmt2 = 'CITY New York'; //value 220 
const isEqual1 = stmt1.localeCompare(stmt2);
console.log(`if the strings are equal this will return 0: ${isEqual1}`);

/*
if you want to slice out a piece of string from given string  
slice()
substring()
substr()

let stmt1 = 'New York City'
give me value from index-1 to index-4 (Buct do not include index-4)
'ew '
to extract a part of a string from a given string 
substring(start) -> to get string from start-index to end 

substring(start, end) -> to get string from start-index up to end-index (excluding end-index)

substring does not change the original value 

if the start-index is negative -> function will read it as 0 
if the end-index is missing or invalid -> function returns up to the end 
*/

let mySentence2 = 'gatorade is the only choice for your active lifestyle';
const subString1_4 = mySentence2.substring(1,4);
console.log(`\nmySentence2 ->${mySentence}`)
console.log(`substring from 1 to 4 ->${subString1_4}`)

const subString0_1 = mySentence.substring(0,1);
console.log(`\nsubstring from 0 to 1 -> ${subString0_1}`)

//print the last character present in mySentence using substring 
/*
find the length 
use substring(len-1)
*/
let mySentence2Length = mySentence2.length
const lastCharacter = mySentence2.substring(mySentence2Length - 1);
console.log(`\nlast character in my sentence -> ${lastCharacter}`);
const myResult = mySentence2.substring 

console.log(`\nusing slice function:`)
const myResult5 = mySentence2.slice(1,3);
console.log(`\nMy result5 -> ${myResult5}`);

const myResult6 = mySentence2.slice(1);
console.log(`\nmyResult6 -> ${myResult6}`)

const myResult7 = mySentence2.slice(-3, -1);
console.log(`\nmyResult7 -> ${myResult7}`);

/*
substr(start, length)
*/
console.log(`\nUsing substr-function`);
const myResult8 = mySentence.substr(2,3);
console.log(`\nmyResult8 -> ${myResult8}`);

/*to split the given string from a specific point to multiple strings 
functio: split()
returns -> Array 

'New York City' 
'New' 'York' 'City'

*/

let cityName3 = 'New York City iS tHe BESt ciTY iN The wORlD YoU CAn cHeCk'
const cityName_split_o = cityName3.split('o');
console.log(`\nsplit by 'o' -> ${cityName_split_o}`);

const cityName_split_space = cityName3.split(' ');
console.log(`\nsplit by ' ' -> ${cityName_split_space}`);

const cityName_split_nothing = cityName3.split('');
console.log(`\nsplit by '' ${cityName_split_nothing}`);

const cityName_split_or = cityName3.split('or');
console.log(`\nsplit by 'or' -> ${cityName_split_or}`);

/* make sure the suer enters full name 
print result as true or false 
if user entered full name (firstname and lastname), print true 
otherwise print false
*/

let fullName = 'Tobu';
let nameSplit = fullName.split(' ');
console.log(nameSplit);
nameSplit.length === 2 ? console.log(true) : console.log(false);

/*
convert below word into Titlecase
*/
let word = 'laUgH'; //want Laugh

let wordLowercase = word.toLowerCase();
firstLetterCap = wordLowercase.substring(0,1).toUpperCase();
restOfWordLowerCase = wordLowercase.substring(1);
console.log(firstLetterCap + restOfWordLowerCase)


