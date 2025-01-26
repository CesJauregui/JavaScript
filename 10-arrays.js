// array

// Declaración

let myArray = [];
let myArray2 = new Array();

// Inicialización
myArray = [2];
myArray2 = new Array(2);

console.log(myArray);
console.log(myArray2);

myArray = ["Cesar", "JS", "DEV", 24, true];
myArray2 = new Array("Cesar", "JS", "DEV", 24, true);

console.log(myArray);
console.log(myArray2);

myArray2 = new Array(3);
myArray2[0] = "Cesar";
//myArray2[0] = "Cesar";
myArray2[1] = "CJ";
myArray2[2] = "Dev";

console.log(myArray2);

myArray = [];
myArray[2] = "Cesar";
myArray[1] = "CJ";

console.log(myArray);

// Métodos comunes
myArray = [];

// push y pop
myArray.push("Cesar"); // Agregar elementos al final del array
myArray.push("CJ");
myArray.push("JavaScript");
myArray.push("25");

console.log(myArray);

myArray.pop(); // Elimina el último elemento del array
console.log(myArray);

// shift y unshift
myArray.shift(); // Elimina el primer elemento del array

myArray.unshift(); // Agregar uno o mas elementos al principio del arrayt

// length
console.log(myArray.length);

// clear
myArray = []; // primera forma de eliminar los elmentos del array

myArray.length = 0; // segunda forma de eliminar los elmentos del array

// slice
myArray.slice(1, 2); // Obtener los valores de los indices

// splice

myArray.splice(1, 2); // Elimina los elementos de rango de los indices introducidos

myArray.splice(1, 2, "Nueva entrada"); // Elimina los elementos de rango de los indices introducidos y agrega un nuevo valor.
