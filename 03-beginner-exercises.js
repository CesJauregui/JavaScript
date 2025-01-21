// 1. Escribe un comentario en una línea
// Esto es un comentario en una misma línea.

// 2. Escribe un comentario en varias líneas
/*
Esto es un
comentario
de varias líneas
*/

// 3. Declara varibles con valores asociados a todos los datos de tipo primitivo
let myString = "Esto es un string";
let myInt = 15;
let myDecimal = 1.4;
let mybolean = true;
let mybolean2 = false;
let myUndefined;
let mySymbol = Symbol("mysymbol");
let myBigInt = BigInt(12312309120398120830192830912830912);

// 4. Imprime por consola el valore de todas las variables
console.log("String: " + myString);
console.log("Integer: " + myInt);
console.log("Decimal: " + myDecimal);
console.log("Boolean: " + mybolean);
console.log("Boolean: " + mybolean2);
console.log("Undefined: " + myUndefined);
console.log(mySymbol);
console.log("BigInt: " + myBigInt);

// 5. Imprime por consola el tipo de todas las variables
console.log("-----Variables y sus tipos:------");
console.log(typeof myString);
console.log(typeof myInt);
console.log(typeof myDecimal);
console.log(typeof mybolean);
console.log(typeof mybolean2);
console.log(typeof myUndefined);
console.log(typeof mySymbol);
console.log(typeof myBigInt);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
myString = "Esto es el string modificado";
myInt = 20;
myDecimal = 2.5;
mybolean = false;
mybolean2 = true;
myUndefined;
mySymbol = Symbol("mysymbolmodified");
myBigInt = BigInt(222222221111111111555555555511152);

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
myString = 1;
myInt = "nuevo string";
myDecimal = 5.51;
mybolean = Symbol("othersymbol");
mybolean2;
myUndefined = false;
mySymbol = BigInt(222222221111111111555555555511152);
myBigInt = true;

// 8. Declare constantes con valores asociados a todos los tipos de datos primitivos
const myConstString = "nuevo string 2";
const myConstInt = 22;
const myConstDecimal = 9.8;
const myConstbolean = true;
const myConstbolean2 = false;
const myConstUndefined = undefined;
const myConstSymbol = Symbol("constsymbol");
const myConstBigInt = BigInt(777717231276264781263818723687123);

// 9. A continuación, modifica lso valores de las constantes

/*
myConstString = "nuevo string modified";
myConstInt = 25;
myConstDecimal = 11.8;
myConstbolean = false;
myConstbolean2 = true;
myConstUndefined = undefined;
myConstSymbol = Symbol("constsymbolmodified");
myConstBigInt = BigInt(9919999999991829831767727299182);
*/

// 10. Comenta las líneas que produzcan algún error al ejecutarse
// Se comentó todo el bloque del ejercicio 9 ya que produce error de TypeError: Assignment to constant variable porque son constantes
