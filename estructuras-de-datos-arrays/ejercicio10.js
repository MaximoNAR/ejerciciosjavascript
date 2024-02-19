
// Arrays 2D
// Mayor número
// Crear un programa que dado un array 2d de números, indique cuál es el mayor de ellos. 
// El array debe estar guardado en una variable (no hace falta ingresarlo). Array de ejemplo:





let array2D = [
    [1, 3, 5],
    [9, 2, 4],
    [7, 6, 8]
];

let mayorNumero = null;

for (let i = 0;i < array2D.length; i++){
    for(let j = 0; j < array2D[i];j++){
        if(array2D[i][j] > mayorNumero){
            mayorNumero = array2D[i][j]
        }
    }
}

console.log("El mayor numero en el array es :" + mayorNumero)
