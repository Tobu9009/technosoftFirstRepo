/*
[] represents array 

array: a datatype which can store one or more values
*/

let planets = ['Earth', 'Mercury', 'Venus', 'Jupiter'];
console.log(`\nplanets -> ${planets}`);
//console.log(`\nmyResult9 -> ${myResult9}`) //

/*to split the given string from a specific point to multiple strings 
functio: split()
returns -> Array 

'New York City' 
'New' 'York' 'City'

*/

let cityName = 'New York City iS tHe BESt ciTY iN The wORlD YoU CAn cHeCk'
const cityName_split_o = cityName.split('o');
console.log(`\nsplit by 'o' -> ${cityName_split_o}`);

const cityName_split_space = cityName.split(' ');
console.log(`\nsplit by ' ' -> ${cityName_split_space}`);

const cityName_split_nothing = cityName.split('');
console.log(`\nsplit by '' ${cityName_split_nothing}`);

const cityName_split_or = cityName.split('or');
console.log(`\nsplit by 'or' -> ${cityName_split_or}`);

