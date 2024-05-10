/* 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área*/

class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  modTamaño(nuevoAlto, nuevoAncho) {
    this.alto = nuevoAlto;
    this.ancho = nuevoAncho;
    console.log("se modifico el tamaño");
  }

  mostrarTamaño() {
    console.log("alto" + this.alto + "ancho" + this.ancho);
  }

  perimetro() {
    return 2 * (this.alto + this.ancho);
  }

  area() {
    return this.alto * this.ancho;
  }
}

let rectangula = new Rectangulo(6, 12);
rectangula.mostrarTamaño();
rectangula.modTamaño(5, 10);

console.log("perimetro: " + rectangula.perimetro());
console.log("area: " + rectangula.area());
