/* Ejemplo:

Dado 3 cadenas, findShortestOfThreeWords devuelve el más corto de las cadenas dadas.

Notas:

Si hay empate, debe devolver la primera palabra en la lista de parámetros.
var output = findShortestOfThreeWords('a', 'dos', 'tres');
console.log(salida); // -> 'a' */

function findShortestOfThreeWords(word1, word2, word3) {
  if (word1.length < word2.length && word1.length < word3.length) {
    return word1;
  }
  
  if (word2.length < word1.length && word2.length < word3.length) {
    return word2;
  }

  if (word3.length < word2.length && word3.length < word1.length) {
    return word3;
  }

  if (word1.length === word2.length === word3.length) {
  return word1;
  }
};