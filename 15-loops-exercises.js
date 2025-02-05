// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 1; i <= 20; i++) {
  console.log(`Número: ${i}`);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let total = 0;
for (let i = 0; i <= 100; i++) {
  total += i;
  console.log(i);
}
console.log("total:", total);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 0; i <= 50; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
const myArray = ["Cesar", "Antonio", "Ana", "Sandra", "Juan"];

for (const e of myArray) {
  console.log("Nombre:", e);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
const vocals = ["a", "e", "i", "o", "u"];
const text = "Murcielagogo";
let totalVocals = 0;
for (const e of vocals) {
  for (const i of text) {
    if (e == i) totalVocals += i.length;
  }
}
console.log("Total vocales:", totalVocals);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let producto = 0;
let multiplication = 1;
const numbers = [1, 5, 2, 5, 1, 2, 7, 9, 1];
for (let i = 1; i <= numbers.length; i++) {
  multiplication *= numbers[i];
  if (multiplication % 2 == 0) producto = multiplication;
}
console.log(producto);

// 7. Escribe un bucle que imprima la tabla de multiplicación del 5
for (let i = 1; i <= 12; i++) {
  console.log(`5 * ${i} = ${5 * i}`);
}
// 8. Usa un bucle para invertir una cadena de texto
const text2 = "prueba reto";
for (let i = text2.length - 1; i >= 0; i--) {
  let textInverse = "";
  console.log((textInverse += text2[i]));
}

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let a = 0;
let b = 1;
let secuencia = [];

for (let i = 0; i < 10; i++) {
  secuencia.push(a);
  //console.log(a);

  [a, b] = [b, a + b];
  console.log(b);
}

console.log(secuencia);
// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
const nArray = [2, 10, 5, 55, 48, 64, 1, 15];
let newArray = [];
for (const element of nArray) {
  if (element > 10) {
    newArray.push(element);
  }
}
console.log(newArray);
