'use strict'

/*
Muestre todos los numeros divisores de un numero introducido por el usuario
*/

var num = parseInt(prompt("Introduce un numero",0));

for(var i = 1; i <= num; i++){
    if(num%i == 0){
        document.write(i + " es divisor de " + num + "<br>");
    }
}