/* 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }
  imprimirDatos() {
    console.log(
      " codigo: " +
        this.codigo +
        " nombre: " +
        this.nombre +
        " precio:$ " +
        this.precio
    );
  }
}
let producto1 = new Producto("123", "Camiseta", 8000);
let producto2 = new Producto("1234", "Shorts", 10000);
let producto3 = new Producto("12345", "Zapatillas", 25000);

let productos = [producto1, producto2, producto3];

console.log("Info de productos:");
productos.forEach((producto) => {
  producto.imprimirDatos();
});
