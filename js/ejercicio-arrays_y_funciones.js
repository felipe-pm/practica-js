'use strict'

/*
1. Pida 6 numeros por pantalla y los meta en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
3. Ordenar el array y mostrarlo
4. Invertir el orden del array y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Buscar un valor introducido por el usuario y que nos diga la posicion del elemento que le corresponde
(se valorara el uso de funciones)
*/

function mostrarArray(elementos, textoCustom = ""){
    document.write("<h1>Contenido del array " + textoCustom + "</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
        document.write("<li>" + elemento + "</li>");
    })
    document.write("</ul>");
}

var numeros = new Array(6);

/* 1. Pida 6 numeros por pantalla y los meta en un array */
for(var i = 0; i < 6; i++){
    numeros[i] = parseInt(prompt("Introduce un numero",0));
}

/* 2. Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola */
mostrarArray(numeros);

/* 3. Ordenar el array y mostrarlo */
numeros.sort(function(a, b){return a - b});
mostrarArray(numeros, "ordenado");

/* 4. Invertir el orden del array y mostrarlo */
numeros.reverse();
mostrarArray(numeros, "invertido");

/* 5. Mostrar cuantos elementos tiene el array */
document.write("<h1>El array tiene " + numeros.length + " elementos </h1>");

/* 6. Buscar un valor introducido por el usuario y que nos diga la posicion del elemento que le corresponde
(se valorara el uso de funciones) */
var valorABuscar = parseInt(prompt("Introduce el valor que quieres buscar",0));
var posicion = numeros.indexOf(valorABuscar);

if(posicion && posicion != -1){
    document.write("<h1>El valor " + valorABuscar + " se encuentra en la posicion " + posicion + " del array</h1>");
}else{
    document.write("<h1>El valor " + valorABuscar + " no se encuentra en el array</h1>");
}
