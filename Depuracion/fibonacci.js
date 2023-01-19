//fibonacci ==> R1=1,R2=1,Rn=Rn-1+Rn-2

let secuencia=[];
function fibonacci(num){
    let posicion;
    let posicion1;
    let result;
    
    for (let i=0; i<=num; i++){
        if (i<2){
            secuencia.push(1);
        }
        if (i>2){
          posicion=secuencia.length-1;
          posicion1=secuencia.length-2;
          result=secuencia[posicion]+secuencia[posicion1];
          secuencia.push(result);
        }
        
    }
   
    console.log(secuencia);
    
}

fibonacci(6);

