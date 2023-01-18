const persona = {

	nombre : 'Jairo',
	apellido:'Acosta',
	isDeveloper:true,
	saludo : function(){
		console.log('Hola');
	}
}

//console.log(persona);
persona.saludo();

 //funcion factory

const creaPersona =(nombre,edad,isDeveloper)=>{
	return {
		nombre,
		edad,
		isDeveloper,
		saludo:function(){
			conso.log('hello');
		}
	}
}

const nuevaPersona= creaPersona('Juan',15,true);
console.log(nuevaPersona);

