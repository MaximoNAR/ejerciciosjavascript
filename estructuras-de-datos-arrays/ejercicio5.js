// Plantas
// Crear un programa que permita ingresar una lista de plantas con una oruga y una calavera (veneno) entre ellas. La oruga se come todas las
// plantas que hay a su derecha, hasta que se encuentra con el veneno. El programa debe mostrar las plantas sobrevivientes, que son todas
// las que están a la izquierda de la oruga y a la derecha del veneno. Ejemplo:

// Ingrese plantas y oruga: 🌱🌻🌱🐛🌱🌸🌱🌱💀🌷
// Plantas sobrevivientes: 🌱🌻🌱🌷


// Soluciones

const patronDePlantas = ["Flor", "Flor", "Cerezo", "Oruga", "Flor", "Flor", "Venenos"];

console.log(patronDePlantas);

patronDePlantas.splice(3, 4)

console.log(patronDePlantas);


// EL METODO SPLICE LO QUE REALIZA ES EL CAMBIO DEL CONTENIDO DE UN ARRAYT ELIMINANDO, CAMBIANDO O REEMPLAZZANDO O AGREGANDO ELEMENTOS