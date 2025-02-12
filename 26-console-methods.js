// Console

//log
console.log("¡Hola, JavaScript!");

// error
console.error("Este es un mensaje de error");
console.error(
  "Este al conectarse a la base de datos: ",
  new Error("Conexión fallida.")
);

// warn
console.warn("Este es un mensaje de advertencia.");

// info
console.info("Este es un mensaje de información adicional.");

// table
let data = [
  ["Cesar", 37],
  ["Raquel", 21],
];
console.table(data);

data = [
  { name: "Cesar", age: 37 },
  { name: "Raquel", age: 21 },
];
console.table(data);

//group
console.group("Usuarios:");
console.log("Nombre: Cesar");
console.log("Edad: 37");
console.groupEnd();

// time
console.time("Tiempo de ejecución");
for (let i = 0; i < 1000; i++) {}
console.timeEnd("Tiempo de ejecución"); // El label tiene que ser igual que el principio.

// assert
let age = 17; // 18
console.assert(age >= 18, "Usuario debe ser mayor de edad");

// count
console.count("Click");
console.count("Click");
console.count("Click");
console.countReset("Click"); // resetear
console.count("Click");

// trace
function funcA() {
  funcB();
}
function funcB() {
  console.trace("Seguimiento de la ejecución");
}
funcA();

// clear
console.clear(); // no se muestra nada, limpia todo lo anterior en la consola
