/*Ej de entrada: var output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6 */

function computeAverageLengthOfWords (word1, word2) {
    let firstWord = word1.length
    let secondWord = word2.length
    return (firstWord + secondWord) /2;
}

//ECMAScript 6

const computeAverageLengthOfWords = (word1, word2) => {
    return (word1.length + word2.length) /2
};