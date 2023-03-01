// 1. Crear una clase Persona que reciba nombre, apellido, id, edad y ubicación.
// Agregar un método que se llame saludar, y que retorne un saludo con el nombre y apellido de la persona.
class Persona {
  constructor (nombre, apellido, id, edad, ubicacion) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.id = id;
    this.edad = edad;
    this.ubicacion = ubicacion;
  }

  saludar () {
    return ` Hola! ${this.nombre} ${this.apellido}`;
  }
}

// const heylin = new Persona('Heylin', 'Loaiza', 06556, 21, 'Cartago');
// console.log(heylin.saludar());

// 2. Crear una clase Empleado que herede de Persona y reciba un parámetro sueldo, posición, departamento, ingreso.
// Agregar un método que se llame imprimirSueldo, que imprima el sueldo anual del empleado,
class Empleado extends Persona {
  constructor(nombre, apellido, id, edad, ubicacion, sueldo, posicion, departamento, ingreso){
    super(nombre, apellido, id, edad, ubicacion);
    this.sueldo = sueldo;
    this.posicion = posicion;
    this.departamento = departamento;
    this.ingreso = ingreso;
  }

  imprimirSueldo () {
    return this.sueldo * 12;
  }
}

// const sueldoEmpleadoH = new Empleado('Heylin', 'Loaiza', 06556, 21, 'Cartago', 1400);
// console.log(sueldoEmpleadoH.imprimirSueldo());


// 3. Crear una clase Desarrollador que herede de Empleado, Desarrollador debe recibir un parámetro llamado lenguajes (tiene que ser un array de objetos): debe incluir nombreDeLenguaje y conocimiento (es un valor numérico del 1 al 100).
// Agregar un método se llame lenguajeDominado y que imprima el lenguaje que domina el desarrollador:
// el lenguaje que domina depende del valor que tenga en la propiedad conocimiento, de manera que se imprimar le lenguaje con mayor valor numérico.
// Agregar un método que se llame agregarLenguaje para agregar un nuevo lenguaje al array de lenguajes

//Práctica realizada con Jason, Javier y Camila
class Desarrollador extends Empleado {
  constructor(nombre, apellido, id, edad, ubicacion, sueldo, lenguajes){
    super(nombre, apellido, id, edad, ubicacion, sueldo);
    this.lenguajes = lenguajes || [];
  }

  lenguajeDominado(){
    let lenguajeMayor = {nombreDeLenguaje:"", conocimiento: 0};

    for (let i = 0; i < this.lenguajes.length; i++) {
      if(this.lenguajes[i].conocimiento > lenguajeMayor.conocimiento){
        lenguajeMayor = this.lenguajes[i];
      }
    }

    return lenguajeMayor;
  }
  agregarLenguaje(nombreLenguaje, calificacion){
    this.lenguajes.push({nombreDeLenguaje: nombreLenguaje, conocimiento: calificacion});
  }

} 

const DesarrolladorUno = new Desarrollador('Heylin', 'Loaiza', 06556, 21, 'Cartago', 1400, [{nombreDeLenguaje: "Js", conocimiento: 70}]);

DesarrolladorUno.agregarLenguaje("Java", 40);
DesarrolladorUno.agregarLenguaje("C++", 30);
//console.log(DesarrolladorUno.lenguajeDominado());
//console.log(DesarrolladorUno.lenguajes);
console.log(DesarrolladorUno);




