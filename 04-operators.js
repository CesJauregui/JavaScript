/*Operadores */

// Operadores Aritméticos
let a = 5;
let b = 10;
console.log(a + b); // Suma
console.log(a - b); // Resta
console.log(a * b); // Multiplicación
console.log(a / b); // División

console.log(a % b); // Módulo
console.log(a ** b); // Exponente

a++; // Incremento
console.log(a);

b--; // Decremento
console.log(b);

// Operadores de Asignación

let myVariable = 2;
console.log(myVariable);

myVariable += 2; // Sumar 2 a myVariable
console.log(myVariable);

myVariable -= 2;
myVariable *= 2;
myVariable /= 2;
myVariable %= 2;
myVariable **= 2;

// Operadores de Comparación
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
// a = 6;
console.log(a == 6); // Igualdad por valor
console.log(a == "6"); // Igualdad por valor
console.log(a == a);
console.log(a === a); // Igualdad por identidad (por tipo y valor)
console.log(a === 6); //true
console.log(a === "6"); //false
console.log(a != 6); // false a nivel de igualdad por valor
console.log(a !== "6"); // true a nivel de identidad

// Truthy values (valores verdaderos)

//Todos los números positivos y negativos menos el cero
//Todas las cadenas de texto menos las vacías
//El boolean true

// Falsy values (valores falsos)

//0
//0n
//null
//undefined
//NaN
//El boolean false
//Cadenas de texto vacías

// Operadores Lógicos

// and (&&) si una de las comparaciones es falsa, el resultado es false
console.log(5 > 10 && 15 > 20); // false
console.log(5 < 10 && 15 < 20); // true
console.log(5 < 10 && 15 > 20); // false
console.log(5 < 10 && 15 > 20 && 30 > 40); // false

// or (||) si una de las comparaciones se cumple, el resultado es true
console.log(5 > 10 || 15 > 20); // false
console.log(5 < 10 || 15 < 20); // true
console.log(5 < 10 || 15 > 20); // true
console.log(5 < 10 || 15 > 20 || 30 > 40); // true

console.log((5 < 10 && 15 > 20) || 30 > 40); // false
console.log((5 < 10 && 15 > 20) || 30 < 40); // true

//not (!) invierte el resultado
console.log(!true);
console.log(!false);

console.log(!(5 > 10 && 15 > 20)); // false
console.log(!(5 > 10 || 15 > 20)); // true

// Operadores Ternarios
const isRaining = true;
isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo");
