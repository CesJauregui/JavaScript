// Funciones

// Simple
function myFunc() {
  console.log("My Function");
}

myFunc();

// Con parámetros
function myFuncWithParams(name) {
  console.log(`My name is: ${name}`);
}
myFuncWithParams("Cesar");

// Funciones anónimas

const myFunc2 = function (name) {
  console.log(`My name is: ${name}`);
};

myFunc2("Antonio");

// Arrow functions
const myFunc3 = (name) => {
  console.log(`My name is: ${name}`);
};

myFunc3("José");

// Parámetros
function sum(a, b) {
  console.log(a + b);
}
sum(5, 10);
sum(5); // NaN
sum(); // NaN

// Valores por defecto
function defaultSum(a = 0, b = 0) {
  console.log(a + b);
}

defaultSum();
defaultSum(5);
defaultSum(5, 10);

// Retorno de valores
function mult(a, b) {
  return a * b;
}
console.log(mult(5, 10));

// Funciones anidadas

function extern() {
  console.log("Función externa");
  function intern() {
    console.log("Función interna");
  }
  intern(); // intern() se llama dentro de extern()
}

extern();

// Funciones de orden superior
function applyFunc(func, param) {
  func(param);
}

applyFunc(myFunc3, "Función de Orden Superior");

// forEach
let myArray = [1, 2, 3, 4, 5];

myArray.forEach((value) => console.log(value));
