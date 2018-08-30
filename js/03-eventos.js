'use strict'

// Eventos del raton

window.addEventListener('load', () => {

    function cambiarColor() {
        console.log('Presionado');

        button.style.background = 'red';
        button.style.padding = '10px';
        button.style.border = '1px solid #ccc';

        return true;
    }

    var button = document.querySelector('#boton');

// Click
    button.addEventListener('click', function () {
        cambiarColor();
        this.style.border = "5px solid black";
    });

// MouseOver
    button.addEventListener('mouseover', function () {
        button.style.background = 'lightblue';
    });

// MouseOut

    button.addEventListener('mouseout', function () {
        button.style.background = 'white';
    });


// Focus

    var input = document.querySelector('#field_name');
    input.addEventListener('focus', function () {
        console.log('Estas dentro del input');
    });

// Blur

    input.addEventListener('blur', function () {
        console.log('Estas fuera del input');
    });

// KeyDown

    input.addEventListener('keydown', function (event) {
        console.log('Pulsando esta tecla :', String.fromCharCode(event.keyCode));
    });

// KeyPress

    input.addEventListener('keypress', function (event) {
        console.log('Tecla presionada: ', String.fromCharCode(event.keyCode));
    });

// KeyUp

    input.addEventListener('keyup', function (event) {
        console.log('Tecla levantada: ', String.fromCharCode(event.keyCode));
    });
});

