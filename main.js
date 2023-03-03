// Mini proyecto: Libreria

class Libreria {
  constructor(nombre, direccion, libros, comics){
    this.nombre = nombre;
    this.direccion = direccion,
    this.libros = libros || [];
    this.comics = comics || [];
  }

  agregarLibros(nuevoLibro){
    this.libros.push(nuevoLibro);
  }

  agregarComics(nuevoComic){
    this.comics.push(nuevoComic);
  }

  //getInfo
  getInfo(nombre){
    let inventario = [...this.libros, ...this.comics];
    const encontrar = inventario.find(elemento => elemento.titulo === nombre);
    if(encontrar.getCantidad === undefined){
      return "No hay ejemplares disponibles";
    }else {
      return encontrar;
    }
  }
}


class Libro {
  #cantidad
  #anio

  constructor(titulo, autor, precio, cantidad, anio){
    this.titulo = titulo;
    this.autor = autor;
    this.precio = precio;
    this.#cantidad = cantidad;
    this.#anio = anio;
  }

  //Cantidad
  set setCantidad(cantidad){
    this.#cantidad = cantidad;
  }

  get getCantidad(){
    return this.#cantidad;
  }

  //Año
  set setAnio(anio){
    this.#anio = anio;
  }

  get getAnio(){
    return this.#anio;
  }
}


class Comic extends Libro {
  constructor(titulo, autor, precio, cantidad, anio, dibujante, editorial, volumen){
    super(titulo, autor, precio, cantidad, anio);
    this.dibujante = dibujante;
    this.editorial = editorial;
    this.volumen = volumen;
  }
}

//Variables
//class Libreria
const nuevaLibreria = new Libreria("Metro Librería", "Cartago");
//console.log(nuevaLibreria);

const nuevoLibro = new Libro("Don Quijote", "Miguel De Cervantes", 16000, 2, 1608);
nuevoLibro.setCantidad = 8;
nuevoLibro.setAnio = 1605;
// console.log("cantidad:", nuevoLibro.getCantidad);
// console.log("Año:", nuevoLibro.getAnio);
// console.log(nuevoLibro);

const nuevoComic = new Comic("Fantastic Four", "Mike Zeck", 5000, 5, 1985, "Jack Kirby", "Marvel Comics", 1)
nuevoComic.setCantidad = 2;
nuevoComic.setAnio = 1982;
//console.log("cantidad:", nuevoComic.getCantidad);
// console.log("Año:", nuevoComic.getAnio);
// console.log(nuevoComic);

//Agregar libros 
nuevaLibreria.agregarLibros(nuevoLibro);
//console.log(nuevaLibreria.libros);

//Agregar comics
nuevaLibreria.agregarComics(nuevoComic);
// console.log(nuevaLibreria.comics);

console.log(nuevaLibreria.getInfo("Don Quijote"));
