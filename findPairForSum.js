/* Ejemplo de entrada: var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair);  --> [4, 5] */

function findPairForSum(array, number){ 
  for (var i = 0; i < array.length; i++) {
      for ( var j = i + 1; j < array.length; j++) {
       if (array[i] + array[j] == number) {
         var newArr = [array[i], array[j]];
       }
      }
    }
    return newArr
  }
