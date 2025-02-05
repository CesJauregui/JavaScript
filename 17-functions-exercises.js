// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function sum(a, b) {
  console.log(a + b);
}
sum(5, 4);

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

const myFunc = (myArray = []) => {
  let mayor = myArray[0];
  for (let index = 0; index < myArray.length; index++) {
    if (myArray[index] > mayor) {
      mayor = myArray[index];
    }
  }
  console.log(`El mayor es ${mayor}`);
};
myFunc([1, 4, 22]);

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
const myFun2 = function (cadena = "") {
  const vocales = "aeiouAEIOU";
  let totalVocales = 0;
  for (let i = 0; i < cadena.length; i++) {
    if (vocales.includes(cadena[i])) totalVocales++;
  }
  return console.log(totalVocales);
};
myFun2("cadenaaaa");

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function myFunc3(array = [""]) {
  let newArray = [];

  array.forEach((e) => {
    newArray.push(e.toUpperCase());
  });
  return console.log(newArray);
}
myFunc3(["menu 1", "menu 2"]);

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
const myFunc4 = (array1, array2) => {
  let newArray = [];
  array1.forEach((e1) => {
    array2.forEach((e2) => {
      if (e1 == e2) {
        newArray.push(e1);
      }
    });
  });
  return console.log(newArray);
};

myFunc4(["aaa", "bbb"], ["aaa", "ccc"]);

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
const myFunc5 = (array) => {
  let suma = 0;
  array.forEach((e) => {
    if (e % 2 == 0) {
      suma += e;
    }
  });
  console.log("Suma de pares:", suma);
};
myFunc5([1, 2, 2, 1]);

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function myFunc6(array) {
  let newArray = [];
  array.forEach((e) => {
    newArray.push([e, e ** 2]);
  });
  return console.log(newArray);
}

myFunc6([2, 4, 5, 6]);

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
const myFunc7 = (cadena = "") => {
  let newCadena = "";
  for (let i = cadena.length - 1; i >= 0; i--) {
    newCadena += cadena[i];
  }
  console.log(`Texto ingresado: ${cadena} | Texto invertido: ${newCadena}`);
};
myFunc7("texto");

// 10. Crea una función que calcule el factorial de un número dado
function myFun8(num) {
  let factorial = 1;
  console.log("Número ingresado:", num);

  for (let index = num - 1; index >= 1; index--) {
    factorial *= num;
    num--;
  }
  console.log(`El fatorial es: ${factorial}`);
}

myFun8(5);
