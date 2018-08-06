/*
Escribir una función llamada "convertObjectToList" que convierte un objeto literal en una array de arrays, como esto:

Argumento:

{
  name: 'Holly',
  edad: 35,
  papel: 'productor'
}
Valor de retorno:

[['name', 'Holly'], ['edad', 35], ['rol', 'productor']]
*/

function convertObjectToList(obj) {
  var arr = Object.entries(obj)
  return arr
}