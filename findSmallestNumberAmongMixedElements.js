/*Notas:
Si el arreglo está vacío, debería devolver 0.
Si el arreglo no contiene números, debería devolver 0.
Ejemplo:
var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4*/

function findSmallestNumberAmongMixedElements(arr) {
	let arrSort = arr.sort()
	if (arrSort.length === 0 || typeof(arrSort[0]) === 'string' ){
		return 0;
		}
	return arrSort[0];		
}	
