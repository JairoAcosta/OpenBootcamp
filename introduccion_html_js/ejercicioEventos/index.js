let boton = document.querySelector("#btn");

boton.addEventListener("click",() => {
    //console.log(boton);
        alert("Click en el botón");
    });

    $(()=>{
        $("button").click(()=>{
            console.log("Hola estoy utilizando jQuery");
        })
    })
