class Estudiante {
  constructor(nombre, apellidos, fechaNacimiento, id, nuevoIngreso, carrera, cursosMatriculados, cursosCursados) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fechaNacimiento = fechaNacimiento;
    this.id = id;
    this.nuevoIngreso = nuevoIngreso;
    this.carrera = carrera;
    this.cursosMatriculados = cursosMatriculados || [];
    this.cursosCursados = cursosCursados || [];
  }

  // setter
  set setMatricula(curso) {
    console.log(curso);
    this.cursosMatriculados.push(curso);
  }

  // getter 
  get getMatriculas(){
    return this.cursosMatriculados;
  }

  //setter
  set setRetirarMatricula(curso) {
    const index = this.cursosMatriculados.indexOf(curso);
    if (index > -1) {
      this.cursosMatriculados.splice(index, 1);
    }
  }

  get getRetirarMatriculas(){
    return this.cursosMatriculados;
  }

  calificacion(curso, nota){
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

const andy = new Estudiante('Andy', 'Smith', '1990-10-30', 'arq-0001', false, 'Arquitectura');
andy.setMatricula = 'Introducción a la pintura';
andy.setMatricula = 'Generales';
console.log(andy.getMatriculas);
andy.setRetirarMatricula = 'Generales'; //como eliminar
andy.setRetirarMatricula = 'Introducción a la pintura'; //como eliminar
console.log(andy.getRetirarMatriculas);
