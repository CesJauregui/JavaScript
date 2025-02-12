// 1. Exporta una función
export function suma2(a, b, c) {
  return a + b + c;
}

// 2. Exporta una constante
export const EMAIL2 = "cesar.test@test.com";

// 3. Exporta una clase
export class MyClass3 {
  constructor(name) {
    this.name = name;
  }
  showName() {
    return console.log(`Mi nombre es ${this.name}`);
  }
}

// 4. Importa una función
import { suma } from "./28-export-modules.js";
console.log(suma(5, 5, 5));

// 5. Importa una constante
import { EMAIL } from "./28-export-modules.js";
console.log("Constante", EMAIL);

// 6. Importa una clase
import { MyClass2 } from "./28-export-modules.js";

let classExp = new MyClass2("Cesar");
classExp.showName();

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
export default function func2() {
  return console.log("Función por defecto");
}
// Una constante no se puede exportar por default

// export default class MyClass3{
//     constructor(name){
//         this.name = name
//     }
// }

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
// import myFunc from "./28-export-modules.js";
// myFunc();

import myClass3 from "./28-export-modules.js";
let class2 = new myClass3();
class2.func();

// 9. Exporta una función, una constante y una clase desde una carpeta
// Carpeta exports/

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
import { funcA, CITY, myClass4 } from "./exports/exports.js";
