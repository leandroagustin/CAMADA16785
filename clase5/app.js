//
//
//
//
//
//
//
//

//Objeto Literal
/*
const Persona = {
    nombre: "Julian",
    edad: 28,
    anio: 2021,
}


class Sims {
    constructor(nombre, apellido, edad, ojos, anio) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.ojos = ojos;
        this.anio = anio
    }
}
//let nombreUsuario = prompt("Como se llama tu sims")

const Julian = new Sims("Julian", "Fuoco", 28, "verde", 2021)
const Pepe = new Sims("Pepe", "Juan", 40, "Marron", 2015, )

console.log(Julian);
console.log(Pepe);
*/

class Producto {
    constructor(titulo, descripcion, precio) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.precio = precio
    }

    impuesto() {
        let resultado = this.precio * 1.2
        return resultado
    }

    cuotas(cantidad) {
        if (this.precio == Number) {
            let resultado = this.precio / cantidad
            return resultado
        } else {
            return "Pone un numero papa"
        }

    }
    mostrar() {
        console.log(`${this.titulo} ${this.descripcion} sale $ ${this.precio}`);
    }
    alerta(mensaje) {
        alert(mensaje)
    }

}

alert()

const Remera1 = new Producto("Remera", "Nike", 1000);

console.log(Remera1)

delete Remera1.descripcion

console.log(Remera1)