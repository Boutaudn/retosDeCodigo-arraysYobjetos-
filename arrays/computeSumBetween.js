/*La suma entre 1 y 4 es 1 + 2 + 3 = 6.
Si num2 no es mayor que num1, debe devolver 0.
var output = computeSumBetween (2, 5);
console.log (salida); // -> 9*/

function computeSumBetween(num1, num2) {
    if (num1 > num2){
      return 0;
      }
      return num1 + (num1++) + (num2--);
  }
//funciona en la consola pero el lms no lo acepta y el test dice puras cosas raras