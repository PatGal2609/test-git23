

let numberOfFilms;
function start() {
    numberOfFilms = +prompt('Сколько филмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько филмов вы уже посмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}
const a = prompt('Один из последних просмотренных фильмов?', ''),
 b = prompt('На сколько оцените его?', ''),
 c = prompt('Один из последних просмотренных фильмов?', ''),
 d = prompt('На сколько оцените его?', '');
 personalMovieDB.movies[a] = b;
 personalMovieDB.movies[c] = d;

// let result = '';
// const length = 10;
// for (let i = 1; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }
//     result += '\n';
// }
// console.log(result);
// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
//     if ( a != null && b != null && a != '' & b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('Done');
//     } else {
//         console.log('Error');
//         --i;
//     }
// }

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
        if ( a != null && b != null && a != '' & b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done');
        } else {
            console.log('Error');
            --i;
        }
    }
}

rememberMyFilms();

function detectPersonLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Мало фильм");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log('Хорошо');
    } else if (personalMovieDB.count >= 30) {
        console.log("Киноман");
    } else {
        console.log("Произашло ошибка");
    }
}

detectPersonLevel();

function showMyDB() {
    if (!personalMovieDB.private) {
        console.log(personalMovieDB);
    } else {
        console.log('Pas prive');
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Votre genre de film prefere c'est le numero ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

// if (personalMovieDB.count < 10) {
//     console.log("Мало фильм");
// } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
//     console.log('Хорошо');
// } else if (personalMovieDB.count >= 30) {
//     console.log("Киноман");
// } else {
//     console.log("Произашло ошибка");
// }

