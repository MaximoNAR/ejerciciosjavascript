// Crear un programa que permita escoger entre cara o cruz. El programa luego debe generar un resultado aleatorio y mostrar si se acertó o
// no. El programa debe mostrar en cada vuelta cuántas rondas seguidas acertadas van, y si en algún momento se erra, reiniciar el contador a
// 0. También debe llevar una cuenta de la cantidad máxima de rondas seguidas que se hizo sin errar. Cuando se ingresa la palabra SALIR, en
// vez de CARA o CRUZ, el programa debe mostrar la cantidad máxima de rondas seguidas acertadas junto a un mensaje de despedida, y terminar su ejecución.

//Soluciones 

const cara = 0;

const cruz = 1;

const usuarioSelec = cara;

const aleatorio = Math.floor(Math.random()* 101);

const parImpar = aleatorio % 2;

const print = 0
const intentos = 10

while (print < 10){
    if(cara === parImpar){
        console.log("Felicidades ganaste salio par")
    }
    else {
        console.log("Perdiste salio impar")
    }
    break;
}
