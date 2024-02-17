const ladosDelDado = [
  "Lado 1",
  "Lado 2",
  "Lado 3",
  "Lado 4",
  "Lado 5",
  "Lado 6",
];

for (let i = 0; i < ladosDelDado.length; i++) {
  ladosDelDado[i] = i + 1;
}
console.log(ladosDelDado);

const aleatorio = (Math.random() * 7).toFixed(0);

console.log(aleatorio);

let elegir = 2;

if (ladosDelDado.includes(elegir)) {
  console.log("La opción elegida está dentro del array.");
} else {
  console.log("La opción elegida NO está dentro del array.");
}

if (elegir == aleatorio) {
  console.log("Felicidades adivinaste el numero");
} else {
  console.log("No has podido adivinar te falta magia");
}
