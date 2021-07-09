//ENTIDAD----------------------------------------------------------------------------//
class Producto {
    constructor(id, nombre, des, precio) {
        this.id = id;
        this.nombre = nombre;
        this.des = des;
        this.precio = precio;
    }
}


//Constantes----------------------------------------------------------------------//
const Productos = [];


//Funciones-------------------------------------------------------------------------------//

function mostrarProductosIndex() {

    let idImprimir = document.getElementById("cardsId");

    Productos.forEach(element => {
        console.log("hola");

        idImprimir.innerHTML += `
        <div class="col-3">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                        <h5 class="card-title">${element.nombre}</h5>
                        <p class="card-text">${element.des}</p>
                        <p class="card-text text-danger">${element.precio}</p>
                </div>
            </div>
        </div>
        
        
        `
    });

}

function saveLocal() {
    let aJson = JSON.parse(Productos)
    localStorage.Item("productos", aJson)
}

//--Logica--------------------------------------------------------------------------------//

//Agrego productos al array
Productos.push(new Producto(0, "Remera", "Nike", 2500))
Productos.push(new Producto(1, "Pantalon", "Addidas", 4500))
Productos.push(new Producto(2, "Buzo", "Nike", 5500))
Productos.push(new Producto(3, "Gorra", "Topper", 500))
Productos.push(new Producto(4, "Camisa", "Addidas", 1500))
Productos.push(new Producto(5, "Buzo", "Addidas", 2000))
Productos.push(new Producto(6, "Remera", "Addidas", 2000))
Productos.push(new Producto(7, "Pantalon", "Nike", 7000))
Productos.push(new Producto(8, "Zapatillas", "Nike", 12500))
Productos.push(new Producto(9, "Medias", "Topper", 200))
Productos.push(new Producto(10, "Gorra", "Addidas", 1500))
Productos.push(new Producto(11, "Gorra", "Nike", 2500))
console.log(Productos);

//imprimo productos
mostrarProductosIndex()

//guardar en local
saveLocal()