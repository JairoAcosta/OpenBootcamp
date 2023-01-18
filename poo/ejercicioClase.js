class Estudiante{
	_nombre;
	_asignatura = ['Javascript','HTML','CSS'];
	constructor(nombre,asignatura){
		this._nombre= nombre
		this._asignatura = asignatura
	}
		
		obtenDatos(){

			let datos ={
				nombre:this._nombre,
				asignatura:this._asignatura
			}
			return datos;
			
		}
}


const nuevoEstudiante = new Estudiante('Jairo','Javascript');

console.log(nuevoEstudiante.obtenDatos());