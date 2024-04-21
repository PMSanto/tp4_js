/* 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 
Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
*/

let cuenta = {
  titular: "Alex ",
  saldo: 0,
  ingresar: function (cantidad) {
    if (cantidad > 0) {
      this.saldo += cantidad;
      console.log("se ingreso $" + cantidad + " en la cuenta");
    } else {
      console.log("debe ingresar un monto mayor a 0");
    }
  },
  extraer: function (cantidad) {
    if (cantidad > 0 && cantidad <= this.saldo) {
      this.saldo -= cantidad;
      console.log("sacaste $" + cantidad + " de la cuenta");
    } else {
      console.log("saldo insuficiente, intenta con otro monto");
    }
  },
  informar: function () {
    return "Titular: " + this.titular + "su saldo es: $" + this.saldo;
  },
};

console.log(cuenta.informar());
cuenta.ingresar(5000);
console.log(cuenta.informar());
cuenta.extraer(1000);
console.log(cuenta.informar());
