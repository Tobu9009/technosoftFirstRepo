//due Tuesday-July 5th

const sentence1 = 'Hello dear, how are you doing?'
let result1 = 0;

/* 
if the length of sentence1 is greater than or equals to 10 
    assign 15 in result1 
otherwise
    assign 25 in result1 
*/

sentence1.length >= 10 ? result1 = 15 : result1 = 25;
console.log(`result1 -> ${result1}`);

/*
replace all instances of a/A with 'Alpha' print the result in console
*/

const sentence2 = 'HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.'
let newSentence = sentence2.replace(/a/gi,'Alpha');
console.log(newSentence);

/*
print the result in console: 
1. the length of sentence-3 
2. does sentence-3 starts with 'health' (ignore cases)
3. does sentence-3 contains 'Body' (ignore cases)
4. index of 'Body' in sentence-3 (ignore cases)
5. the last character in sentence-3 
6. word 'Body' is present only once. (true or false)
*/

const sentence3 = 'HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.'
//1 
console.log('\n'+ sentence3.length);
//2
let startsWithPattern ='Health';
startsWithPattern = startsWithPattern.toUpperCase();
let startsWithHealth = sentence3.toUpperCase().startsWith(startsWithPattern);
console.log(`\nDoes the sentence start with 'health'?: ${startsWithHealth}`);
//3
let containsPattern = 'Body';
containsPattern = containsPattern.toUpperCase();
let sentenceContainsPattern = sentence3.toUpperCase().includes(containsPattern);
console.log(`\nDoes the sentence contain 'body'?: ${sentenceContainsPattern}`);
//4
let indexOfWhatImLookingFor = sentence3.toUpperCase().indexOf(containsPattern);
console.log(`\nThe index is: ${indexOfWhatImLookingFor}`);
//5
let lastIndex = sentence3.length - 1;
let charAtLastIndex = sentence3.charAt(lastIndex);
console.log(`\nThe last character on the sentence is: ${charAtLastIndex}`);
//6
let firstOccurance = sentence3.toUpperCase().indexOf(containsPattern);
let lastOccurance = sentence3.toUpperCase().lastIndexOf(containsPattern);
firstOccurance === lastOccurance ? console.log('\nThe word body is present only once: ' + true) 
: console.log('\nThe word body is present only once: ' + false);
 






