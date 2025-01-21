// if/else if / else / ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let myName = "César";
if (myName == "César") {
  console.log("My name is: " + myName);
}

// 2. Imprime por consola un mensaje si el usuario y contraseña coincide con unos establecidos
const username = "cjone";
const password = "18cjone@";
let userNameInput = "cjone";
let passwordInput = "18cjone@";

if (userNameInput == username && passwordInput == password) {
  console.log("Iniciando sesión");
} else {
  console.log("usuario y/o contraseña incorrecto");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number = 3;
if (number > 0) {
  console.log("El número es positivo: " + number);
} else if (number < 0) {
  console.log("El número es negativo: " + number);
} else {
  console.log("El número es cero");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuantos años le faltan
let edad = 10;
if (edad >= 18) {
  console.log("Ya puedes votar!");
} else {
  console.log(`Te faltan ${18 - edad} años para votar.`);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiento de la edad
let edad2 = 17;
let estado = edad2 >= 18 ? "Adulto" : "Menor";
console.log(estado);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "Febrero";
if (
  mes == "Noviembre" ||
  mes == "Diciembre" ||
  mes == "Enero" ||
  mes == "Febrero"
) {
  console.log("Estamos en Verano");
} else if (
  mes == "Marzo" ||
  mes == "Abril" ||
  mes == "Mayo" ||
  mes == "Junio"
) {
  console.log("Estamos en Otoño");
} else if (mes == "Julio" || mes == "Agosto") {
  console.log("Estamos en Invierno");
} else if (mes == "Septiembre" || mes == "Octubre") {
  console.log("Estamos en Primavera");
} else {
  console.log("Mes incorrecto");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (
  mes == "Enero" ||
  mes == "Marzo" ||
  mes == "Mayo" ||
  mes == "Julio" ||
  mes == "Agosto" ||
  mes == "Octubre"
) {
  console.log(`El mes ${mes} tiene 31 días`);
} else if (
  mes == "Abril" ||
  mes == "Junio" ||
  mes == "Septiembre" ||
  mes == "Noviembre" ||
  mes == "Diciembre"
) {
  console.log(`El mes ${mes} tiene 30 días`);
} else if (mes == "Febrero") {
  console.log(`El mes ${mes} tiene 28 días (29 en años bisiestos)`);
}

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "Alemán";
let mensaje;

switch (idioma) {
  case "Inglés":
    mensaje = "Hello";
    break;
  case "Español":
    mensaje = "Hola";
    break;
  case "Tailandés":
    mensaje = "S̄wạs̄dī";
    break;
  case "Alemán":
    mensaje = "Hallo";
    break;
  default:
    mensaje = "Idioma no disponible";
    break;
}
console.log(`Saludo: ${mensaje} en ${idioma}`);

// 9. Usa un switch para hacer de nuevo el ejercicio 6
let mes2 = "Febrero";
let message;
switch (mes2) {
  case "Noviembre":
    message = "Estamos en Verano";
    break;
  case "Diciembre":
    message = "Estamos en Verano";
    break;
  case "Enero":
    message = "Estamos en Verano";
    break;
  case "Febrero":
    message = "Estamos en Verano";
    break;
  case "Marzo":
    message = "Estamos en Otoño";
    break;
  case "Abril":
    message = "Estamos en Otoño";
    break;
  case "Mayo":
    message = "Estamos en Otoño";
    break;
  case "Junio":
    message = "Estamos en Otoño";
    break;
  case "Julio":
    message = "Estamos en Invierno";
    break;
  case "Agosto":
    message = "Estamos en Invierno";
    break;
  case "Septiembre":
    message = "Estamos en Primavera";
    break;
  case "Octubre":
    message = "Estamos en Primavera";
    break;
  default:
    "No existe el mes";
}

console.log(message);

// 10. Usa un switch para hacer de nuevo el ejercicio 7
let day;
switch (mes2) {
  case "Noviembre":
    day = 30;
    break;
  case "Diciembre":
    day = 30;
    break;
  case "Enero":
    day = 31;
    break;
  case "Febrero":
    day = 28;
    break;
  case "Marzo":
    day = 31;
    break;
  case "Abril":
    day = 30;
    break;
  case "Mayo":
    day = 31;
    break;
  case "Junio":
    day = 30;
    break;
  case "Julio":
    day = 31;
    break;
  case "Agosto":
    day = 31;
    break;
  case "Septiembre":
    day = 30;
    break;
  case "Octubre":
    day = 31;
    break;
  default:
    "No existe el mes";
}
console.log(`El mes ${mes2} tiene ${day} días`);
