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

let cTemp2 = 90;
let fTemp2 = (cTemp2 * 9/5) + 32;
console.log(`\n${cTemp2} °C is equals to ${fTemp2} °F`);

let kTemp2 = cTemp2 + 273.15;
console.log(`\n${cTemp2} °C is equals to ${kTemp2} K`);

let kTemp3 = 90;
let fTemp3 = 1.8 * (kTemp3-273.15) + 32;
console.log(`\n${kTemp3} K is equals to ${fTemp3} °F`);

let cTemp3 = kTemp3 - 273.15
console.log(`\n${kTemp3} K is equals to ${cTemp3} °C`)

