let userCreditScore = 690;
let isFirstTimeBuyer = true; 

let mortgageRate = userCreditScore > 700 && isFirstTimeBuyer === true ? 4.5 : 5.5 //700 is not greater than 700, so the left hand side of the && fails, 
//so false && true, so overall false, therefore 4.5 is printed
console.log(`\nCredit Score -> ${userCreditScore}`);
console.log(`First time home buyer -> ${isFirstTimeBuyer}`)
console.log(`Mortgage rate -> ${mortgageRate}`)

/*
let mortgageRate = userCreditScore > 700 && isFirstTimeBuyer === true ? 4.5 : 5.5
can be shortened to 
let mortgageRate = userCreditScore > 700 && isFirstTimeBuyer ? 4.5 : 5.5  
*/

condition ? thisHappensIfConditionIsMet : thisHappensOtherwise 


