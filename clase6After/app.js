//
//
//
//
//
//
//
//
//----------------------AFTER ARRAYS------------------

/*Los arrays son objetos similares a una lista cuyo prototipo
proporciona métodos para efectuar operaciones de recorrido y de mutación*/

class Libro {
    constructor(nom, cat, aut, price, dis) {
        this.nom = nom;
        this.cat = cat;
        this.aut = aut;
        this.price = price
        this.dis = dis
    }

    habilitar() {
        let error = "Este libro ya esta disponible"

        if (this.dis == false) {
            this.dis = true;
            actualizar()
        } else {
            return error
        }
    }

    desH() {
        let error = "Este libro ya no esta disponible"

        if (this.dis == true) {
            this.dis = false;
            actualizar()
        } else {
            return error
        }
    }
}

function actualizar() {
    Disponibles = Libreria.filter(Libro => Libro.dis == true)
}

//Funcion para Agregar Libros
function agregarLibros() {
    let nom = prompt("nombre")
    let cat = prompt("cat")
    let aut = prompt("aut")
    let price = Number(prompt("price"))
    let dis = confirm("dis")

    let libroNuevo = new Libro(nom, cat, aut, price, dis)
    Libreria.push = libroNuevo
    actualizar()
}



const Libreria = [];

let libro1 = new Libro("Harry", "Ciencia Ficcion", "jk", 2500, true);
let libro2 = new Libro("Señor de los Anillos", "Ciencia Ficcion", "Tolkien", 2000, false)
let libro3 = new Libro("50", "Drama", "desconocido", 1500, true)
let libro4 = new Libro("Titanic", "Drama", "desconocido", 3500, false)
let libro5 = new Libro("Shrek", "Comedia", "asd", 4500, true)
let libro6 = new Libro("Martin Fierro", "Drama", "JH", 1500, true)

Libreria.push(libro1)
Libreria.push(libro2)
Libreria.push(libro3)
Libreria.push(libro4)
Libreria.push(libro5)
Libreria.push(libro6)
console.log(Libreria);

agregarLibros()
console.log(Libreria);
console.log(Libreria.length);
//actualizar()
//console.log(Disponibles)