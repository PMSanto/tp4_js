/* 5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:*/

class Persona {
  constructor(nombre, edad, DNI, sexo, peso, altura, añoNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.DNI = DNI;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.añoNacimiento = añoNacimiento;
  }

  calcularGen() {
    const añoActual = new Date().getFullYear();
    const edadGeneracion = añoActual - this.añoNacimiento;

    if (edadGeneracion >= 1930 && edadGeneracion <= 1948) {
      return "Silent generation";
    } else if (edadGeneracion >= 1949 && edadGeneracion <= 1968) {
      return "Baby Boomers";
    } else if (edadGeneracion >= 1969 && edadGeneracion <= 1980) {
      return "Gen-x";
    } else if (edadGeneracion >= 1981 && edadGeneracion <= 1993) {
      return "Millennials";
    } else if (edadGeneracion >= 1994 && edadGeneracion <= 2010) {
      return "Generación Z";
    } else {
      return "Generación no identificada";
    }
  }

  mostrarGeneracion() {
    const generacion = this.calcularGen();
    console.log(`${this.nombre} pertenece a la generación ${generacion}.`);
    switch (generacion) {
      case "Silent generation":
        console.log("Rasgo característico: Conflictos bélicos, austeridad.");
        break;
      case "Baby Boomers":
        console.log(
          "Rasgo característico: Paz y explosión demográfica. Ambición."
        );
        break;
      case "Gen-x":
        console.log(
          "Rasgo característico: Crecieron con la tecnología y el Internet, y enfrentaron la crisis económica global. Obsesión por el éxito."
        );
        break;
      case "Millennials":
        console.log(
          "Rasgo característico: Inicio de la digitalización. Frustración."
        );
        break;
      case "Generación Z":
        console.log(
          "Rasgo característico: Expansión masiva de Internet. Irreverencia."
        );
        break;
      default:
        console.log("No se ha identificado la generación.");
        break;
    }
  }
}
// 😕😒😢 este ejercicio no me sale :( :( 
let persona1 = new Persona("Pancracia", 31, "65456412", "M", 50, 1.6, 1997);
persona1.mostrarGeneracion();
