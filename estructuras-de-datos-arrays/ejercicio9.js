// Exterminador
// Crear un programa que permita ingresar una lista de animales separados por espacios y devuelva un mensaje con todos los animales
// menos los mosquitos y alacranes. Ejemplo:

// // Ingrese animales: 🐱 🐭 🐶 🦟 🦊 🦂

// // Animales sin insectos: [🐱, 🐭, 🐶, 🦊]


const animales = ["Tiburon", "Lagartija", "Rinoceronte", "Murcielago", "Halcon", "Mosquito", "Alacran"];
console.log(animales);
animales.splice(5, 6);
console.log(animales);
