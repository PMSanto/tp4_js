/* 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas
Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:
“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

class Libro {
  constructor(ISBN, titulo, autor, numPaginas) {
    this._ISBN = ISBN;
    this._titulo = titulo;
    this._autor = autor;
    this._numPaginas = numPaginas;
  }

  get ISBN() {
    return this._ISBN;
  }

  set ISBN(newISBN) {
    this._ISBN = newISBN;
  }

  get titulo() {
    return this._titulo;
  }

  set titulo(newTitulo) {
    this._titulo = newTitulo;
  }

  get autor() {
    return this._autor;
  }

  set autor(newAutor) {
    this._autor = newAutor;
  }

  get numPaginas() {
    return this._numPaginas;
  }

  set numPaginas(newNumPaginas) {
    this._numPaginas = newNumPaginas;
  }

  mostrarLibro() {
    console.log(
      `El libro ${this.titulo} con ISBN ${this.ISBN} del autor ${this.autor} tiene ${this.numPaginas}`
    );
  }
}
let libro1 = new Libro("5457415", "el principito", "Antoine de Saint-Exupery", 150);
let libro2 = new Libro("5485885", "cien años de soledad", "G. garcia marquez", 987);

libro1.mostrarLibro();
libro2.mostrarLibro();

if (libro1.numPaginas > libro2.numPaginas) {
  console.log(`el libro "${libro1.titulo}" tiene mas paginas.`);
} else if (libro1.numPaginas < libro2.numPaginas) {
  console.log(`el libro "${libro2.titulo}" tiene mas paginas.`);
} else {
  console.log("ambos libros tienen el mismo numero de paginas.");
}
