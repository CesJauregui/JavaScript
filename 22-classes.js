// Clases

class Person {
  constructor(name, age, alias) {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }
}

// Sintaxis

let person = new Person("Cesar", 14, "CJ");

console.log(person);
console.log(typeof person);

// Valores por defecto
class DefaultPerson {
  constructor(name = "Nombre por defecto", age = 0, alias = "Sin alias") {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }
}

let person2 = new DefaultPerson();
console.log(person2);

//Acceso a propiedades
console.log(person2.alias);
console.log(person2["alias"]);

person2.alias = "Cesar";
console.log(person2.alias);

// Funciones
class PersonWithMethod {
  constructor(name, age, alias) {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }

  walk() {
    console.log("La persona camina.");
  }
}

let person4 = new PersonWithMethod("Cesar", 38, "CJ");
person4.walk();

// Propiedades privadas
class PrivatePerson {
  #bank;

  constructor(name, age, alias, bank) {
    this.name = name;
    this.age = age;
    this.alias = alias;
    this.#bank = bank;
  }
  pay() {
    this.#bank;
  }
}
let person5 = new PrivatePerson("Cesar", 38, "CJ", "MYBANK123456");
//console.log(person5.bank) // No podemos acceder

person5.newBank = "adsasdasdsa"; // No modifica la propiedad bank (NO ES #bank), crea una nueva propiedad publica.
console.log(person5);

//Gettes y Setters

class GetPerson {
  #name;
  #age;
  #alias;
  #bank;
  constructor(name, age, alias, bank) {
    this.#name = name;
    this.#age = age;
    this.#alias = alias;
    this.#bank = bank;
  }

  get name() {
    return this.#name;
  }

  set bank(newBank) {
    this.#bank = newBank;
  }
}

let person6 = new GetPerson("Cesar", 38, "CJ", "MYBANK123456");
console.log(person6); // No se muestran las propiedades y su valor
console.log(person6.name);

person6.bank = "new MYBANK123456";

// Herencia
class Animal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    console.log("Emite un sonido genérico");
  }
}

class Dog extends Animal {
  sound() {
    // Sobreescritura del método sound de la clase Animal
    console.log("Guau!");
  }
  run() {
    console.log("El perro corre");
  }
}

class Fish extends Animal {
  constructor(name, size) {
    super(name); // Hace una llamada a la super clase (Animal). En este caso traemos la propiedad name de la clase Animal
    this.size = size;
  }
  swin() {
    console.log("El pez nada");
  }
}

let myDog = new Dog("Cesar Dog");
myDog.run();
myDog.sound();

let myFish = new Fish("Cesar Fish", 10);
myFish.swin();
myFish.sound();

// Métodos estáticos (para no tener que crear una instancia, se crea métodos estáticos)
class MathOperations {
  static sum(a, b) {
    return a + b;
  }
}

console.log(MathOperations.sum(5, 10));
