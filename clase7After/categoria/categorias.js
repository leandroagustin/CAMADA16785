//Variables
const DATABASE = `[{ "id": 0, "nombre": "Remera", "cat": "Nike", "pre": 2500 }, { "id": 1, "nombre": "Pantalon", "cat": "Addidas", "pre": 4500 }, { "id": 2, "nombre": "Buzo", "cat": "Nike", "pre": 5500 }, { "id": 3, "nombre": "Gorra", "cat": "Topper", "pre": 500 }, { "id": 4, "nombre": "Camisa", "cat": "Addidas", "pre": 1500 }, { "id": 5, "nombre": "Buzo", "cat": "Addidas", "pre": 2000 }, { "id": 6, "nombre": "Remera", "cat": "Addidas", "pre": 2000 }, { "id": 7, "nombre": "Pantalon", "cat": "Nike", "pre": 7000 }, { "id": 8, "nombre": "Zapatillas", "cat": "Nike", "pre": 12500 }, { "id": 9, "nombre": "Medias", "cat": "Topper", "pre": 200 }, { "id": 10, "nombre": "Gorra", "cat": "Addidas", "pre": 1500 }, { "id": 11, "nombre": "Gorra", "cat": "Nike", "pre": 2500 }]`

let deJson = localStorage.getItem("productos")
const Productos = JSON.parse(deJson)

let categoriaTest = []
let categoriaActual = "Addidas"


//funciones
function filtrarCategoria() {
    let categoria = Productos.filter(Producto => Producto.cat == categoriaActual)
    categoriaTest = categoria
}
function () {
    asdasdasdasd
}
function imprimirProductos() {

    let idImprimir = document.getElementById("cardsCat")


    categoriaTest.forEach(e => {
        idImprimir.innerHTML += `
        <div class="col-3">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${e.nombre}</h5>
                    <p class="card-text">${e.cat}</p>
                    <p class="card-text">${e.pre}</p>
                    <a href="#" class="btn btn-primary">Comprar</a>
                </div>
            </div>
        </div>
        `
    })
}


//Logica
console.log(Productos);
filtrarCategoria()
console.log(deJson);
imprimirProductos()