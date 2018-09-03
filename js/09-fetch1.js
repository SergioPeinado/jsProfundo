'use strict';
// Esto no se llama en ningun sitio
// Solo estoy siguiendo el curso
function getInfo() {

    var alumno = {
        nombre: 'Sergio',
        apellido: 'Peinado',
        url: 'https://speinado.prueba'
    };

    return new Promise((resolve, reject) => {
       var alumno_string = JSON.stringify(alumno);

       if (typeof alumno_string != "string") return reject('error');

       return resolve(alumno_string);
    });
}