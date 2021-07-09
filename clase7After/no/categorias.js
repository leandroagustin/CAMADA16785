//variables
const deJson = localStorage.getItem("productos")
const productos = JSON.parse(deJson)
let categoriaActual = prompt("Ingresa tu categoria");

//funciones

function filtrarCategoria() {
    let categoria = productos.filter(Producto => Producto.des == categoriaActual)
    sessionStorage.setItem("categoria", aJson)
}

function mostrarProductosIndex() {

    let idImprimir = document.getElementById("cardsCat");
    filtrarCategoria()
    let deJson = JSON.parse(sessionStorage.getItem("categoria"))

    let productosCategoria = deJson

    productosCategoria.forEach(element => {
        console.log("hola");

        idImprimir.innerHTML += `
        <div class="col-3">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                        <h5 class="card-title">${element.nombre}</h5>
                        <p class="card-text">${element.des}</p>
                        <p class="card-text text-danger">${element.precio}</p>
                        <a href="#" class="btn btn-primary">Comprar</a>
                </div>
            </div>
        </div>
        
        
        `
    });

}
//logica
mostrarProductosIndex()