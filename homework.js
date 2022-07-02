/*
  F -> C 
  F -> K
  C -> F
  C -> K
  K -> F
  K -> C
*/

let fTemp = 90; 
let cTemp = (fTemp - 32) * 5/9;
console.log(`\n${fTemp} °F is equals to ${cTemp} °C`);

let kTemp = (fTemp + 459.67)* 5/9;
console.log(`\n${fTemp} °F is equals to ${kTemp} K`);

cTemp = 90;
fTemp = (cTemp * 9/5) + 32;
console.log(`\n${cTemp} °C is equals to ${fTemp} °F`);

kTemp = cTemp + 273.15;
console.log(`\n${cTemp} °C is equals to ${kTemp} K`);

kTemp = 90;
fTemp = 1.8 * (kTemp-273.15) + 32;
console.log(`\n${kTemp} K is equals to ${fTemp} °F`);

cTemp = kTemp - 273.15
console.log(`\n${kTemp} K is equals to ${cTemp} °C`)

