// Objects

// Sintaxis

let persona = {
  name: "Cesar",
  edad: 28,
  alias: "CJ",
};

// Acceso a propiedades

// Notación por punto
console.log(persona.alias);

// Notación por corchetes
console.log(persona["name"]);

// Modificación de propiedades
persona.name = "Antonio";
console.log(persona.name);

persona.edad = "30";
console.log(persona.edad);

// Eliminación de propiedades
delete persona.edad;
console.log(persona);

// Nueva propiedad
persona.mail = "ctest@test.com";
persona["edad"] = 28;

console.log(persona);

// Métodos (funciones)
let person2 = {
  name: "Jorge",
  age: 37,
  alias: "Rock",
  walk: function () {
    console.log("La persona camina");
  },
};
person2.walk();

// Anidación de objetos
let person3 = {
  name: "Jorge",
  age: 37,
  alias: "Rock",
  walk: function () {
    console.log("La persona camina");
  },
  job: {
    name: "Programador",
    exp: 15,
    work: function () {
      console.log(`La persona de ${this.exp} años de experiencia trabaja`);
    },
  },
};
console.log(person3);
console.log(person3.name);
console.log(person3.job);
console.log(person3.job.name);
person3.job.work();

// Igualdad de objetos
let persona4 = {
  name: "Antonio",
  edad: 28,
  alias: "CJ",
};

console.log(persona == persona4);
console.log(persona === persona4);

console.log(persona.name == persona4.name);

// Iteración
for (const key in persona4) {
  console.log(key + ": " + persona4[key]);
}

// Funciones como objetos
// (no es buena práctica, debería ser una clase)
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let persona5 = new Person("Cesar", 28);
console.log(persona5);
