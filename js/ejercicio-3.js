'use strict'

/*
Mostrar todos los numeros impares entre dos numeros introducidos por el usuario
*/

var num1 = parseInt(prompt("Introduce el primer numero",0));
var num2 = parseInt(prompt("Introduce el segundo numero",0));

document.write("Los numeros impares entre " + num1 + " y " + num2 + " son: <br>");
for(var i = num1+1; i < num2; i++){
    if(i%2 != 0){
        document.write("El numero " + i + " es impar<br>");
    }
}

for(var i = num2+1; i < num1; i++){
    if(i%2 != 0){
        document.write("El numero " + i + " es impar<br>");
    }
}24