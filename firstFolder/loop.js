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