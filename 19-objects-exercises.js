// 1. Crea un objeto con 3 propiedades
let car = {
  color: "black",
  model: "Chevrolet Taheo 2023",
  transmisition: "Automático",
};

// 2. Accede y muestra su valor
console.log("Color:", car.color);
console.log("Modelo:", car.model);
console.log("Transmisión:", car.transmisition);

// 3. Agrega una nueva propiedad
car.category = "Camioneta";
console.log(car);

// 4. Elimina una de las 3 primeras propiedades
delete car.color;
console.log(car);

// 5. Agrega una función e invócala
car.km = function () {
  console.log("Kilometrajeeee");
};
car.km();

// 6. Itera las propiedades del objeto
for (const key in car) {
  console.log(car[key]);
}
// 7. Crea un objeto anidado
let dog = {
  weight: 15,
  height: 30,
  bark: "No",
  owner: {
    name: "Cesar",
    lastName: "Gomez",
  },
};

// 8. Accede y muestra el valor de las propiedades anidadas
console.log("Weight:", dog.weight);
console.log("Height:", dog.height);
console.log("Bark:", dog.bark);
console.log("Owner name:", dog.owner.name);
console.log("Owner lastName:", dog.owner.lastName);

// 9. Comprueba si los dos objetos creados son iguales
console.log(car == dog);

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(car.color == dog.bark);
