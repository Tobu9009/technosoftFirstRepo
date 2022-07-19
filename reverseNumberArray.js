let numbers = [2, 4, 12, 3];
let newArray = [];
let j = 0;
for(i = numbers.length - 1; i >= 0; i--){
    newArray[j] = numbers[i];
    j++;
}
console.log(newArray);