/*
create a function to return an array 
after removing given number from the given array


[1, 2, 3, 4, 5,] input 2 -> returns [1, 3, 4, 5];
[21, 32, 12, 43, 45, 65, 12] 12 -> [21, 32, 43, 45, 65]
[-1, 2, 43, 65] 11 ->[-1, 2, 43, 65]

*/

/*
create a function to reutn the missing smallest positive number in given array 
[1, 2, 3, 4, 5] -> 6
[-1, 0 , 2, 1] -> 3 
[1, 1, 2, 4, 4, 6, 4, 7, 9] -> 5

*/

/*
create a function to return the points to be marked against for over speeding

for every 5mph over the speed limit, 1 point should be marked

functon will: 
    take userSpeed and speedLimit as input 
    return the number of points should be marked against the license

sl = 60, us = 70 -> points = 2 
sl = 60, us = 63 -> points = 0
sl = 76, us = 70 -> points = 0
sl = 80, us = 88 -> points = 1

*/

class Class1{
    numToRemove(array, num){
        for(let i = 0; i <= array.length - 1; i++){
            if (array[i] == num){
                array.splice(i, 1);
            }
        }
        return array;
    }
    smallestMissingPosNumber(array){
        function swap(array, firstIndex, secondIndex){
            let temp = array[firstIndex];
            array[firstIndex] = array[secondIndex];
            array[secondIndex] = temp;
        }
        for(let i = 0; i < array.length; i++){
            while(array[i] > 0 && array[i] <= array.length && array[array[i] - 1] !== array[i]){
                swap(array, i, array[i] - 1)
            }
        }
        for(let j = 0; j < array.length; j++){
            if(array[j] !== j+1){
                return j + 1;
            }
        }
        return array.length + 1;
    }
    speedingFunction(userSpeed, userLimit){
        let speedingPoints = 0;
        let speedDifference = userSpeed - userLimit;
        if(speedDifference < 0){
            return 0;
        } 
        else{
            if(speedDifference % 5 === 0){
                speedingPoints  = speedDifference / 5 
            }
            else{
                let notDivisibleBy5 = speedDifference % 5 
                let speedDivisibleBy5 = speedDifference - notDivisibleBy5;
                speedingPoints = speedDivisibleBy5 / 5 
            }
        }
        return speedingPoints;
    }

}
module.exports = Class1;






