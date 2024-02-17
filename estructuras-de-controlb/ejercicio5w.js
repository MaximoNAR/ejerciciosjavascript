// Crear un programa que elija un número al azar entre 1 y 10. El programa debe luego pedir al usuario que intente adivinar el número. Por
// cada intento, debe avisar si el número a adivinar es mayor o menor que el número ingresado. El programa debe terminar cuando se
// adivina el número.

// Soluciones 

const azar = Math.floor(Math.random()* 10) + 1;

const usuario = 2
let intentos;
while (true){
    if(usuario === azar){
        console.log("Felicidades adivinaste el numero")
        break;
    }
    else if (usuario < azar){
        console.log("EL numero a adivinar es mayor ")
        break;
    }
    else {
        console.log("EL numero a adivinar es menor ")
        break;
    }
}