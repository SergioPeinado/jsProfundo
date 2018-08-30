'use strict'

window.addEventListener('load', function () {
    console.log('DOM cargado');

    var formulario = document.querySelector('#formulario');
    var box_dashed = document.querySelector('.dashed');
    box_dashed.style.display = 'none';

    formulario.addEventListener('submit', function () {
        console.log('Evento submit capturado');

        var name = document.querySelector('#field_name').value;
        var surname = document.querySelector('#field_surname').value;
        var age = parseInt(document.querySelector('#field_age').value);

        if (name.trim() == null || name.trim().length === 0) {
            alert('El nombre no es valido');

            return false;
        }

        if (surname.trim() == null || surname   .trim().length === 0) {
            alert('Los apellidos no son validos');

            return false;
        }

        if (age == null || age <= 0 || isNaN(age)) {
            alert('La edad no es valida');

            return false;
        }

        box_dashed.style.display = 'block';

        var p_name = document.querySelector('#p_name span');
        var p_surname = document.querySelector('#p_surname span');
        var p_age = document.querySelector('#p_age span');

        p_name.innerHTML = name;
        p_surname.innerHTML = surname;
        p_age.innerHTML = age;

        console.log(name);
        console.log(surname);
        console.log(age);

    });

});