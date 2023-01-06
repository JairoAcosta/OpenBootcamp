
//función que siempre devuelve true 
function verdadero(){
    console.log('true') 
    return true;
}
verdadero();
//función asincrona con setTimeout

const promesa = new Promise((resolve,reject)=>{

    resolve();
});

promesa
.then(()=> setTimeout(() => {
console.log("Hola soy una promesa");
}, 5000));



function* generadora(){
    let indice =0;

    while(true){
        yield indice+=2;
    }
}

let generaIndice = generadora();

console.log(generaIndice.next().value);
console.log(generaIndice.next().value);
console.log(generaIndice.next().value);
console.log(generaIndice.next().value);