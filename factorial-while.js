let numero=10; // valor al que se le va a calcular el factorial
let contador=1; // contador para contar las iteraciones 
let factorial; // valor que almacenara el factorial de el numero
let valor=numero; // valor que sustituye a la variable (número) para realizar los calculos
while(numero>contador){
    factorial=contador*valor;
    valor=factorial;
    contador++;
}
console.log(factorial);