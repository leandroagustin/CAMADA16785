//
//
//
//
//
//
//
//
// AFTER EVENTOS

let textoAyuda = document.createElement("p")
textoAyuda.setAttribute("class", "text-danger")
textoAyuda.setAttribute("id", "des1")
textoAyuda.setAttribute("style", "display: none;")
textoAyuda.textContent = "INGRESA TU NOMBRE Y TU SEGUNDO NOMBRE EN ESTE CAMPO"

let selector = document.getElementsByTagName("label")
selector[0].appendChild(textoAyuda)


let btnG = document.getElementById("btnG")
btnG.addEventListener("click", mostrar)

let des1 = document.getElementById("des1")

let nombre = document.getElementById("nombre")

////////////////////////////////////////////////

function mostrar(e) {
    e.preventDefault()

    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let email = document.getElementById("email").value

    console.log(nombre + apellido + email);
}

function aparecer() {
    des1.style.display = "block";
}

function desaparecer() {
    des1.style.display = "none";
}

////////////////////////////////////////////////////////

nombre.addEventListener("click", aparecer)
nombre.addEventListener("focusout", desaparecer)