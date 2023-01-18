class Persona {

// private se realiza antecediendo las declaraciones de propiedades y metodos con #,
// estas variables solo se pueden acceder desde la propia clase

	//propiedades declaradas de forma privada.
	#nombre;
	#edad;
	#obtenEdad;
	#setEdad;
	//protected o propiedades o métodos protegidos se declaran anteponiendo la barra baja _
	//las cuales solo se pueden acceder desde la propia clase y desde clases descendientes;
	_isDeveloper=true;


	constructor(nombre,edad,isDeveloper){
		this.#nombre=nombre;
		this.#edad=edad;
		this._isDeveloper=isDeveloper;
	}

	saludo(){
		console.log(`Hola mi nombre es ${this.nombre}, tengo ${this.edad} años`);
	}
		//función getter, permite acceder a algun atributo privado de manera controlada
	obtenNombre(){
		return this.#nombre;
	}

	//metodo declarado de forma privada para no poder acceder desde fuera del objeto.
	
	obtenEdad(){
		return this.#edad;
}

	//metodo setter para cambiar o modificar los atributos de una clase 
	setEdad(nuevaEdad){
	this.#edad=nuevaEdad;
	
}

}


const persona = new Persona('Julio',50);
console.log(persona);
console.log(persona.nombre);
console.log(persona.obtenNombre());
console.log(persona._isDeveloper);
console.log(persona.obtenEdad());
persona.setEdad(22);
console.log(persona.obtenEdad());