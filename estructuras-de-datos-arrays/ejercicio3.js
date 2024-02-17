// Encontrar índice

// Crear un programa que permite ingresar valores separados por espacios, y luego preguntar qué valor se desea encontrar el índice.
//  El programa debe devolver un mensaje con el índice del primer elemento que sea igual al buscado, o indicar si no se ha encontrado

// Soluciones


const numeros = [1, 4, 5, 6, 7, 8, 32, 34, 55, 11, 14]
let busqueda = numeros.indexOf(32)
let arrayNumeros = numeros.splice(" ");

let elemento = 5

console.log("el indice de 32 es " + busqueda);