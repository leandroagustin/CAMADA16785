//
//
//
//
//
//
//
//
/*
let nombre = "Julian"
let apellido = "Fuoco"
let edad = 28
let disp = false
let vestimenta = {
    remera: "Nike",
    pantalon: "Adiddas"
}
let segundoArray = ["Pepe", 30, true]
    
    //.length

    let miPrimerArray = [nombre, apellido, edad, disp, vestimenta, segundoArray, "Hola", 56, 56];

    for (i = 0; i < miPrimerArray.length; i++) {
        console.log(miPrimerArray[i]);
    }
    */


//.push
/*
let numeros = ["ZZZ", "TTT"]

let test = ["Juan", "Pedro", 5, true, "Nicolas"]

console.log(test);

let nuevoTexto = "AAA"
test.push(nuevoTexto)
console.log(test);

test.unshift("BBB")
console.log(test);

let listaNueva = test.concat(numeros)
console.log(listaNueva);
//join()
let pasarDatos = listaNueva.join(",")
console.log(pasarDatos)

*/
/*
let listaOrdenada = listaNueva.sort()
    //.slice(1,3)
let recorte = listaOrdenada.slice(0, 3)
console.log(recorte);
*/

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio
    }
}

const Producto1 = new Producto("Remera", 5000);
const Producto2 = new Producto("Mate", 1000);
const Producto3 = new Producto("Pelota", 1700);
const Producto4 = new Producto("Auto", 15000000);
const Producto5 = new Producto("Mate", 2000);

const Productos = []

Productos.push(Producto1)
Productos.push(Producto2)
Productos.push(Producto3)
Productos.push(Producto4)
Productos.push(Producto5)



//console.log(Productos.find(Producto => Producto.nombre == "Mate"));
/*
let dato = prompt()
let orden1 = Productos.filter(Producto => Producto.nombre == dato)
let ProductosOrdenados = orden1.sort(function(a, b) {
    if (a.precio > b.precio) {
        return -1;
    }
    if (a.precio < b.precio) {
        return 1;
    }
    return 0;
});
console.log(ProductosOrdenados);
*/

let objetoPrueba = { nombre: "Juan", apellido: "Martin", edad: 20, fun: function() { return a + b } };

//for in
/*for (const propiedad in objetoPrueba) {
    console.log(` ${propiedad} = ${objetoPrueba[propiedad]} esto es for in`);
}
*/
//for of
/*
for (const objeto of Productos) {
    for (const propiedad in objeto) {
        console.log(` ${propiedad} = ${objeto[propiedad]} esto es for in`);
    }
}
*/

//foreach

Productos.forEach(e => { console.log(e.nombre) })