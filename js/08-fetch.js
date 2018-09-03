'use strict'

// Fetch y peticions a servicios / apis rest

var divUsers = document.querySelector('#usuarios');
var divUser2 = document.querySelector('#user2');

    getUsuarios()
    .then(data => data.json())
    .then(users => {
        listadoUsuarios(users.data);

        return getUser2();
    })
        .then(data => data.json())
        .then(user2 =>{
            listarUser2(user2.data);
        });

function getUsuarios() {
    return fetch('https://jsonplaceholder.typicode.com/users');
}

function getUser2() {
    return fetch('https://jsonplaceholder.typicode.com/users/2');
}

function listadoUsuarios(usuarios) {
    usuarios.map((user, i) => {
        let nombre = document.createElement('h2');

        nombre.innerHTML = i + ' - ' + user.name;
        divUsers.appendChild(nombre);

        document.querySelector('.loading').style.display = 'none';
    });
}

function listarUser2(user) {

    let nombre = document.createElement('h4');

    nombre.innerHTML = user.name;
    divUser2.appendChild(nombre);

    document.querySelector('#user2.loading').style.display = 'none';
}