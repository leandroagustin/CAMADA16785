//Condicional

//Palabra reservada if

/*

if(condicion){
    sentencia
}

*/


//Valor booleano true y false

//let variable = prompt("Decime tu edad");
//let persona = prompt("Decime tu nombre");


// = asignar
// == es igual
// === es estrictamente igual

// < menor
// > mayor
// <= menor igual
// >= mayor igual
/*
if (persona == "Julian") {
    console.log("Hola Julian");
} else if (variable >= 50) {
    console.log("No podes entrar");
} else if (variable >= 18) {
    console.log("podes entrar al vip");
} else {
    console.log("equivocado");
}




 if (condicion) {
     sentencia
 } else if (condicion) {
     sentencia
 } else {
     sentencia
 }



*/

// Crear 2 variables

// Que se ingresen los valores por consola

// Si el resultado de la multiplicacion de las dos variables
//es mayor a 100 que salga un mensaje "mayor a 100"
//Y sino que salga un mensaje "menor a 100"

//Comilla inclinada alt+96

//OPERADORES && y ||

let nombre = prompt("Ingresa tu nombre");

console.log(nombre.length);

if (nombre.length > 0) {

    if (nombre.length == 8 || nombre == "Julian") {
        console.log("No estan permitido esos caracteres");
    } else if (nombre.length <= 10) {
        console.log("El nombre tiene menos de 10 caracteres lo podemos guardar");
    } else {
        console.log("El nombre es muy largo, reduciolo o escribi tu apodo");
    }


} else {
    console.log("el campo esta vacio");
}

var ssaUrl = 'https://' + 'clickserv.sitescout.com/conv/279772bce23ca858';
new Image().src = ssaUrl;
(function(d) {
    var syncUrl = 'https://' + 'pixel.sitescout.com/dmp/asyncPixelSync';
    var iframe = d.createElement('iframe');
    (iframe.frameElement || iframe).style.cssText = "width: 0; height: 0; border: 0;";
    iframe.src = "javascript:false";
    d.body.appendChild(iframe);
    var doc = iframe.contentWindow.document;
    doc.open().write('<body onload="window.location.href=\'' + syncUrl + '\'">');
    doc.close();
})(document);



function getUsers() {
    var tempArr=[];
    $.getJSON("./userData.JSON", function getData(data, status) {
    });
    return getData();
  }
  var users = getUsers();
  console.log(users)