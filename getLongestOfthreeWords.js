/* Dado 3 palabras, getLongestOfThreeWords devuelve la más larga de tres palabras.

Notas:

Si hay un empate, debe devolver la primera palabra en el empate.
var output = getLongestOfThreeWords('estos', 'tres', 'palabras');
console.log(salida); // -> 'estos' */


function getLongestOfThreeWords(word1, word2, word3) {
  if (word2.length < word1.length && word3.length < word1.length) {
    return word1;
  }
  
  else if (word1.length < word2.length && word3.length < word2.length) {
    return word2;
  }

  else if (word1.length < word3.length && word2.length < word3.length) {
    return word3;
  }

  else if (word1.length === word2.length && word2.length === word3.length) {
  return word1;
  }
}