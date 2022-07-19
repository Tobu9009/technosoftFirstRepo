//weather app 
/*
get the weather type of the day eg. sunny, rainy, cloudy, windy 
store the weather type into array for next 5 days 
based on the weather type print "show sun icon ', 'show rain icon', 'show cloud icon', 'show wind icon' etc
continue to print forecast for next 5 days 

output : 
day1 -> SHow sun icon 
day2 -> show rain icon 
day3 -> show cloud icon 
day4 -> show rain icon 
day5 -> show cloud icon

*/

let typeSunny = 'sunny'
let typeRainy = 'rainy'
let typeCloudy = 'cloudy'
let typeWindy = 'windy'
let forecastArray = [typeSunny, typeRainy, typeCloudy, typeWindy, typeCloudy]
let day = 1;
for(i=0; i<=forecastArray.length-1; i++){
    if(forecastArray[i] === typeSunny){
        console.log(`day${i+1} -> Show sun icon`);
    }
    else if (forecastArray[i] === typeRainy){
        console.log(`day${i+1} -> Show rain icon`)
    }
    else if(forecastArray[i] === typeCloudy){
        console.log(`day${i+1}-> Show cloud icon`)
        
    }
    else if(forecastArray[i] === typeWindy){
        console.log(`day${i+1} -> Show wind icon`)
    }
}











