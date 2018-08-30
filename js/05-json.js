'use strinc'

//JSON

var pelicula = {
    title: 'Avengers Infity War',
    year: '2018',
    country: 'Estados Unidos'
};

var moovies = [
    {
        title: 'Avengers Infity War',
        year: '2018',
        country: 'Estados Unidos'
    },
    {
        title: 'Ant-man and the wasp',
        year: '2018',
        country: 'Estados Unidos'
    }
];

var div_pelis = document.querySelector('#peliculas');

for (var index in moovies){
    var p = document.createElement('p');
    p.append(moovies[index].title + ' - ' + moovies[index].year);
    div_pelis.append(p);
}