//importar todas las funciones y propiedades existentes en el archivo controller.


import * as funcionesMatematicas from "./modulos/controller.js"
import chalk from 'chalk';

const sum = funcionesMatematicas.suma(1,2);
console.log (sum);

const mult = funcionesMatematicas.multiplica(4,5);
console.log(chalk.green(mult));