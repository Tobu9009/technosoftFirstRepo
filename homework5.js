/*
Convert any sentence into TitleCase 
ignore cases
*/

sentence1 = 'yOu onLY lIvE OncE unless you are a cat';
sentenceLowerCase = sentence1.toLowerCase();
let sentenceSplit = sentenceLowerCase.split(' ');
let abbr = '';
for(i = 0; i <= sentenceSplit.length - 1; i++){
    abbr =abbr  +sentenceSplit[i].substring(0,1).toUpperCase() + sentenceSplit[i].substring(1) + ' ';
}
console.log(`\n${abbr}`)

/*
reverse a string (word by word)
ignore cases
'Learn -> Learn'
*/

let stringToLowerCase = sentence1.toLowerCase();
let sentenceSplit2 = stringToLowerCase.split(' ');
let reversedString = '';
for(i = sentenceSplit2.length - 1; i >= 0; i--){
    reversedString = reversedString + sentenceSplit2[i] + ' ';
}
console.log(`\n${reversedString}`)
/*
Find the total number of numbers in the array
[1, 2, 3, 4, 5] -> 15
[-1, 1] -> 0
*/

let numbers = [-1, 1];
let total = 0;
for(i = 0; i <= numbers.length - 1; i++){
    total = total + numbers[i];
}
console.log(`\n${total}`);

/*
Find the average of the given array
average = total/numberOfValues

[1, 2, 3, 4, 5] -> 15/5 -> 3 
[1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx

*/

numbers = [2, 4, 12, 3];
let average = 0;
for(i = 0; i <= numbers.length - 1; i++){
    total = total + numbers[i];
}
average = total/numbers.length
console.log(`\n${average}`);

