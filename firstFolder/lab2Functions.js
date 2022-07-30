/*



*/
let age = 25;
function getSum(num1, num2){
    let res = num1 + num2;
    console.log(res);
}

/**
 * 
 * Business1 => 100k, 60k
 * Business2 => 120k, 70k
 * 
 */


function getTotal(){
    let total = getSum(100, 120) - getSum(60,70);
    console.log(`Profit ${total}`);
}

getSum();