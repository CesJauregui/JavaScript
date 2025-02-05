// Loops o bucles

// for
for (let i = 0; i < 5; i++) {
  console.log(`Hola ${i}`);
}

const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(`Elemento: ${numbers[i]}`);
}

// while
let i = 0;
while (i < 5) {
  console.log(`Hola ${i}`);
  i++;
}

// Bucle infinito
// while(true){

// }

// do while
i = 0; // 6
do {
  console.log(`Hola do ${i}`);
  i++;
} while (i < 5);

// for of
const myArray = [1, 2, 3, 4];
const mySet = new Set(["cesar", "cj", "dev", 37]);
const myMap = new Map([
  ["name", "cesar"],
  ["email", "cjone@test.com"],
  ["age", 37],
]);

for (let element of myArray) {
  console.log(element);
}

for (let element of mySet) {
  console.log(element);
}

for (let element of myMap) {
  console.log(element);
}

// Buenas prácticas

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue; // que continue si i es igual a 5
  } else if (i == 7) {
    break; // se detiene en el índice 6 ya que i es igual a 7
  }
  console.log(`Hola ${i}`); // Se muestra del indice 0 al indice 9 sin contar el indice 5
}
