let numberOfFilms

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
    };
};

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};



function rememberMyFilms() {
    for(let i = 0; i < 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('Насколько вы оцените его?', '')
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done')
        } else {
            console.log('error')
            i--
        }
    };
}

rememberMyFilms();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log ('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

rememberMyFilms();

function ShowMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    } else {
        console.log ("Произошла ошибка выполнения");
    }
}

ShowMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for(let i = 0; i < 3; i++) {
        let answer = prompt(`Ваш любимый жанр под номером ${i + 1}`)

        if(answer === null || answer === '') {
            i--
        }

        personalMovieDB.genres[i] = answer
    }

    console.log(personalMovieDB.genres)
}

writeYourGenres();