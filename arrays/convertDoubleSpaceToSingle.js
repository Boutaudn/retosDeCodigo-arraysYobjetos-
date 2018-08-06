/* Ej de entrada: var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces" */


  function convertDoubleSpaceToSingle(str) {
    let expresionRegular = /\s*  \s*/;
    return str.split(expresionRegular).join(' ');
  } 