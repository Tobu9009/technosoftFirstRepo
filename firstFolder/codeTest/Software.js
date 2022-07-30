const Class1 = require('./Class1');
const msf = new Class1(); //creating class object 
let output = msf.numToRemove([1,2,5,4,5], 5)
console.log(`The new array is: ${output}`);

output = msf.smallestMissingPosNumber([-1, 1, 2, 3 , 4, 5, 6])
console.log(`The smallest missing positive number is: ${output}`);
       
output = msf.speedingFunction(100, 45);
console.log(`You got ${output} speeding points`);
