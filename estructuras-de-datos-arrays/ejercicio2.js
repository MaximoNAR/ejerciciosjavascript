// Suma de todos los números

// Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con la suma de todos los números.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 532, 423]

let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma +=numeros[i]
}

console.log("La suma de los elementos del array es:", suma);