//Due by July 8th 
//1
/*
print the length of the countryName (without using string length property)
*/
let countryName = 'USA USA';
let lastIndexOfUSA = countryName.lastIndexOf('A');
let lengthOfCountryName = lastIndexOfUSA + 1; 
console.log(`\nLength of country name: ${lengthOfCountryName}`);

//2
/*
count the number of words in the sentence 
*/
const sentence = 'HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.'
let sentenceSplit = sentence.split(' ');
let wordCount = sentenceSplit.length;
console.log(`\nThe word count is: ${wordCount}`);


//3
/*convert any 4-word sentence into Titlecase*/
let sentence2 = 'hAvE a GReAt dAy';
let sentence2Split = sentence2.split(' ');
let firstLetterOfFirstWord = sentenceSplit[0].substring(0,1).toUpperCase();
let restOfFirstWord = sentence2Split[0].substring(1).toLowerCase();
let firstLetterOfSecondWord = sentence2Split[1].substring(0,1).toUpperCase();
let restOfSecondWord = sentence2Split[1].substring(1).toLowerCase();
let firstLetterOfThirdWord = sentence2Split[2].substring(0,1).toUpperCase();
let restOfThirdWord = sentence2Split[2].substring(1).toLowerCase();
let firstLetterOfFourthWord = sentence2Split[3].substring(0,1).toUpperCase();
let restOfFourthWord = sentence2Split[3].substring(1).toLowerCase();
console.log(`\n${firstLetterOfFirstWord}${restOfFirstWord} ${firstLetterOfSecondWord}${restOfSecondWord} ${firstLetterOfThirdWord}${restOfThirdWord} ${firstLetterOfFourthWord}${restOfFourthWord}`)

//4
/* create abbreviation for any 4-word sentence 
'have a great day' -> 'HAGD'
'YOu lIVe ONlY  ONcE -> 'YLOO'
'yOu neVER WaLk alOne' -> 'YNWA'
*/
sentence2 = 'yOu onLY lIvE OncE';
sentence2Split = sentence2.split(' ');
firstLetterOfFirstWord = sentence2Split[0].substring(0,1).toUpperCase(); 
firstLetterOfSecondWord = sentence2Split[1].substring(0,1).toUpperCase();
firstLetterOfThirdWord = sentence2Split[2].substring(0,1).toUpperCase();
firstLetterOfFourthWord = sentence2Split[3].substring(0,1).toUpperCase();
console.log('\n'+ firstLetterOfFirstWord + firstLetterOfSecondWord + firstLetterOfThirdWord + firstLetterOfFourthWord);

