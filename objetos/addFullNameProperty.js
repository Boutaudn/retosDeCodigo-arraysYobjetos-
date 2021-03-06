/*
Dado un objeto que tiene una propiedad "firstName" y una propiedad "lastName", "addFullNameProperty" devuelve una propiedad "fullName" cuyo valor es una cadena con el nombre y el apellido separados por un espacio.

var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
addFullNameProperty(person);
console.log(person.fullName); // --> 'Jade Smith' */

function addFullNameProperty(obj) {
  var values = Object.values(obj);
  obj.fullName = values.join(' ');
  
}