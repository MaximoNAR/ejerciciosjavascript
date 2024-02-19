// Multiplicar números individuales
// Crear un programa que pida ingresar números separados por espacios y luego pregunte por cuánto se desea multiplicar cada número. El
// programa debe devolver un mensaje con un array donde cada elemento es el resultado del elemento del primer array (en la misma posición) multiplicado por el número ingresado. Ejemplo:

// // Ingrese números: 5 7 15 22 40
// // Ingrese multiplicador: 2

// // El array resultante es: [10, 14, 30, 44, 80]


const numerosIngresados = [5, 6, 23, 56, 75]

console.log(numerosIngresados);

const multiplicadorIngresado = 2;

let resultados = numerosIngresados.map(function(numeroIngresado){
    return numeroIngresado*multiplicadorIngresado;

});

console.log("EL resultado de multiplicar cada numero por " + multiplicadorIngresado + "es" );

console.log(resultados);

// CUANDO UTILIZAMOS EL METODO MAP DEBEMOS DECLARAR UNA FUNCION CON LA CONDICION A CUMPLIR PARA EJECUTAR EL MISMO