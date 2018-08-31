'use strict'

// Fetch y peticions a servicios / apis rest

var users = [];
var divUsers = document.querySelector('#usuarios');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(data => {
        users = data;
        console.log(users);

        users.map((data, i) => {
           let nombre = document.createElement('h2');

           nombre.innerHTML = i + ' - ' + data.name;
           divUsers.appendChild(nombre);

           document.querySelector('.loading').style.display = 'none';
        });
});