
let num1 = 10;
console.log(`num1 = ${num1}`)
num1++;
console.log(`num1 = ${num1}`)

num1 = 10;
let num4 = num1++;
console.log(`num1 = ${num1}`);
console.log(`num1 = ${num4}`);

let Lvar1= 10;
let Lvar2= 20;
let Lvar3= 30;
let Lvar4= 40;

let res1 = Lvar1 + Lvar2++; //addition, assignment, post-increment
console.log(`\n\nLvar1 = ${Lvar1}`)
console.log(`Lvar2 = ${Lvar2}`);
console.log(`res1 = ${res1}`)

let res2 = Lvar1++ - ++Lvar2; //pre-increment, subtraction, assignment, post-increment
/* LVar2 = 22 
   
   res2 = -12
   LVar1 = 11
*/ 
console.log(`\n\nLvar1 = ${Lvar1}`); //prints Lvar1 incremented 11
console.log(`Lvar2 = ${Lvar2}`)         
console.log(`res2 = ${res2}`)

num3 = 30; 
num4 = '40'

num3NotEqlNum4 = num3 !== num4; 
console.loog(`${num3} !== ${num4} = ${num3NotEqlNum4}`);
