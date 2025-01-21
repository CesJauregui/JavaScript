// Strings

// Concatenación
let myName = "César";
let greeting = "Hola, " + myName + "!";
console.log(greeting);
console.log(typeof greeting);

// Longitud
console.log(greeting.length);

// Acceso a caracteres
console.log(greeting[0]);
console.log(greeting[11]);

// Métodos comunes
console.log(greeting.toUpperCase()); // transforma a mayusculas
console.log(greeting.toLowerCase()); // transforma a minusculas
console.log(greeting.indexOf("é")); // Devuelve el indice de la cadena. Devuelve -1 si no encuentra la cadena
console.log(greeting.includes("Hola")); // Comprueba si existe (true) o false si no existe
console.log(greeting.slice(0, 10)); // Devuelve una parte de una cadena, dependiendo del índice ingresado
console.log(greeting.replace("César", "CJ")); // Reemplaza el texto: "César" por "CJ"

// Template literals (plantillas literales)

let message = `Hola, este
es mi 
curso de
JavaScript
`;

console.log(message);

let email = "cesar@test.com";
console.log(`Hola ${myName}! Tu email es ${email}`); // Interpolate (Interpolación de variables)
