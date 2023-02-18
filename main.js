// 1. Crear un método que permita agregar cursos a la lista de cursos aprobados. El usuario debe poder ingresar un objeto con el nombre del curso, nota.
// 2. Y dependiendo la nota se agrega de manera automática una propiedad nueva que se llama estado: cuyo valor sera de aprobado (nota > 70) o reprobado (nota < 70)

function EstudianteConstructor(nombre, apellidos, fechaNacimiento, id, nuevoIngreso, carrera, cursosMatriculados, cursosCursados) {
  this.nombre = nombre;
  this.nombre = nombre;
  this.apellidos = apellidos;
  this.fechaNacimiento = fechaNacimiento;
  this.id = id;
  this.nuevoIngreso = nuevoIngreso;
  this.carrera = carrera;
  this.cursosMatriculados = cursosMatriculados || [];
  this.cursosCursados = cursosCursados || [];

  this.matricular = function(curso) {
    this.cursosMatriculados.push(curso)
  }

  this.retirarMatricula = function(curso) {
    const index = this.cursosMatriculados.indexOf(curso);
    if (index > -1) {
      this.cursosMatriculados.splice(index, 1);
    }

    // this.cursosMatriculados = this.cursosMatriculados.filter(item => item !== curso); // devuelve un array con los elementos que cumplen con la condición
  }

  this.calificacion = function(curso, nota){
    const calificacionCursos = {};

    calificacionCursos.curso = curso;
    calificacionCursos.nota = nota;

    if(nota >= 70){
      calificacionCursos.estado = "aprobado"
    } else {
      calificacionCursos.estado = "reprobado"
    }

    this.cursosCursados.push(calificacionCursos);
  }
}

const andy = new EstudianteConstructor('Andy', 'Smith', '1990-10-30', 'arq-0001', false, 'Arquitectura', ['Introducción a la pintura', 'Historia del Arte I']);
//console.log(andy);
const ana =  new EstudianteConstructor('Ana', 'Patel', '1990-10-30', 'arq-0001', true, 'Arquitectura', ['Introducción a la pintura', 'Historia del Arte II']);
// console.log(ana);
andy.calificacion('Introducción a la pintura', 76);
ana.calificacion('Historia del Arte II', 69);
console.log(andy);
console.log(ana);