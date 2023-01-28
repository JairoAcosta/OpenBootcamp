let nombre = 'Jairo';
let apellido = 'Acosta';

let datos = {nombre:nombre, apellido:apellido};

//sessionStorage.setItem("nombreObjeto", "datos");

//localStorage.setItem("nombre del Objeto","datos");

//document.cookie="cookie datos = datos";

setTimeout(()=>{
    document.cookie= "expiración=nombre;expires";
},"2000");
