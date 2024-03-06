'use strict'

/*
Que nos diga si un numero es par o impar.
1. Ventana prompt
2. Si no es valido que nos pida el numero de nuevo
*/

var num = parseInt(prompt("Introduce un numero",0));

while(isNaN(num)){
    num = parseInt(prompt("Introduce un numero",0));
}

if(num%2 == 0){
    document.write("El numero " + num + " es par");
}else{
    document.write("El numero " + num + " es impar");
}

