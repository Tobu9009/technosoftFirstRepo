/*
[] represents array 

array: a datatype which can store one or more values
first value goes to index-0 
second value goes to index-1 
third value goes to index-2

let planets = ['Earth', 'Mercury', 'Venus', 'Jupiter'];
last index of array = array.length-1 
*/

let planets = ['EArth', 'MerCUry', 'VeNUS', 'JuptIteR', 'Pluto', 'SatuRN', 'MARS'];
console.log(`\nplanets -> ${planets}`);
console.log(`\ntypeof planets -> ${typeof planets}`)

const totalPlanets = planets.length;
console.log(totalPlanets);

planets[0];

let planets2 = ['EArth', 'MerCUry', 'VeNUS', 'JuptIteR', 'PluTO', 'SatuRN', 'MARS'];
console.log(`\nplanets -> ${planets}\n`)

/*to find the length of array
property: length
*/

let totalPLanets = planets.length;
console.log(`\nTotal planets in array -> ${totalPlanets}`);

/* to access from any index in array, we can use [];
*/

const valueAtIndex2 = planets[2];
console.log(`\nValue at index -> ${valueAtIndex2}`);
planets[1] = 'Man Made planet'; //assign new value at index 1, a string called man made planet
console.log(`\nplanets -> ${planets}`);
console.log(typeof planets2);

/*to convert array into comma-seperated string value
function toString()
*/
const planetsString = planets.toString();
console.log(`\nplanetsString -> ${planetsString}`);
console.log(typeof planetsString); //check new datatype 

/*
function: join() to convert array into String with user-defined seperator
if user inputs the seperator, all array values get joined using that provided seperator
if user doesn't input the seperator, all array-values get joined using the default seperator: , 
*/

const planetsJoin1 = planets.join('*');
console.log(`\nplanetsJoin1 -> ${planetsJoin1}`);

const planetsJoin2 = planets.join(); //default seperator
console.log(`\nplanetsJoin2 -> ${planetsJoin2}`); 
console.log(planetsJoin2.length) //checking length

/*
function: pop() to remove the last value from the array

function changes the original array 
*/
console.log(`\nplanets -> ${planets}`)
const poppedValue = planets.pop(); //removes the last value
console.log(`\npopped value -> ${poppedValue}`);
console.log(`\nplanets -> ${planets}`) 

/*
function: shift() to remove the first value from the array 

function changes the original array 
*/
const shiftedValue = planets.shift();
console.log(`\nshiftedValue -> ${shiftedValue}`)
console.log(`\nplanets -> ${planets}`);

const poppedValueAgain = planets.pop();
console.log(`\npoppedValueAgain -> ${poppedValueAgain}`);
console.log(`\nplanets -> ${planets}`);

/*
function: push() -> to add a value in the end of an array 
returns new array length

function changes the original array 
*/

const lenAfterPushFunction = planets.push('Saturn');
console.log(`\ntotal planets now -> ${lenAfterPushFunction}`);

/*
function: unshift() -> to addd value in the beginning of array 
returns new array length

function changes the original array 
*/

const lenAfterUnshiftFunction = planets.unshift('EArth');
console.log(`\ntotal planets now -> ${lenAfterUnshiftFunction}`);

/*
function: splice() to add/remove values in the array
takes three arguments: 
arg1: index at which we want to add new values
arg2: how many values you want to remove
argn: new values 

returns an array with deleted/removed values
*/

//planets -> ['EArth', 'MerCUry', 'VeNUS', 'JuptIteR', 'PluTO', 'SatuRN', 'MARS'];

const arrayFromSplice1 = planets.splice(2,0, 'A', 'B', 'C', 'D');
console.log(`\narray with nothing: ${arrayFromSplice1}`) //array that contains nothing because we removed 0 values 

console.log(`\nplanets->${planets}`);

const arrayFromSplice2 = planets.splice(3,2); //arg1: index of 3, arg2: removed two values, arg3: values of nothing, so remove
console.log(`\narrayFrwomSplice2 -> ${arrayFromSplice2}`) //B, C removed, returned as an array
console.log(`\nplanets ->${planets}`);

/*
function: delete()
planets -> poop, chapstick, stock 
planets.delete(1)
planets -> poop, undefined, stock

pop() vs shift() vs delete() splice()
*/

/*
function concat() to concatenate multiple arrays
returns new-array after joinin all given arrays 

*/
let fruits = ['mango', 'apple', 'banana', 'cherry'];
let states = ['ny', 'nj', 'ca', 'pa', 'tx'];
const combinedArray = planets.concat(fruits,states);
console.log(`\nplanets -> ${planets}`);
console.log(`fruits -> ${fruits}`);
console.log(`states -> ${states}`);
console.log(`\ncombined array -> ${combinedArray}`)

//using concat to add values 
const newFruits = fruits.concat('strawberry', 'mango'); //adds values in the end 
console.log(`\noriginal array of fruits -> ${fruits}`);
console.log(`\nwith new values added to fruits -> ${newFruits}`);

/*
to remove last value from array 
pop() vs splice()
*/
//console.log(`\nplanets ->${planets}`);
//planets.pop();
//planets.splice(planets.length-1, 1);

/*
function includes(): to find if a given value is exactly present at any index in the array
arg1: value which we want to check for
arg2: search should start from specific index
if the given value is exactly present in the array at any index 
    function will return true 
otherwise
    function will return false 
returns boolean  

*/

console.log(`\nplanets -> ${planets}`)
const doesIncludePluto = planets.includes('Pluto');
console.log(`does the array include 'Pluto' in planets -> ${doesIncludePluto}`);

const doesIncludeMan = planets.includes('MaN');
console.log(`does the array include 'MaN' in planets -> ${doesIncludeMan}`);

const doesIncludeA_D = planets.includes('A, D');
console.log(`does include 'A, D' in planets -> ${doesIncludeA_D}`);

const doesIncludeEarth = planets.includes('EArth');
console.log(`\ndoes include 'Earth' in planets -> ${doesIncludeEarth}`)

const doesIncludeEarth2 = planets.includes('EArth', 3); //arg2 will indicate includes will search planets from index 3 onwards 
console.log(`\ndoes include 'Earth' in planets starting from index 3-> ${doesIncludeEarth2}`) //returns false 
/*
to find the FIRST OCCURANCE of a given pattern at any index in the array
function: indexOf();

if the given value is exactly present at any index
    function returns the index of first occurance 
otherwise 
    function returns -1 
*/
console.log(`\nplanets -> ${planets}`);
planets = planets.concat('A', 'D', 'Man Made planet', 'VeNUS', 'JuptIteR', 'Pluto', 'Saturn');

console.log(`\nnewPlanets -> ${planets}`);
const indexOf_Earth = planets.indexOf('Earth');
console.log(`First occiurance of 'Earth' is at index -> ${indexOf_Earth}`);
/*
to find the LAST OCCURANCE of a given pattern at any index in the array
function: lastIndexOf();

if the given value is exactly present at any index
    function returns the index of first occurance 
otherwise 
    function returns -1 
*/

/* to find if the given value/variable is array or not 
function: isArray()

if the variable is array 
    function returns true 
otherwise
    functio returns false
*/
/*let isPlanetsArray = Array.isArray(planets);
console.log(`\n is planets an array -> ${isPlanetsArray}`);

let isLastIndexOf_VeNUSArray = Array.isArray(lastIndexOf_VeNUS);
console.log(`\nis 'isLastIndexOf_VeNUSArray' an array-> ${isLastIndexOf_VeNUSArray}`);

/*
to fill an array with a specific value 
function: fill()
arg1: new value to fill/add 
arg2: starting index (index from which we want to fill/add value)
arg3: end index(index up to which we should fill/add value - endIndex is not included)

Note: works like replace 
changes the original array 

if arg2 and arg3 are not mentioned 
values at index in array will be replaced with the new value

if arg3 is not mentioned
all values from starting index will be replaced with new value 
*/

console.log(`\nfruits -> ${fruits}`) //mango, apple, banana, cherry 
fruits.fill('happy', 2, 4); //2, 3 
console.log(`\nfruits -> ${fruits}`)

fruits.fill('Queen king');
console.log(`\nfruits -> ${fruits}`);

fruits.fill('Apple', 1);
console.log(`\nfruits -> ${fruits}`);

/*
to reverse an array 
function: reverse()

*/

fruits.reverse();
console.log(`\nfruits -> ${fruits}`);

let letters = ['a', 'b', 'c', 'd'];
console.log(`\nletters -> ${letters}`);
letters.reverse();
console.log(`\nletters -> ${letters}`)


