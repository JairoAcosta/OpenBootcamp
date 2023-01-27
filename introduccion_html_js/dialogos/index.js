let boton = document.querySelector("#btn");
//console.log(boton);

boton.addEventListener("click",()=>{
    //alert("Hizo click");
    confirm("¿Estas seguro?") ? console.log("Ok"):console.log("No...");
});


let botonInfo = document.querySelector("#info");
botonInfo.addEventListener("click",()=>{
    const nombre = prompt("¿Cual es tu nombre?");
    if (nombre){
        alert(`Tu nombre es: ${nombre}`);
    }
    else{
        alert("No introduciste tu nombre");
    }
});

const lista = [{
    nombre:"Jairo",
    apellido:"Acosta",
},
    {
     nombre: "Jaimar",
     apellido:"Acosta"
},
     
    {
        nombre:"Jesus Adrian",
        apellido:"Acosta"
    }
    
]
console.log(lista);
console.table(lista);