console.log("Hola bienvenido a mi proyecto");

//Algoritmo con funcion y condicional
let nombre; 

function nombrePaciente() {
    let nombre = prompt("¿Cuál es tu nombre?");
    console.log("Bienvenido " + nombre);
    return nombre
}

nombre = nombrePaciente()

let numeroPaciente = parseInt(prompt("¿Cuál es el número de turno de " + nombre + "?"));
  for (
    let turnoPaciente = numeroPaciente;
    turnoPaciente <= numeroPaciente;
    turnoPaciente++
  ) {
    console.log(
      "El paciente " + nombre + " tiene el turno " + turnoPaciente
    );

    if (turnoPaciente <= 5) {
      alert("Tenes una espera menor a 30 minutos");
      console.log("Tenes una espera menor a 30 minutos");
    } else {
      alert("Tenes una espera mayor a 30 minutos");
      console.log("Tenes una espera mayor a 30 minutos");
    }
  }
