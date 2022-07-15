/**
 * DUE 7/15 Friday
 * 
 * create two varibles
 * one is to store studentScore, the other to store maxScore
 * based on the student percentage, print the grade
 * 
 * grade A: 91 - 100
 * grade B: 81 - 90.99
 * grade C: 71 - 80.99
 * grade D: 61 - 70.99
 * grade E: 51 - 60.99
 * grade F: Less than 51%
 * 
 * if studentScore is invalid or more than Max score, print 'Invalid student score'
 * 
 * for example:
 * student score = 40
 * max score = 50 
 * print grade C
 */
 
let studentScore = 1; 
let maxScore = 50; 
let percentage = (studentScore/maxScore) * 100;

if(studentScore > maxScore || percentage < 0){
    console.log('Invalid student score')
}
else if(percentage >= 91 && percentage <= 100){
    console.log('Grade: A');
}
else if (percentage >= 81 && percentage <= 90.99){
    console.log('Grade B');
}
else if (percentage >= 71 && percentage <= 80.99){
    console.log('Grade C');
}
else if (percentage >= 61 && percentage <= 70.99){
    console.log('Grade D');
}
else if (percentage >= 51 && percentage <= 60.99){
    console.log('Grade E');
}
else {
    console.log('Grade F')
}

/*
Create a varialbe and store any value in it 
if the number is divisible by 5, print  'divisible by 5'
if the number is divisible by 3, print  'divisible by 3'
if the number is divisible by 5 and by 3 , print  'divisible by 5 and 3'
if the number is NOT divisible by 5 and by 3, print the value in myNumber
*/

let storedNumber = 13; 
if(storedNumber % 5 === 0 && storedNumber % 3 === 0){
    console.log('\nDivisible by 5 and 3')
}
else if(storedNumber % 5 === 0){
    console.log('\nDivisible by 5');
}
else if (storedNumber % 3 === 0){
    console.log('\nDivisible by 3');
}
else{
    console.log(`\n${storedNumber}`);
}

/*
let planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', 'Venus', 'Pluto'];
if earth is mentioned as first name in the array, print 'earth is mentioned in expected index
otherwise add earth as first name in the array, then print the array
*/

let planets = ['Earth','Mercury', 'Jupiter', 'Saturn', 'Mars', 'Venus', 'Pluto'];
/*if((planets.includes('Earth', 0)) === true){
    console.log('Earth is mentioned in expected index')
}*/
if(planets[0] === 'Earth'){
    console.log('\nEarth is mentioned in expected index')
}
else{
    planets.unshift('Earth');
    console.log(`\nNew planets array is: ${planets}`);
}

/*
const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby']
if BASKETBALL is present in the array, print 'BASKETBALL is mentioned in the sports array'
if BASKETBALL is present in index-2, print 'BASKETBALL is present at index-2'
if BASKETBALL Is NOT present in the array, replace index-2 value with BASKETBALL and print the value which you replaced.
*/

const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby']

if(sports[2] === 'BASKETBALL'){
    console.log('\nBasketball is present at index 2')
}
else if((sports.includes('BASKETBALL')) === true){
    console.log('\nBasketball is mentioned in the sports array')
}
else{
    console.log('\nThe replaced value is: ' + sports.splice(2, 1, 'BASKETBALL'));
    //console.log(`New array: ${sports}`);
}


