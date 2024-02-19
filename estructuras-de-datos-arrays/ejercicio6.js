// Tragamonedas

// Crear un programa que permita ingresar un conjunto de 5 símbolos y determine si son iguales.
//  Si lo son, mostrar un mensaje indicando que se ha ganado. Si se ingresan más de 5 sólo deben evaluarse los primeros 5. Ejemplo:

const simbolos = [1, 1, 1, 1, 1]

let sonIguales = simbolos.every(function(simbolo){
    return simbolo === simbolos[0];
});


if (sonIguales) {
    console.log("¡Felicidades! Todos los símbolos son iguales. ¡Has ganado!");
} else {
    console.log("Los símbolos ingresados no son todos iguales.");
}

// EL METODO EVERY VERIFICA SI TODOS LOS ELEMENTOS CUMPLEN CON UNA CONDICION ESPECIFICA 