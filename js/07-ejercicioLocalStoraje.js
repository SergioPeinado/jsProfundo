'use strict'

var form = document.querySelector('#formMovies');

form.addEventListener('submit', function () {

    var title = document.querySelector('#addmovie').value;
    if (title.length >= 1){
        localStorage.setItem(title, title);
    }
});

var ul = document.querySelector('#movieList');
for (var i in localStorage){

    if (typeof localStorage[i] == 'string'){
        var li = document.createElement('li');
        li.append(localStorage[i]);
        ul.append(li);
    }
}

var deleteForm = document.querySelector('#formDeleteMovies');

deleteForm.addEventListener('submit', function () {

    var title = document.querySelector('#deletemovie').value;

    if (title.length >= 1){
        localStorage.removeItem(title, title);
    }
});

