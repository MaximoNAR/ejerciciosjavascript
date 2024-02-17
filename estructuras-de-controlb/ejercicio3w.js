// Crear un programa que pida ingresar usuario y contraseña. El programa debe permitir hasta 3 intentos, cuando el usuario y/o la
// contraseña sean incorrectos. Si se ingresa correctamente ambos antes de 3 intentos erróneos, debe mostrar un mensaje de bienvenida. Si
// se ingresan 3 intentos erróneos, debe mostrar un mensaje de error y terminar el programa. El usuario y la contraseña ya deben estar
// guardadas en variables.


const usuario = "Maximo";
const contraseña = 123;

let falso1 = "Maximo"
let falso2 = 123


let intentos = 0

let maxIntentos = 3

while (intentos < maxIntentos) {
    if (usuario === falso1 && contraseña === falso2){
        console.log("Bienvenido " + usuario);
        break;
    }
    else {
        intentos ++;
        if (intentos < maxIntentos) {
            console.log(`Usuario y/o contraseña incorrectos. Intentos restantes: ${maxIntentos - intentos}`);
        }
    }
}
if (intentos === maxIntentos) {
    console.log("Se han agotado los intentos. Acceso denegado.");
}
