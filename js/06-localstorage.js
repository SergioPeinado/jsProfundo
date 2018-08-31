'use strict'

// Localstorage

// Comprobar dispobibilidad del localstorage

if (typeof(Storage) !== 'undefined'){
    console.log('Localstorage disponible');
}else {
    console.log('Localstorage no esta disponible');
}

// Guardar datos

localStorage.setItem('title', 'Curso de Symfony');

// Recuperar elemento

document.querySelector('#peliculas').innerHTML = localStorage.getItem('title');

// Guardar objetos

var user = {
    name: 'Sergio Peinado',
    email: 'sergio@curso.com',
    web: 'sergio.com'
};

localStorage.setItem('user', JSON.stringify(user));

// Recuperar objeto

var userJs = JSON.parse(localStorage.getItem('user'));
console.log(userJs);
document.querySelector('#datos').append(' '+userJs.web+' - '+userJs.name);

// Borrar objeto

localStorage.removeItem(user);
// localStorage.clear();