'use strict'

/*
Tabla de multiplicar de un numero ingresado por el usuario
*/

var num = parseInt(prompt("¿De que numero quieres la tabla?",1));

for(var i = 1; i <= 10; i++){
    document.write(num + " x " + i + " = " + num*i + "<br>");
}
