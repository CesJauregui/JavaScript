// Map : esta conformado por clave - valor

// Declaración
let myMap = new Map();

console.log(myMap);

// Inicialización
myMap = new Map([
  ["name", "cesar"],
  ["email", "cesar@test.com"],
  ["age", "24"],
]);

console.log(myMap);

// Métodos y propiedades

//set
myMap.set("alias", "CJ"); // agrega una clave - valor
myMap.set("name", "cesar ant"); // actualiza el valor si la clave existe
console.log(myMap);

// get
console.log(myMap.get("name")); // obtiene la clave del map
console.log(myMap.get("surname")); // undefined si no existe

// has
console.log(myMap.has("surname")); // devuelve false porque no existe la clave "surname"
console.log(myMap.has("age")); // devuelve true porque sí existe la clave "age"

// delete
myMap.delete("email"); // elimina la clave y el valor
console.log(myMap);

// keys, values y entries
console.log(myMap.keys()); //  retorna un listado con solo las claves
console.log(myMap.values()); //  retorna un listado con solo los valores
console.log(myMap.entries()); //  devuelve una forma de recorrer todo el listado.

// size
console.log(myMap.size); // Devuelve el tamaño del map

// clear
myMap.clear(); // elimina todas las claves y valores
console.log(myMap);
