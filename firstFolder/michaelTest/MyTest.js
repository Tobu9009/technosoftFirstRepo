const MyTestFunctions = require('./MyTestFunctions')
const mtf = new MyTestFunctions()

let numbers = [90, 23, 12, 13, 357, 1255, 1236, 124, 124, 0, 1];
let removedNumber = 90
let question1 = mtf.numberRemovalFunction(numbers, removedNumber);
console.log('Question 1, New Array with removed value: ' + question1);

numbers = [-1, 1, 2, 3, 4, 60, 11, 5, 4, 53, 90];
let question2 = mtf.lowestPositive(numbers)
console.log('Question 2, Displaying the lowest positive integer that does not appear in the array: ' + question2);

let result = ''
let userSpeed = 10
let speedLimit = 80
let question3 = mtf.checkSpeed(userSpeed, speedLimit)
console.log('Question 3, Displaying the amount of points added to the license: ' + question3);