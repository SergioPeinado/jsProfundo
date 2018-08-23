'use strict'

// DOM - Document Object Model

function changeColor(color) {
    caja.style.background = color;
}
// var caja = document.getElementById('micaja');
var caja = document.querySelector('#micaja');
caja.innerHTML = 'Texto Cambiado desde js';

changeColor(prompt('Elige un color', 'red'));

//Conseguir elementos por su etiqueta

var allDivs = document.getElementsByTagName('div');
var seccion = document.querySelector('#miseccion');

for (var value in allDivs){
    if(typeof allDivs[value].textContent == 'string') {
        var parrafo = document.createElement('p');
        var texto = document.createTextNode(allDivs[value].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
}

// Conseguir elementos por su clase css

var redDivs = document.getElementsByClassName('rojo');

for (var color in redDivs){
    if(redDivs[color].className == 'rojo') {
        redDivs[color].style.background = 'red';
    }
}
console.log(redDivs);