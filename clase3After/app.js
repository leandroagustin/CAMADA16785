//for...........................................................
/* 
Repaso de la teoria



for ([expresion-inicial]; [condicion]; [expresion-final]){
    sentencia
}


const Juan;cont 


-----en criollo----
recordar que las expresiones van separadas con ;
[expresion-inicial] = inicio del blucle
[condicion] = si es true se ejecuta el bucle
[expresion-final] = se ejecuta al final de cada bucle
sentencia = bloque de codigo que queremos que se ejecute



.length     mide la longitud del string
.substr()     toma una porcion del string 


let nacimiento = prompt("ingresa el año en que naciste");
let anioActual = 2021

for (nacimiento; nacimiento <= anioActual;) {
    console.log(`El valor de i es ${nacimiento}`);
    nacimiento++;
}
*/

/*
let nacimiento = prompt("ingresa el año en que naciste");
let anioActual = 2021

while (nacimiento <= anioActual) {
    console.log(`El valor de i es ${nacimiento}`);
    nacimiento++;
}
*/



/*
Pedir número mediante prompt y sumarle otro número en cada repetición,
realizando una salida por cada resultado

Pedir un texto mediante prompt, concatenar un valor en cada repetición, 
realizando una salida por cada resultado, hasta que se ingresa “ESC”.

let texto = prompt("Ingresa tu dato a concatenar");
let palabraClave = prompt("ingresa la palabra secreta");

while (palabraClave != "ESC") {

    let nuevoDato = prompt("ingresa nuevo dato")
    texto = texto + "-" + nuevoDato;
    console.log(texto);
    palabraClave = prompt("ingresa la palabra secreta")
}


Pedir un número por prompt, repetir la salida del mensaje
“Hola” la cantidad de veces ingresada.

let datoNumero = prompt("ingresa el dato");

for (let i = 0; i < datoNumero; i++) {
    console.log("hola");
}
*/

// != distinto   es lo contrario a ==
/*
ESTO ES PARA X COSA
RECIBE UN STRING
LARGA UN NUMERO
*/
let texto = prompt("Ingresa la palabra");
let nuevoDato;

do {
    console.log(texto);
    nuevoDato = prompt("Nueva palabra");
    texto = texto + "-" + nuevoDato;
} while (nuevoDato != "ESC");



/*
for(let i = 0; i<=10; i++){
console.log("hola" + i);
}
*/

//j 0 u 1 l 2 i 3 a 4 n 5

//let texto = "julian"
//let probando = texto.substr(2,3)

//console.log(probando);

//deletrador 

/* let tester = prompt("¿Que palabra queres deletrar?");

for(let i = 0; i <= tester.length; i++){
console.log(tester.substr(i,1));
}

break    corta el bucle hasta la siguiente sentencia
continue;  hace una pausa en la iteracion actual y sigue en la siguiente



let tester = "probando";

for(let i = 0; i <= tester.length; i++){

    if(i == 3){
        break;
    }

    console.log(tester.substr(i,1));

}


let tester = "probando";

for(let i = 0; i <= tester.length; i++){

    if(i == 3){
        console.log("me comi este caracter  " + tester.substr(i,1));
        continue;
    }

    console.log(tester.substr(i,1));

}

 */

//while

/*  

ejecuta el bucle mientras la condicion sea verdadera

while(condicion) {
    sentencia
}

let texto = "probando";
let i = 0;

while(i <= texto.length ) {
console.log(texto.substr(i,1));
i++; 
}

*/
//do while

/*     
do{
sentencia
}while(condicion)



let texto = "probando";
let i = 0;

do{
console.log(texto.substr(i,1));
i++
}while(i <= texto.length)
*/

//switch
/* es una declaracion

switch(expresion) {
    case comparacion:
        "sentencia"
    break;
    default:
        "sentencia"
}



let tester = prompt("Decime un animal");

switch(tester){
    case "gato":
        console.log("Es de la familia de los felinos");
        break;
    case "perro":
        console.log("Es de la familia de los caninos");
        break;
    default:
        console.log("No conozco ese animal"); 
}

*/

/* let tester = prompt("Escribi la palabra que quieras deletrar");

for(let i = 0; i <= tester.length; i++){

    if(tester.substr(i,1) == "a" || tester.substr(i,1) == "A") {
        console.log("Detectamos una vocal, esta es la letra " + tester.substr(i,1));
        continue;
    } else if(tester.substr(i,1) == "e" || tester.substr(i,1) == "E"){
        console.log("Detectamos una vocal, esta es la letra " + tester.substr(i,1));
        continue;
    } else if(tester.substr(i,1) == "i" || tester.substr(i,1) == "I"){
        console.log("Detectamos una vocal, esta es la letra " + tester.substr(i,1));
        continue;
    } else if(tester.substr(i,1) == "o" || tester.substr(i,1) == "O"){
        console.log("Detectamos una vocal, esta es la letra " + tester.substr(i,1));
        continue;
    } else if(tester.substr(i,1) == "u" || tester.substr(i,1) == "U"){
        console.log("Detectamos una vocal, esta es la letra " + tester.substr(i,1));
        continue;
    }

    console.log(tester.substr(i,1));

} */