console.log("Hola");

/*
for(expresionIniciar;condicion;expresionFinal){
    sentencia
}

let numero = 1;

for (numero; numero <= 10; numero++) {
    console.log(`El numero es ${numero}`)
}



for (let i = 0; i <= 10; i++) {
    console.log(`El valor de i es ${i}`)
}

console.log("Estoy fuera del bucle")

*/

//   .length      mide la longitud del string
//   .substr(valorInicial,ValorFinal)    toma una porcion del string

// "J 0  U 1  L 2  I 3  A 4  N 5"

//let nombre = prompt("Ingresa tu nombre para deletrear")

//for (let i = 0; i < nombre.length; i++) {
//    console.log(nombre.substr(i, 1));
//}

//MODULO % si la division por x numero es entera 

/*
for (let i = 1; i <= 1000; i++) {
    if (i % 2 == 0) {
        console.log(`El numero ${i} no es primo`);
    } else if (i % 3 == 0) {
        console.log(`El numero ${i} no es primo`)
    } else if (i % 5 == 0) {
        console.log(`El numero ${i} no es primo`)
    } else if (i == 1) {
        console.log(`El numero ${i} no es primo`)
    } else {
        console.log(`El numero ${i} es primo GANEEEEEEE`)
    }
}
*/

// Armar un programa que me deletree

//Si es vocal tiene que salir un error y continuar

//Si es la letra E tiene que parar la ejecucion

//Tiene que usar switch


/*
Pedir un texto mediante prompt, concatenar un valor en cada repetición
realizando una salida por cada resultado, hasta que se ingresa “ESC”.

*/

let valor = prompt("Ingrese valor");

let seguir = prompt("Ingresa la palabra clave para frenar")

while (seguir != "ESC") {

    console.log(valor);

    let ingresar = prompt("Ingresar palabra para concatenar");
    valor = valor + ingresar

    seguir = prompt("Ingresa la palabra clave para frenar")
}