// 1. Usa desestructuración para extraer los dos primeros elementos de un array
let myArray = [5, 8, 6, 9, 10];

let [value0, value1] = myArray;
console.log(value0);
console.log(value1);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let myArray2 = ["a", "b", "c", "d"];
let [val0, val1, val2, val3, val4 = "e"] = myArray2;
console.log(val0);
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let myObject = {
  name: "Cesar",
  surname: "Gomez",
  alias: "CJ",
  age: 18,
};

let { name, surname } = myObject;
console.log(name);
console.log(surname);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let { name: valObj0, age: valObj1 } = myObject;
console.log(valObj0);
console.log(valObj1);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let dog = {
  weight: 15,
  height: 30,
  bark: "No",
  owner: {
    name: "Cesar",
    lastName: "Gomez",
  },
};

let {
  owner: { name: ownerName },
} = dog;
console.log(ownerName);

// 6. Usa propagación para combinar dos arrays en uno nuevo
let myArray3 = [...myArray, ...myArray2];
console.log(myArray3);

// 7. Usa propagación para crear una copia de un array
let myArray4 = [...myArray];
console.log(myArray4);

// 8. Usa propagación para combinar dos objetos en uno nuevo
let myObject2 = {
  color: "black",
  model: "Chevrolet Taheo 2023",
  transmisition: "Automático",
};

let myObject3 = { ...myObject, ...myObject2 };
console.log(myObject3);

// 9. Usa propagación para crear una copia de un objeto
let myObject4 = { ...myObject };
console.log(myObject4);

// 10. Combina desestructuración y propagación
let { name: myObject5 } = { ...myObject };
console.log(myObject5);
