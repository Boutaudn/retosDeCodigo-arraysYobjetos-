"ESTE ESTÁ SIN TERMINAR"
/* Ejemplo de entrada: var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair);  --> [4, 5] */


/*function findPairForSum(array, number) {
let formula = (array[a] + array[b] === number)
return console.log(array[a], array[b]);
}

for (let i = 0; i<array.length; i++) {
  for (let j = 1; j<array.length; j++) {
    if (array[i] + array[j] === number){
      return array[i], array[j];
    }

  }
}
function findPairForSum(array, number) {
  for (let i = 0; array.length > i <array.length; i++ < array.length) {
  for (let j = 1; array.length > j <array.length; j++ < array.length)

  if (array[i] + array[j] === number){
      return array[i], array[j];
    }
}

}*/



var result = [];
function findPairForSum(array, number){ 
  for(let i = 0; i < array.length; i++){
        for(let j = 1; j < array.length; j++){
            if(array[i] + array[j] === number){
                result.push(array[i], array[j]);
            }
        } 
    }return result;
   
}
