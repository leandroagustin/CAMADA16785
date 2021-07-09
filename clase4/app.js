//
//
//
//Varaibles GLobales

//scope

//LOCAL let

//GLOBAL
/* 
function calculadora(a, b, operacion) {

    if (b === 0 && operacion === "/") {
        let error = "No se puede dividir por 0, estas loco"
        return error
    } else {
        switch (operacion) {
            case "+":
                return a + b;
                break;
            case "-":
                return a - b;
                break;
            case "*":
                return a * b;
                break;
            case "/":
                return a / b;
                break;
            default:
                return 0;
                break;
        }
    }

}

let numero1 = Number(prompt("ingresa numero 1"))
let numero2 = Number(prompt("ingresa numero 2"))
let operacion = prompt("ingresa operacion")

console.log(calculadora(5, 10, "+")); */


function calcularPromedio(a, b, c, d) {
    let sumaTotal = a + b + c + d
    let resultado = sumaTotal / 4
    return resultado
}

let n1 = Number(prompt("ingresar nota 1 a promediar"))
let n2 = Number(prompt("ingresar nota 2 a promediar"))
let n3 = Number(prompt("ingresar nota 3 a promediar"))
let n4 = Number(prompt("ingresar nota 4 a promediar"))

alert(calcularPromedio(n1, n2, n3, n4) + " es tu promedio")