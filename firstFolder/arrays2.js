let siblingNames = ['Deepak', 'Heena', 'Gigi', 'Yuri']

/*
create code to convert all array-values in uppercase
*/

convertIntoUpperCase = (userName) => userName.toUpperCase()

/*
when we need to perform action on every value in the array
function -> map()

map does NOT change the original array
map returns a new array of same length as of input-array after performing defined action on every value in the array

let outputArray = inputArray.map(functionName);
*/

let siblingNamesOuput = siblingNames.map(convertIntoUpperCase)
//OR
let siblingNamesOutput2 = siblingNames.map(sName => sName.toUpperCase());

console.log(siblingNamesOuput);
console.log(siblingNamesOutput2);


/*
when we need to filter values from array into new array based on condition(s)
filter -> filter() 

for example, we have [ 'DEEPAK', 'HEENA', 'GIGI', 'YURI' ]

we want to to keep values which contain 'A' in siblingNames

*/


let nameContainsA = userName => userName.includes('A')

let siblingNamesWithA = siblingNamesOutput2.filter(nameContainsA);

console.log(siblingNamesWithA);


//remove values which are less than 4 from numbers array

const numbers = [56, 3, -1, 4, 6, 7];

let numbersGr5 = numbers.filter(num => num > 5);

console.log(numbersGr5)

/* to find if every values of array passes specified condition(s)
function -> every()
if all values pass the specified condition(s)
    function returns true 
otherwise
    function returns false

given numbers array
check if all values are greater than 0 
*/
console.log('\nEvery() function\n');
let isAllGr5 = numbers.every(num => num > 0);
console.log(isAllGr5);

/*
to find which value at which index passes condition(s) in the array 
function -> findIndex()

returns the first index of array which passes the specified condition(s)
*/
console.log('\nfindIndex() function\n')
const numbers1 = [5, 6, 3, -1, 4, 6, 7];

//find the first value in the array which is greater than 5;

let firstIndexPassesCondition = numbers1.findIndex(num => num > 5);

console.log(firstIndexPassesCondition)
console.log(numbers1[firstIndexPassesCondition]);

/*
to find first value which passes specified condition(s) in the array 
function -> find()

if any array-elenment passes thge condition(s)
    function will return the element 
otherwise
    function returns undefined
    
returns the first array-value which passes the specified condition(s)
*/

console.log('\nfind() function\n');
let citizens = [
    {ssn: 1111, age: 12, state:'PA'}, 
    {ssn: 2222, age: 12, state:'PA'}, 
    {ssn: 3333, age: 12, state:'PA'}, 
    {ssn: 4444, age: 12, state:'PA'}
];

const myCitizen = citizens.find(citizen => citizen.ssn === 3333 || citizen.state === 'NY');
console.log(myCitizen);

/* to add all values of array 

to execute a function on every-array element to produce a single value function -> reduce();

*/

const numbersAgain = [5, 6, 3, -1, 4, 5, 7]
const totalofNumbersAgain = numbersAgain.reduce((total, num) => total + num)

/* 
    total = 5 
    num = 6 
        total = 11 
    total = 11 
    num = 3
        total = 14 
    total = 14 
    num = -1 
        total = 13 
    total = 13
    num = 4
        total = 17
    total will go into totalOfNumbersAgain
*/

let bankAccounts = [
    {accNum:1111, amt:12},
    {accNum:2222, amt:22},
    {accNum:3333, amt:21},
    {accNum:4444, amt:22},
]

console.log(totalOfNumbersAgain); 
