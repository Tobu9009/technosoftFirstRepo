class MyStringFunctions{
    toTitleCase (sentence) {
        let converted = '';
        const sentenceWords = sentence.toLowerCase().split(' ');
        for (let i=0 ; i <= sentenceWords.length-1 ; i++ ) {
            converted = converted + sentenceWords[i].substring(0,1).toUpperCase() + sentenceWords[i].substring(1) + " ";
        }
        return converted.trim();
    }
    toAbbreviation(sentence) {
        let abbr = '';
        const sentenceWords = sentence.toUpperCase().split(' ');
        for (let i=0 ; i <= sentenceWords.length-1 ; i++ ) {
            abbr = abbr + sentenceWords[i].substring(0,1);
        }
        return abbr;
    }
}
module.exports = MyStringFunctions;