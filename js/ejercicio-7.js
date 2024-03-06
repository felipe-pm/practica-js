'use strict'

/*
Calculadora:
- Pida dos numeros por pantalla
- Si metemos uno mal que nos lo vuelva a pedir
- En el cuerpo de la pagina, en una alerta y por la consola el resultado de sumar, restar, multiplicar y dividir esas dos variables
*/

var num1 = parseInt(prompt("Introduce el primer numero",0));
var num2 = parseInt(prompt("Introduce el segundo numero",0));

while(isNaN(num1) || isNaN(num2)){
    num1 = parseInt(prompt("Introduce el primer numero",0));
    num2 = parseInt(prompt("Introduce el segundo numero",0));
}

document.write("Suma: " + (num1+num2) + "<br>");
document.write("Resta: " + (num1-num2) + "<br>");
document.write("Multiplicacion: " + (num1*num2) + "<br>");
document.write("Division: " + (num1/num2) + "<br>");
