let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
console.log(numberOfFilms);

let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

let oneQuestion = prompt('Один из последних посмотренных фильмов?');
console.log(oneQuestion);
let secondQestion = prompt('На сколько вы оцените его?');
console.log(secondQestion);
let b = prompt('Один из последних посмотренных фильмов?');
let c = prompt('На сколько вы оцените его?');

personalMovieDB.movies[oneQuestion] = secondQestion;
personalMovieDB.movies[b] = c;




