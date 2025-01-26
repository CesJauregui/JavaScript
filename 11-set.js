// set

// Declaración
let mySet = new Set();

console.log(mySet);

// Inicialización

mySet = new Set(["cesar", "JS", "DEV", 46, true]);

console.log(mySet);

// Métodos comunes

// add y delete

mySet.add("cj.com"); // añade un elemento al final
console.log(mySet);

mySet.delete("cj.com"); // elimina un elemento con el valor recibido (no un índice)
console.log(mySet);

// has
console.log(mySet.has("cesar")); // true si encuentra el valor ingresado / false si no lo encuentra

// size
console.log(mySet.size); // tamaño del set

// Convertir un set a array
let myArray = Array.from(mySet);
console.log(myArray);

// Convertir un array a un set
mySet = new Set(myArray);
console.log(mySet);

// No admite duplicados, si el valor en el add ya existe, no se agrega.
mySet.add("cesar");
console.log(mySet);
