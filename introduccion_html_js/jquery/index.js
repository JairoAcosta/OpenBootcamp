//$("h1").hide();

/*para empezar se utiliza la funcion document.readdy para que trabaje cuando la pagina este cargada
$(document).readdy(()=>{
    $("h1").hide();
})*/

$(()=>{

   // $("#el-1").hide();
   $(".hide-btn").click(()=>{
    console.log ("ocultando...");
    //$("h1").hide();
    $("h1").fadeOut();
   });

   $(".show-btn").click(()=>{
    console.log ("mostrando...");
    //$("h1").show();
    $("h1").fadeIn();
   });

   $("li").click(()=>{
    $("h1").css({color:"red"})
   });
   $(".new-element").click(()=>{
    $("ul").append("<li>New Element</li>");
   });

   $("li").mouseenter((elem)=>{
    //console.log("entro el raton ")
    elem.target.style.color="blue";
   });

   $("li").mouseleave((elem)=>{
    elem.target.style.color="black";
   })


});