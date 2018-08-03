"ESTE ESTÁ SIN TERMINAR"
/*var output = convertScoreToGrade(91);
console.log(output); // -> 'A'*/

/* stiwch que no funciona como funcion, solo como switch por separa
function convertScoreToGrade(score) {
  switch (true) {
    case (90 <= score && score <= 100):
      output = 'A';
      break;
    case (80 <= score && score <= 89):
      output = 'B';
      break;
    case (70 <= score && score <= 79):
			output = 'C';
      break;
    case (60 <= score && score <= 69):
			output = 'D';
      break;
    case (0 <= score && score <= 59):
			output = 'F';
      break;
    default:
      'PUNTUACION INVALIDA';
      break;
	}
} */
switch (true) {
	case (age <= 3):
		alert('¡Eres un Toddler!');
	break;
	case (4 >= age < 5):
		alert('¡Eres un Preschool!');
	break;
	case (5 >= age < 11):
		alert('¡Eres un Gradeschooler!');
	break;
	case (11 >= age < 17):
		alert('¡Eres un Teen!');
	break;
	case (17 >= age < 21):
		alert('¡Eres un Young Adult!');
	break;
	case  (age >= 21):
		alert('¡Eres todo un adulto!');
	break;
	default:
		alert('¡ERROR! Ingresa una edad válida (en numeros enteros)');
		break;
}

if (90 <= score <= 100) {
  return 'A';
} else if (80 <= score && score <= 89) {
  return 'B';
} else if (70 <= score && score <= 79) {
	return 'C';
} else if (60 <= score && score <= 69) {
	return 'D';
} else if (0 <= score && score <= 59) {
  return 'F';
} else {
  return 'PUNTUACION INVALIDA';
}


function convertScoreToGrade(score) {
  let answer = [];
  if (90 <= score <= 100) {
    answer = 'A';
    } else if (80 <= score && score <= 89) {
      answer = 'B';
    } else if (70 <= score && score <= 79) {
  	   answer = 'C';
    } else if (60 <= score <= 69) {
  	   answer = 'D';
    } else if (0 <= score <= 59) {
        answer = 'F';
    } else 
        answer = 'PUNTUACION INVALIDA';
	return answer
}


