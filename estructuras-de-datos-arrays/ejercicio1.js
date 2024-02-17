// Menor número

// Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con el menor número ingresado. Ejemplo:

const numeros = [1, 2, 3, 4, 5, 6, 7, 86, 54, 43, 32];

const numeroIngresado = 7;
let arrayNumeros = numeros.splice(" ");

for (let i = 1; i < numeroIngresado;i++){
    let numero = i;
    if(numero < i){
        i = numero;
    }
}
console.log(`El menor número ingresado es: ${numero}`);