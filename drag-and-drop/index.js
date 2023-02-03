const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");
const papelera = document.querySelector(".papelera");
const imagen = document.querySelector(".imagen_papelera");

parrafos.forEach(parrafo=>{
    parrafo.addEventListener("dragstart",event=>{
        console.log("inicio");
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
    });

    parrafo.addEventListener("dragend",()=>{
        parrafo.classList.remove("dragging");
    });
});

secciones.forEach(seccion=>{
    seccion.addEventListener("dragover", event=>{
        event.preventDefault()
        //console.log("drag over")
    });

    seccion.addEventListener("drop",event=>{
       
       // console.log("drop")
        const id_parrafo=event.dataTransfer.getData("id",)
       // console.log("iparrafo id:", id_parrafo)
       const parrafo =  document.getElementById(id_parrafo);
       const seccion = document.querySelector(".seccion");
       seccion.appendChild(parrafo);
    });

});
papelera.addEventListener("dragover",event=>{
    event.preventDefault();
})
papelera.addEventListener("drop",event=>{
    console.log("soltado");
    const id_parrafo =event.dataTransfer.getData("id");
    console.log(id_parrafo)
    const parrafo = document.getElementById(id_parrafo);
    console.log(parrafo);

    const seccines =document.querySelector(".seccion")
    console.log(seccines);
    
    seccines.addEventListener("drop",seccines.removeChild(parrafo))
  
 
});







