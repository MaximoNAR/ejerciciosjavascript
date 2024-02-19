// Crear un programa que permita ingresar una lista de flores y plantines (🌱). La lista debe comenzar con una flor, si no lo hace debe
// mostrar un mensaje de error. El programa debe convertir los plantines en flores, tomando como referencia la primera flor que encuentre a
// su izquierda. Ejemplo:

// Ingrese flores y plantines: 🌷🌱🌱🌱🌻🌱🌱🌸🌱🌱🌱🌱
// ¡Las flores han germinado!: 🌷🌷🌷🌷🌻🌻🌻🌸🌸🌸🌸🌸

//Solucion

const patron = ["Rosas", "Rosas", "Rosas", "Plantin", "Plantin", "Plantin"]

console.log(patron);

patron.splice(3,5, 'Margarita', 'Margarita', 'Margarita');

console.log(patron);

// EL METODO SPLICE LO QUE REALIZA ES EL CAMBIO DEL CONTENIDO DE UN ARRAYT ELIMINANDO, CAMBIANDO O REEMPLAZZANDO O AGREGANDO ELEMENTOS