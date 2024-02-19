// */
// /**
//  * @name getBiggestNumber
//  * @description Devuelve el número más grande de un array
//  * 
//  * @param {number[]} numbers - Un array de números
//  * @returns {Number} El número más grande del arrray {numbers}
//  *
//  * @example
//  *  getBiggestNumber([3, 8, 2, 1, 10]) // returns 10
//  */

function getBiggestNumber(numbers) {
    if (numbers.length === 0) {
        throw new Error("El array no puede estar vacío.");
    }
    return Math.max(...numbers);
}

console.log(getBiggestNumber([3, 8, 2, 1, 10]));

// throw new Error es una construcción en JavaScript que se utiliza para lanzar un error explícitamente en una función. Cuando se ejecuta throw new Error("mensaje"),
//  se crea una nueva instancia del objeto Error con el mensaje especificado y se lanza como una excepción.
//  Esto detendrá la ejecución normal del programa y se propagará hacia arriba en la pila de llamadas hasta que se maneje con un bloque try...catch o cause la terminación del script.