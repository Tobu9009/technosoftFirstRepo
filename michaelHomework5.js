//Homework number 5
  
//question 1: convert any sentence into titlecase (not 4 word limit)

const word = 'aPpLes are vErY tASty'

let lowerCaseWord = word.toLowerCase()
let lowerCaseWordSplit = lowerCaseWord.split(' ')
let titleCase = ''
for (let counter = 0; counter <= lowerCaseWordSplit.length-1 ; counter++) {
   titleCase = titleCase + lowerCaseWordSplit[counter].substring(0,1).toUpperCase() + lowerCaseWordSplit[counter].substring(1) + ' '// or charAt(0)
}
console.log('Question 1 : ' + titleCase)

// question 2: reverse a string (word by word)
const sports = 'Football Soccer Basketball Baseball Rugby'
let splitSports = sports.split(" ")
let reverse = ''
for (let counter = splitSports.length - 1; counter >= 0; counter--){
   reverse = reverse + splitSports[counter] + ' '
}
console.log('Question 2 : ' + reverse);

/**
 * Q3:
 * Find the total of numbers in the array
 * 
 * [1, 2, 3, 4, 5] -> 15
 * [1, 1, 1, 2, 3, 1, 2] -> 11
 * [1, -1] -> 0
 */

 const numberAddition = [1, 2, 3, 4, 5, 6]
 let totalOfNumbers = 0
for (let counter = 0 ; counter <= numberAddition.length - 1; counter++) {
   totalOfNumbers += numberAddition[counter]
} 
console.log('Question 3 : ' + totalOfNumbers)
/**
 * Q4:
 * Find the average of the given array:
 * 
 * avg = totalOfValues/numberOfValues
 * 
 * [1, 2, 3, 4, 5] -> 15/5 -> 3
 * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
 * [1, -1] -> 0/2 -> 0
 */
 const numberAddition2 = [1, 2, 3, 4, 5, 6]
 let averageOfNumbers = 0
for (let counter = 0 ; counter <= numberAddition2.length - 1; counter++) {
    averageOfNumbers += numberAddition2[counter]
    finalNumber = averageOfNumbers / numberAddition2.length 
} 
console.log('Question 4 : ' + finalNumber)