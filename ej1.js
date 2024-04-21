/*1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.
Output:
objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó
*/

let auto = {
  color: "Amarillo",
  marca: "Toyota",
  modelo: "Etios",
  encendido: false,
  encender: function () {
    if (!this.encendido) {
      this.encendido = true;
      console.log("el auto está encendido");
    }
  },
  apagar: function () {
    if (this.encendido) {
      this.encendido = false;
      console.log("el auto se apago");
    } else {
      console.log("el auto ya esta off");
    }
  },
};

auto.encender();
auto.apagar();