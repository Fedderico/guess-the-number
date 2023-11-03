const numeroSecreto = 42;

let intento;
let intentos = 0;

while (intento !== numeroSecreto) {
  intento = parseInt(prompt("Adivina el número secreto:"));

  intentos++;

  if (intento < numeroSecreto){

   alert("te quedaste corto mi bro.");
  
} else if (intento > numeroSecreto){

    alert("te pasaste mi bro.");
  
  }
alert(`Felicidades, adivinaste el número en ${intentos} intentos!`);

}// puse el alert aca adentro porque afuera del else if no me funcionaba nose pq ♥




