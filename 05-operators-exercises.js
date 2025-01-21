// 1. Crea una variable por cada operación aritmética
let suma = 5 + 5;
let resta = 5 - 5;
let multiplicacion = 5 * 5;
let division = 5 / 5;
let modulo = 5 % 5;
let exponente = 5 ** 5;

// 2. Crea una variable para cada tipo de operación de asignación, que haga uso
// de las variables utilizadas para las operaciones aritméticas

suma += 1;
resta -= 1;
multiplicacion *= 1;
division /= 1;
modulo %= 1;
exponente **= 1;

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación
console.log(4 < 5);
console.log("Hola Mundo" == "Hola Mundo");
console.log(4 > 1);
console.log(4 != 5);
console.log(4 !== 5);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(10.5 >= 11);
console.log("a" == "b");
console.log(Symbol("mysymbol") === 1);
console.log(9 < 9);
console.log(undefined != null);

// 5. Utiliza el operador lógico and
console.log(4 == 4 && 5 == 4);

// 6. Utiliza el operador lógico or
console.log(6 != 3 || 6 < 5);

// 7. Combina ambos operadores lógicos
console.log(("texto" == null && 4 > 3) || 10.5854 !== 10);

// 8. Añade alguna negación
console.log(!(true == true));

// 9. Utiliza el operador ternario
const isWorking = true;
isWorking
  ? console.log("Sigue trabajando.")
  : console.log("Consigue un trabajo!");

// 10. Combina operaciones aritméticas, de comparacioón y lógicas
console.log((5 + 5 == 10 && 10 / 2 != 5) || "texto" === "texto");
