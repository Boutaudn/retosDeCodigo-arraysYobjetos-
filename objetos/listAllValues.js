/*
Escribe una función llamada listAllValues que devuelve un array de todos los valores del objeto de entrada.

Ejemplo de entrada:

{
  name: 'Krysten',
  age: 33,
  hasPets: false
}
Valor de retorno de la función (salida):

['Krysten', 33, false] */

function listAllValues(obj) {
  var arr = Object.values(obj)
  return arr
}