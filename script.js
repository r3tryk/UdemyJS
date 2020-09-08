let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
console.log(numberOfFilms);

let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

let a = prompt('Один из последних посмотренных фильмов?');
console.log(oneQuestion);
let b = prompt('На сколько вы оцените его?');
console.log(secondQestion);
let c = prompt('Один из последних посмотренных фильмов?');
let d = prompt('На сколько вы оцените его?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;




