let word = ''
function acronym(word){
    let lowerCaseWord = word.toLowerCase()
    let lowerCaseWordSplit = lowerCaseWord.split(' ')
    let titleCase = ''
    for (let counter = 0; counter <= lowerCaseWordSplit.length-1 ; counter++) {
        titleCase = titleCase + lowerCaseWordSplit[counter].substring(0,1).toUpperCase() + lowerCaseWordSplit[counter].substring(1) + ' '// or charAt(0)   
    }
    return titleCase;
}
let apples = acronym('i like apples')
console.log(apples)