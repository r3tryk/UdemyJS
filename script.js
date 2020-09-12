let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
console.log(numberOfFilms);

let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних посмотренных фильмов?', '');
          b = prompt('На сколько вы оцените его?', '');
          //нижняя строка проверяет : если пользователь нажал отмена(тоесть а = null)и также с б , пользователь не отправил пустую строку , и кол-во символов меньше 50.
    if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
        personalMovieDB.movies[a] = b;  
    } else {
        i--;
    }
    
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман!');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);


