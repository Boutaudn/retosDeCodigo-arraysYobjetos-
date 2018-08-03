/* Ejemplo:

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5] */


// resuelto con filter
function filterOddElements(arr) {
  let arrInpares = arr.filter(arr => arr%2 !== 0 );
    return arrInpares;
}



//resuelto con for

let arrInpares = [];

for (let i = 0; i<arr.length; i++) {
  var arrTotal = arr[i];
  if (arrTotal%2!==0) {
    arrInpares.push(arrTotal)
  }
}

console.log(arrInpares);

