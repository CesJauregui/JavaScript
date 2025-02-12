// Importación de módulos

import { add, PI, name, Cirle } from "./28-export-modules.js";
import defaultImport from "./28-export-modules.js";

// Funciones
console.log(add(5, 10));

// Propiedades
console.log(PI);
console.log(name);

// Importación por defecto
console.log(defaultImport(5, 10));

// let myClass = new defaultImport();
// myClass.func();

//Clases
let circle = new Cirle(10);
console.log(circle.radius);
console.log(circle.area().toFixed(2));
console.log(circle.perimetro().toFixed(2));

// Proyecto modular
// import {MyImport} from "./classes/MyClass.js"

// En node.js, se cambia la extensión a .mjs a los archivos para que se conviertan en módulos.

// Otra opción es crear el package.json y poner:
/*
    {
        "type": "module"
    }
*/
