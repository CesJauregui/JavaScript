// 1. Crea un función que utilice error correctamente
function funcA() {
  let connection = setTimeout(() => {
    console.error("No se pudo conectar al servicio");
  }, 1); //1000
  return connection;
}
funcA();

// 2. Crea una función que utilice warn correctamente
function funcB() {
  console.warn("Mensaje de advertencia.");
}
funcB();

// 3. Crea una función que utilice info correctamente
function funcC() {
  const user = "cesar";
  const pass = "12345";
  user && pass ? console.info("Usuario conectado.") : "";
}
funcC();

// 4. Utiliza table
const animals = [
  { name: "Perro", weight: 25 },
  { name: "Gato", weight: 9 },
  { name: "Pez", weight: 1 },
];
console.table(animals);

// 5. Utiliza group
console.group("Animals:");
console.log("- Perro");
console.log("- Gato");
console.log("- Ratón");
console.groupEnd();

// 6. Utiliza time
console.time("Tiempo de ejecución de funcA()");
funcA();
console.timeEnd("Tiempo de ejecución de funcA()");

// 7. Valida con assert si un número es positivo
let number = 1;
console.assert(number > 0, "El número es negativo");

// 8. Utiliza count
console.count("El contado está en el número");
console.count("El contado está en el número");
console.count("El contado está en el número");
console.countReset("El contado está en el número");
console.count("El contado empieza de nuevo");

// 9. Utiliza trace
console.trace("Trace del código");

// 10. Utiliza clear
console.clear();
