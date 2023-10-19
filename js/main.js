// const numberOfFilms = +prompt('Сколько филмов вы уже посмотрели?', '');
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// }
// const a = prompt('Один из последних просмотренных фильмов?', ''),
//  b = prompt('На сколько оцените его?', ''),
//  c = prompt('Один из последних просмотренных фильмов?', ''),
//  d = prompt('На сколько оцените его?', '');
//  personalMovieDB.movies[a] = b;
//  personalMovieDB.movies[c] = d;

let result = '';
const length = 10;
for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
        result += '*';
    }
    result += '\n';
}
console.log(result);
