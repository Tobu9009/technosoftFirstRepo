class MyClass {
    showSeasonName(monthName){
        switch(monthName.toLowerCase()){
            case 'jan':
            case 'feb':
            case 'dec':
                console.log('Winter season')
                break;
            case 'mar':
            case 'apr':
            case 'may':
                console.log('Spring Season')
                break;
            case 'jun':
            case 'jul':
            case 'aug':
                console.log('summer seaosn')
                break;
            case 'sep':
            case 'oct':
            case 'nov':
                console.log('fall season')
                break;
            default:
                throw 'Invalid month entered'
                break;
        }
    }
}
module.exports = MyClass