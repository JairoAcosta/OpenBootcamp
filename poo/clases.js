class Persona {

	constructor(nombre,edad,isDeveloper){
		this.nombre=nombre;
		this.edad=edad;
		this.isDeveloper=isDeveloper;
	}

	saludo(){
		console.log(`Hola mi nombre es ${this.nombre}, tengo ${this.edad} años`);
	}
}


const nueva_persona= new Persona('Jairo',41,true);
console.log(nueva_persona);
nueva_persona.saludo();
