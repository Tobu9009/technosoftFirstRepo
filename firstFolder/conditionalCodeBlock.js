/*
get soya milk if its not expiring wihtin 7 days 
    buy 2 soy milks
    and buy 1 bread
otherwise check for almond milk 
    buy one almond milk
otherwise check for regular milk and not expiring in 3 days 
    buy regular milk
otherwise 
    call at home


if soyaMilkPresent && isSoyaMilkExpirationDays > 7
    buy 2 soya milk
    buy 1 bread
else almondMilkPresent
    buy 1 almond milk 
is regularMilkPresent && isRegularMilkExpirationDays > 3 
    buy regular milk 

Conditional code blocks 

1. If Else Block
2. Switch block 

when we have different actions to do depending upon condition(s)


*/

var dayName = '';
var isMeeting = true; 

/*
syntax for if block:
if(condition(s)){
    if block 
    code will execute if condition(s) will result into true 

}
*/
if(2 === 12){
    console.log("hello world")
} //will not print out 

let countryName = 'UniTEd StaTEs Of AMEriCa';
/*if country name is united states of america, print the country name in uppercase 
*/
let upperCaseCountryName = countryName.toUpperCase();
let toExpectedCountryName = 'United states of america'.toLowerCase();
if(upperCaseCountryName.localeCompare(toExpectedCountryName) === 0){
    console.log(countryName.toUpperCase());
}
/*if countryName is not united States of america, print 'You are not USA citizen'

if(condition(s)){
    code block will execute if condition(s) result into true 
}
else{
    code will execute if condition(s) result into false 
}
*/
var dayName = '';
var isMeeting = true; //or false

if((dayName === 'mon' || dayName === 'thu') && !isMeeting){
    console.log('I can work from home today');
}
else if(dayName === 'tue' || dayName === 'wed' || dayName === 'fri' || isMeeting ){
    console.log('I need to go to office today')
}
else if((dayName === 'sat') || dayName === 'sun'){
    console.log('Enjoy')
}
else{
    console.log('Incorrect dayName')
}

let sports = ['Football', 'Soccer', 'Baseball', 'Rugby'];
//if 'Swimming' is not mentioned as one of the sports, add in the array
//if it's mentioned, print the index at which it is present 

/*check if array includes swimming 
    print the index of swimming (indexOf)
else 
    push-function to add swimming in the array 

*/
if(sports.includes('swimming')){
    console.log(sports.indexOf('Swimming'));
}
else{
    sports.push('swimming');
}

/*
switch block 
1.all conditions are related to only one variable 
2. all conditions are comparing equals 
3. for every block, we must have only one conditiion 
if num=2, print(num is two)
if num is equal to 5, print 'num is five'
if num is equal to 15m print 'num is fifteen'
if num is equal to 10, print 'num is ten'
if num is equal to 20, print 'num is twenty'
*/
let num = 0; 
if(num == 2){
    console.log(('num is two'));
}
else if(num === 5){
    console.log('num is five');
}
else if(num === 10){
    conosle.log('num is fifteen')
}
else {
    console.log(`num is ${num}`)
}
/*
switch(num){
    case 2:
        code here will execute num === 2
        break; //defines as last line for the case block
    case 5: 
        code here will execute is num === 5
        break; 
    case 15: 
        code here will execute is num === 15; 
    default: 
        run this code if num is not equals to any above cases 
}

if name is happy, print good name
if name is joy, print the name and its length 
    print 'your name is too short'
if name is john, print name in uppercase
if name is not from above list, print 'you have a different name than we expected'

*/

let personName = 'Happy';
let uppercaseName = personName.toUpperCase();
/*if(uppercaseName === 'HAPPY'){
    console.log('Good name');
}
else if (uppercaseName === 'JOY'){
    console.log(`The name is ${personName} and the length is ` + personName.length)
}
else if (uppercaseName === 'JOHN'){
    console.log(uppercaseName);
}
else{
    console.log('You have a different name than we expected')
}
*/
if(uppercaseName.localeCompare('HAPPY') === 0){
    console.log('Good name');
}
else if (uppercaseName.localeCompare('JOY') === 0){
    console.log(`The name is ${personName} and the length is ${personName.length}`)
    }
else if(uppercaseName.localeCompare('JOHN') === 0){

}

/*switch(myName.toUpperCase()){
    case 'HAPPY':
        console.log('Good name')
        break;
    case 'JOY':
        console.log(`name: ${myName}\nlength: ${myName.length}\n Your name too short`);
        break;
    case 'JOHN': 

}
*/
//self exercise NOTE: WRONG
/*
let dayOfTheWeek = 'Tue';
switch(dayOfTheWeek.toLowerCase()){
    case 'mon' || 'monday':
        console.log('Today is the Technosoft class')
        break;
    case 'tue' || 'tuesday': 
        console.log('Today is self learning day')
        break;
    case 'wed' || 'wednesday':
        console.log('Today is the Technosoft class')
        break;
    case 'thu' || 'thursday':
        console.log('Today is self learning day')
        break;
    case 'fri' || 'friday':
        console.log('Today is the Technosoft class')
        break;
    case 'sat' || 'saturday':
        console.log('Today is lab session day')
    case 'sunday' || 'sunday'
    default:
        console.log('Entered day-calue is not valid')
}
*/
let dayOfTheWeek = 'Tue';
switch(dayOfTheWeek.toLowerCase()){
    case 'mon':
    case 'monday':
    case 'wed':
    case 'wednesday':
    case 'fri':
    case 'friday':
        console.log('today is technosoft class')
}





