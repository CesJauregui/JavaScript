// 1. Crea una clase que reciba dos propiedades
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// 2. Añade un método a la clase que utilice las propiedades
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  informationPerson() {
    console.log(`Nombre: ${this.name} \nEdad: ${this.age}`);
  }
}

// 3. Muestra los valores de las propiedades e invoca a la función
let person2 = new Person2("Cesar", 32);
console.log(person2);
person2.informationPerson();

// 4. Añade un método estático a la primera clase
class Person3 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static sumAge(age) {
    return age + 5;
  }
}

// 5. Haz uso del método estático
console.log("Dentro de 5 años tendrás:", Person3.sumAge(28));

// 6. Crea una clase que haga uso de herencia
class Car {
  constructor(name) {
    this.name = name;
  }
  isWorking() {
    return true;
  }
}

class myCar extends Car {
  constructor(model) {
    this.model = model;
  }
}

// 7. Crea una clase que haga uso de getters y setters
class myCar2 extends Car {
  constructor(model, placa) {
    this.model = model;
    this.placa = placa;
  }
  get model() {
    return this.model;
  }
  set model(model) {
    this.model = model;
  }
}

// 8. Modifica la clase con getters y setters para que use propiedades privadas
class myCar3 extends Car {
  #model;
  #placa;

  constructor(model, placa) {
    this.#model = model;
    this.#placa = placa;
  }
  get model() {
    return this.#model;
  }
  set model(model) {
    this.#model = model;
  }
}

// 9. Utiliza los get y set y muestra sus valores
class myCar4 extends Car {
  constructor(name, model, placa) {
    super(name);
    this._model = model;
    this._placa = placa;
  }
  get placa() {
    return this._placa;
  }
  set model(newModel) {
    this._model = newModel;
  }
}
let car4 = new myCar4("Toyota", "AN158", "ABC-123");
console.log(car4);
console.log(car4.placa);
car4.model = "BN456";
console.log(car4);

// 10. Sobrescribe un método de una clase que utilice herencia
class myCar5 extends Car {
  constructor(name, model, placa) {
    super(name);
    this._model = model;
    this._placa = placa;
  }
  get placa() {
    return this._placa;
  }
  set model(newModel) {
    this._model = newModel;
  }
  isWorking() {
    return false;
  }
}

let car5 = new myCar5("Toyota", "AN158", "ABC-123");
console.log(car5.isWorking());
