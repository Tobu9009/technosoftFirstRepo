/*
homework 6
Q1 create a function to convert any sentence into titleCase
*/
function toTitleCase(inputString){
    sentenceLowerCase = inputString.toLowerCase();
    let sentenceSplit = sentenceLowerCase.split(' ');
    let titleCase = '';
    for(i = 0; i <= sentenceSplit.length - 1; i++){
        titleCase += sentenceSplit[i].substring(0,1).toUpperCase() + sentenceSplit[i].substring(1) + ' ';
    }
    return titleCase;
}

console.log(toTitleCase('what IS yOUR nAme'))

/*
Q2 create a function to reverse a string
*/

function toReverseString(inputString){
    let stringToLowerCase = inputString.toLowerCase();
    let sentenceSplit2 = stringToLowerCase.split(' ');
    let reversedString = '';
    for(i = sentenceSplit2.length - 1; i >= 0; i--){
        reversedString = reversedString + sentenceSplit2[i] + ' ';
    }
    return reversedString;
}
console.log(toReverseString('kimi NO naWa'))

/*
Q3 create a function to add numbers of a given array 
*/

function totalArray(numbers){
    let total = 0;
    for(i = 0; i <= numbers.length - 1; i++){
        total = total + numbers[i];
    }
    return total;
}
console.log(totalArray([1, 89]));

/*
Q4 create a function to find the average of given array 
*/

function average(numbers){
    let average = 0;
    let total = 0;
    for(i = 0; i <= numbers.length - 1; i++){
        total = total + numbers[i];
    }
    average = total/numbers.length
    return average;
}
console.log(average([2, 4, 12, 3]));


