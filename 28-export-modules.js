// Exportación de módulos

// Funciones
export function add(a, b) {
  return a + b;
}

// Propiedades
export const PI = 3.141516;
export let name = "Cesar";

// Exportación por defecto

// export default function substract(a, b) {
//   return a - b;
// }

export default class MyClass {
  func() {
    console.log("Mi clase");
  }
}

// Clases

export class Cirle {
  constructor(radius) {
    this.radius = radius;
  }
  area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
  perimetro() {
    return 2 * Math.PI * this.radius;
  }
}

/***********************************************************************/

// 1. Exporta una función
export function suma(a, b, c) {
  return a + b + c;
}

// 2. Exporta una constante
export const EMAIL = "cesar.test@test.com";

// 3. Exporta una clase
export class MyClass2 {
  constructor(name) {
    this.name = name;
  }
  showName() {
    return console.log(`Mi nombre es ${this.name}`);
  }
}

// export default function func2(){
//     return console.log("Función por defecto");
// }

// export default class MyClass3{
//     constructor(name){
//         this.name = name
//     }
// }
