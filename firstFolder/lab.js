//have array 
//create a variable = index[1]
let cars =['Tesla', 'Volvo', 'BMW'];
let volvo = cars[1];
console.log(volvo);
//use shift function to push toyota in 
cars.unshift('Toyota');
console.log(cars);
cars.pop();
console.log(cars);
//use toString to convert cars array into string
//split by ' '
//each split will be a varible 
//toUppercase each variable
let newStringFromArray = cars.toString().toUpperCase();
let carsLength = cars.length;
console.log(newStringFromArray);
console.log(`\nthe length of cars is: ${carsLength}`)
//use replace function
//replace 'Toyota' with Mazda
let upperCaseMazda = 'Mazda'.toUpperCase();
let replacedString = newStringFromArray.replace('TOYOTA', upperCaseMazda)
console.log(replacedString);










