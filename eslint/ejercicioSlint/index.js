/* eslint-disable no-unused-vars */
const nombre = "Jairo";
const apellido = "Acosta";
const estudiante = `${nombre} ${apellido}`;
const estudianteMayus = console.log(estudiante.toUpperCase());
const estudianteMinus = console.log(estudiante.toLowerCase());
const tamañoEstudiante = console.log(estudiante.length);
const primeraLetra = console.log(nombre.charAt(0));
const ultimaLetraApellido = console.log(apellido.charAt(apellido.length - 1));
const sinEspacios = console.log(nombre.trimEnd() + apellido.trim());
const buscaNombre = console.log(estudiante.includes(nombre));
