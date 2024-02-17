// Saludos

// Crear un programa que pida ingresar nombres separados por espacios y devuelva un mensaje que contenga un saludo a cada persona. Ejemplo:

const nombres = ["Emilio", "Juan", "Maximo", "Nahuel"];

let arrayN = nombres.splice(" ");

let mensajeSaludo = ""

for (let i = 0; i < arrayN.length; i++){
     mensajeSaludo +=`Hola, ${arrayN[i]}!  ${" "}`;

}

console.log(mensajeSaludo);