// 1. Crea un array que almacene cinco animales
let myArray = ["Perro", "Gato", "Conejo", "Ratón", "Pez"];
console.log(myArray);

// 2. Añade dos más. Uno al principio y otro al final
myArray.unshift("Cocodrilo");
myArray.push("Puma");

console.log(myArray);

// 3. Elimina el que se encuentra en tercera posición
myArray.splice(3, 1);
console.log(myArray);

// 4. Crea un set que almacene cinco libros
let mySet = new Set(["libro 1", "libro 2", "libro 3", "libro 4", "libro 5"]);
console.log(mySet);

// 5. Añade dos más. Uno de ellos repetido
mySet.add("libro 6", "libro 3");
console.log(mySet);

// 6. Elimina uno concreto a tu elección
mySet.delete("libro 1");
console.log(mySet);

// 7. Crea un mapa que asocie el número del mes a su nombre
let myMap = new Map([
  ["1", "Enero"],
  ["2", "Febrero"],
  ["3", "Marzo"],
  ["4", "Abril"],
  ["5", "Mayo"],
  ["6", "Junio"],
  ["7", "Julio"],
  ["8", "Agosto"],
  ["9", "Septiembre"],
  ["10", "Octubre"],
  ["11", "Noviembre"],
  ["12", "Diciembre"],
]);

console.log(myMap);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (myMap.has("5")) {
  console.log("El mes " + myMap.get("5") + " existe.");
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
myMap.set("verano", ["Enero", "Febrero", "Marzo"]);
console.log(myMap);

// 10. Crea un Array, tranformándolo a un Set y almacénalo e un Map
let myArray2 = [];
console.log(myArray2);

myArray2 = new Set();
console.log(myArray2);

let myMap2 = new Map();
console.log(myMap2);
