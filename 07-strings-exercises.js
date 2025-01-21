// 1. Concatena dos cadenas de texto
let song = "Gone Away";
let author = "The Offspring";
console.log("Song: " + song + " - " + author);

// 2. Muestra la longitud de una cadena de texto
console.log("N° characters: " + song.length);

// 3. Muestra el primer y último caracter de un string
let myString = "This is an example string";
console.log("String: " + myString.length); // 25
console.log("First character: " + myString[0]);
console.log("Last character: " + myString[24]);

// 4. Convierte a mayúsculas y minúsculas un string
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());

// 5. Crea una cadena de texto en varias líneas
let myString2 = `
This is a string,
multiple
lines
`;

// 6. Interpola el valor de una variable en un string
let stringInterpolated = `Song playing: ${song} - ${author}`;
console.log(stringInterpolated);

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(myString.replaceAll(" ", "-"));

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(myString.includes("example"));

// 9. Comprueba si dos strings son iguales
console.log(myString.includes(myString2));

// 10. Comprueba si dos strings tienen la misma longitud
let string1 = "string 1";
let string2 = "string 2";
string1.length == string2.length ? console.log(true) : console.log(false);
