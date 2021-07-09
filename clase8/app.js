//
//
//
//
//
//
///
///
///
///



function mostrar() {
    let input = document.getElementById("nombre").value

    let elemento = document.getElementById("aca")
    elemento.innerHTML = `Hola tu nombre es ${input}`
}

let boton = document.getElementById("boton")
boton.addEventListener("click", mostrar)