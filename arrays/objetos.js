let datosPersonales = {
    nombre: 'Jairo',
    apellido:'Acosta',
    edad: 41,
    altura: 1.75,
    eresDesarrollador: true,
}

let edad = datosPersonales.edad;
console.log(edad);

let datosYAmigos = [datosPersonales,
     {nombre:'Ramón Acosta', edad:48} ,
     {nombre:'Eduardo Velez',edad:38}
    ];

datosYAmigos.sort((a,b)=> a.edad - b.edad );
console.log(datosYAmigos);


