// String
let name = "César JS";
let email = "cjtest@test.com";
let alias = `CJ`;

// Number
let age = 25; // Integer
let height = 1.75; // Decimal

// Boolean
let isTeacher = true;
let isStudent = false;

// Undefined
let undefinedValue;
console.log(undefinedValue);

// Null
let nullValue = null;

// Symbol  -  para crear valores únicos
let mySymbol = Symbol("mysymbol");

//BigInt
let myBigInt = BigInt(128390183081023810983018038018207147105120381239); // 1ra forma
let myBigInt2 = 128390183081023810983018038018207147105120381239n; // 2da forma

// Mostramos los tipos de datos
console.log(typeof name);
console.log(typeof alias);
console.log(typeof email);

console.log(typeof age);
console.log(typeof height);

console.log(typeof isTeacher);
console.log(typeof isStudent);

console.log(typeof undefinedValue);

console.log(typeof nullValue);

console.log(typeof myBigInt);
console.log(typeof myBigInt2);
