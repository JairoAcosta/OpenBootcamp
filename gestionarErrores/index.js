const lanzaError= (valor)=>{
    if (typeof valor !== 'number'){
        throw new Error('El valor ingresado es invalido');
    }
}

try {
    lanzaError(8);
    //lanzaError('hola');
    console.log('El valor ingresado es correcto: ')
} catch (error) {
    console.error(`Se produjo el siguiente error: ${error}`);
}