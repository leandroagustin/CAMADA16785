//Entidades-------------------------------------------------------//
class Producto {
    constructor(id, nombre, cat, pre, fuc) {
        this.id = id;
        this.nombre = nombre;
        this.cat = cat;
        this.pre = pre
        this.saludar = fuc
    }
}


//Variables-------------------------------------------------------//
const Productos = []

//Funciones-------------------------------------------------------//

//guardar datos en el storage
function saveLocal() {
    let aJson = JSON.stringify(Productos)
    localStorage.setItem("productos", aJson)
}

function saludar() {
    console.log("HOLAAAAAA")
}

function imprimirProductos() {

    let idImprimir = document.getElementById("cardsId")

    Productos.forEach(e => {

        idImprimir.innerHTML += `
        <div class="col-3">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${e.nombre}</h5>
                    <p class="card-text">${e.cat}</p>
                    <p class="card-text colorRed">${e.pre}</p>
                    <a href="#" class="btn btn-primary">Comprar</a>
                </div>
            </div>
        </div>
        `
    })
}
//Logica----------------------------------------------------------//

//---Agregar productos al array---//
Productos.push(new Producto(0, "Remera", "Nike", 2500))
Productos.push(new Producto(1, "Pantalon", "Addidas", 4500, saludar()))
Productos.push(new Producto(2, "Buzo", "Nike", 5500))
Productos.push(new Producto(3, "Gorra", "Topper", 500))
Productos.push(new Producto(4, "Camisa", "Addidas", 1500))
Productos.push(new Producto(5, "Buzo", "Addidas", 2000))
Productos.push(new Producto(6, "Remera", "Addidas", 2000))
Productos.push(new Producto(7, "Pantalon", "Nike", 7000))
Productos.push(new Producto(8, "Zapatillas", "Nike", 12500, ))
Productos.push(new Producto(9, "Medias", "Topper", 200))
Productos.push(new Producto(10, "Gorra", "Addidas", 1500))
Productos.push(new Producto(11, "Gorra", "Nike", 2500))

imprimirProductos()
saveLocal()
console.log(Productos);