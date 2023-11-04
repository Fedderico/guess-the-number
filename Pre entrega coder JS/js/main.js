//////////////////////////////////////////////////primer test////////////////////////////


// const numeroSecreto = 42;

// let intento;
// let intentos = 0;

// intento = parseInt(prompt("Adivina el número secreto:"));

// while (intento !== numeroSecreto) {

//   intentos++;

//   if (intento < numeroSecreto){

//    alert("te quedaste corto mi bro.");
  
// } else if (intento > numeroSecreto){

//     alert("te pasaste mi bro.");
  
//   }
//   intento = parseInt(prompt("Adivina el número secreto:"));
// }

// alert(`Felicidades, adivinaste el número en ${intentos} intentos!`);




//////////////////////////////////////////////////Segundo test////////////////////////////

// const numeroSecreto = 42;

// let intento;
// let intentos = 0;

// intento = parseInt(prompt("Adivina el número secreto:"));

// while (intento !== numeroSecreto) {

//   intentos++;

//   if (intento < numeroSecreto){

//    alert("te quedaste corto mi bro.");
  
// } else if (intento > numeroSecreto){

//     alert("te pasaste mi bro.");
  
//   }
//   intento = parseInt(prompt("Adivina el número secreto:"));
// }

// alert(`Felicidades, adivinaste el número en ${intentos} intentos!`);




////////////////////////////////////////////////// Codigo final ////////////////////////////


function adivinaNumeroSecreto() {
  const numeroSecreto = 42;
  let intento;
  let intentos = 1;

  intento = parseInt(prompt("Adivina el número secreto:"));

  while (intento !== numeroSecreto) {
    intentos++;

    if (intento < numeroSecreto){
      alert("te quedaste corto mi bro.");
    } else if (intento > numeroSecreto){
      alert("te pasaste mi bro.");
    }
    intento = parseInt(prompt("Adivina el número secreto:"));
  }

  alert(`Felicidades, adivinaste el número en ${intentos} intentos!`);
}

adivinaNumeroSecreto();