// 1. Captura una excepción utilizando try-catch
let a;
try {
  console.log(a.length);
} catch {
  console.log("Se ha producido un error!");
}
// 2. Captura una excepción utilizando try-catch y finally
let isNumber = false;
try {
  isNumber[1];
} catch {
  console.log("Se ha producido un error en el ejercicio 2");
} finally {
  console.log("Fin del ejercicio 2");
}

// 3. Lanza una excepción genérica
let x;
try {
  x.name;
} catch (error) {
  //throw new Error("Se ha producido un error en el ejercicio 3");
}

// 4. Crea una excepción personalizada
class CustomException extends Error {
  constructor(message, cadena) {
    super(message);
    this.cadena = cadena;
  }
}

// 5. Lanza una excepción personalizada
function readString(myString) {
  if (myString.length != 22) {
    throw new CustomException("La cadena no tiene 22 caracteres", myString);
  }
  return myString;
}

try {
  console.log(readString("Cadena de 23 carateress"));
} catch (error) {
  console.log("Se ha producido un error en el ejercicio 5:", error.message);
}

// 6. Lanza varias excepciones según una lógica definida
function login(userName, passw) {
  const uname = "user123";
  const password = "123ABC#";

  if (typeof uname !== "string" || typeof password !== "string") {
    throw new TypeError("El usuario y contraseña debe ser de tipo String.");
  }
  if (userName != uname || passw != password) {
    throw new Error("Usuario y/o contraseña incorrecta.");
  } else {
    return console.log("Usuario y contraseña correcta");
  }
}

try {
  login("user", "123ABC#");
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Se ha producido un error de tipo:", error.message);
  } else if (error instanceof Error) {
    console.log("Se ha producido un error:", error.message);
  }
}
// 7. Captura varias excepciones en un mismo try-catch

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
// const myArray = [12, 24, "4.3", "texto", 2];
// let floatValue = 0.0;
// for (let i = 0; i < myArray.length; i++) {
//   const elements = myArray[i];
//   floatValue = parseFloat(elements);
//   if (isNaN(floatValue)) {
//     throw new TypeError(`El valor "${myArray[i]}" no es un número`);
//   }
//   try {
//     console.log(floatValue.toFixed(2));
//   } catch (error) {
//     console.log("error", error.message);
//   }
// }
// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
let myObject = {
  username: "cesar213",
  password: "1234CJ#",
  state: 1,
};
function validateObject(property) {
  for (const key in myObject) {
    if (!(property == key)) {
      throw new Error("La propiedad no se encuentra en el objeto");
    }
    return property;
  }
}
console.log(
  "La propiedad",
  validateObject("username"),
  "se encuentra en el objeto."
);

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
function simularSolicitud() {
  const exito = Math.random() < 0.1; // n% de probabilidad de éxito
  if (exito) {
    return "Datos recibidos del servidor";
  } else {
    throw new Error("Error al contactar al servidor");
  }
}
function attempts(accion) {
  const MAX_ATTEMPTS = 10;
  for (let i = 0; i < MAX_ATTEMPTS; i++) {
    try {
      const resultado = accion();
      console.log("Éxito:", resultado);
      return resultado; // La acción tuvo éxito, salimos del bucle
    } catch (error) {
      console.error(`Intento ${i + 1}:`, error.message);
    }
  }
}
attempts(simularSolicitud);
