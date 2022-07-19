/*
loops: 
for
while
do-while

for-of 
for-in
forEach
*/

/**
 * 
 * 
 * for 
 * for (initialization ; condition ; incremental){
 *      for-loop
 *      code block
 * }
 */

console.log(`\nfor loop:\n`);
for(let counter = 1; counter <=20 ; counter++){
    console.log('Hello World!')
}

/*
create counter variable with initial value 
check if condition is true
if true, enter the for loop and execute code
once all for-loop code is executed, increment the counter-value
check if the condition is true
if true, enter the for-loop and execute code
*/

let counter = 1;
if(counter === 20){
    for(let counter = 1; counter <= 20; counter++){
        console.log(`\n${counter}`);
    }
}

const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby']
/**
 * print all values of array in separate lines
 * 
 * Eg: 
 * Football
 * Soccer
 * BASKETBALL 
 * Baseball
 * Rugby
 */


/*for(counter = 0; counter <= sports.length - 1; counter++){
    console.log(sports[counter])
}*/

/*
print values present on even index
*/

for(counter = 0; counter <= sports.length - 1; counter++){
    if(counter % 2 ===0){
        console.log(sports[counter])
    }
}

/*create abbreviation for any sentence */
sentence1 = 'yOu onLY lIvE OncE unless if you are a cat ';
sentence1Split = sentence1.split(' ');
let abbr = '';
for(counter = 0; counter <= sentence1Split.length - 1; counter ++){
    abbr = abbr + sentence1Split[counter].substring(0,1).toUpperCase()
}
console.log(abbr)

//print the values in reverse order
/*

const sports = ['Football', 'Soccer', 'Basketball', 'Baseball', 'Rugby']

*/
const sports2 = ['Football', 'Soccer', 'Basketball', 'Baseball', 'Rugby']
for(counter = sports.length - 1; counter >= 0; counter--){
    console.log(sports2[counter]);
}

/*
initialization 
while(condition){
    while-loop
    code block 
    code will keep executing until the condition is true 
    increment/decrement
}
*/

let w = 0;
while(w <= sports.length - 1){
    console.log(sports[w]);
    w++;
}

//do while
d = 0;
do{
    console.log(sports[d]);
    d++;
}
while(d<=sports.length-1);


const sports3 = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];

/**
 * verify 'BASKETBALL' is present in the sports-array 
 * if we don't ignore case
 *      sports.includes('Basketball')
 * pick-index-0 
 *      convert index-0-value in lowercase 
 *      convert Basketball in lowercase 
 *      if(index 0 value in lowercase === Basketball in lowercase 
 *          print 'Basketball is present in the array')
 *          stop for-loop (keyword -> break)
 * pick index 1 
 *      convert index-1-value in lowercase
 *      convert Basketball in lowercase 
 *      if(index-1-value in lowercase === Basketball in lowercase)
 *          print 'Basketball is present in teh array'
 *          stop for-loop (keyword -> break)
 * 
 * 0,1,2,3,4(lastIndex)
 * 
 */
let basketballLowercase = 'Basketball'.toLowerCase();
for(let num = 0; num <=sports3.length - 1; num++){
    let sportInLowercase = sports3[num].toLowerCase();
    if(sportInLowercase.localeCompare(basketballLowercase) === 0){
        console.log('Basketball is present in the array')
        break;
    }
}
/*
num = 0 
sports[num] = 'Football' 
sportInLowercase = 'football'
if('football' )
*/

/*
for of 
works with array and string 

picks index 0 valuie and assign to variable 
picks index 1 value and assing to a variable 
...
pikcs index last value and assign to a variable
for(let varname of arrayName){

}
*/
const favSports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
for(const sName of favSports){
    console.log(`\n${sName}`);
}

/*print arrayValues from even-index
const favSports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
for(const sName of favSports){
    if(counter % 2 === 0){
        console.log(`\n${sName}`)
    }
    counter++;
}
*/

console.log(`\nUsing for-of loop with String\n`);

//printing each character of a string using for of loop
let myString = 'Hello World'
for (const character of myString){
    console.log(character);
}
console.log(`\n using for loop for same result as for-of loop`)
for(let i=0; i <= myString.length-1; i++){
    console.log(myString.charAt(i));
}

/*
for-in loop
works with object

syntax: 
for (const varName in objectName){

}

for 1st iteration of for-in loop, varName will be the first attribute/property in the object 
for 2nd itertaion of for-in loop, varName will be the second attribute/property in the object

for last iteration of for-in loop, varName will be the last attribute/property in the object
*/

let myObject = {
    myName : 'Happy Peace',
    age : 20,
    state : 'New York',
    pastJobs : {
        current : 'ABC',
        past1 : 'XYZ',
        past2 : 'DEF'
    },
    siblingsNames : ['Deepak', 'Heena', 'Gigi', 'Yuri']
};

//printing only properties of the object
for(const prop in myObject){
    console.log(prop);
}

//printing values of properties of the object
for(const prop in myObject){
    console.log(myObject[prop]);
}

/* 
for each 
works with array and function

arrayName.forEach(function(varName)){
    code in forEach loop
}

picks index 0 value and assign to variable 
picks index 1 value and assing to a variable 
...
picks index last value and assign to a variable
for(let varname of arrayName)

*/
console.log(`\n Using forEach loop with Array\n`)

//const favSports 

//for(const sName of favSports){
//    console.log(sName)
//}

favSports.forEach(function(sport){
    console.log(sport)
})

