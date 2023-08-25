const movies = [
    {"title": "Jaws", "director": "Steven Spielberg", "year": "1975"},
    {"title": "Star Wars", "director": "George Lucas", "year": "1977"},
    {"title": "Avengers: Infinity War", "director": "Anthony and Joe Russo", "year": "2018"},
    {"title": "Top Gun", "director": "Tony Scott", "year": "1986"},
    {"title": "Justice League", "director": "Zack Snyder", "year": "2017"}
];



function findMovie(movieTitle) {
    for (let movie of movies) {
      if (movie.title === movieTitle) {
        console.log(`Movie Title: ${movie.title}, Year: ${movie.year}`);
      }
    }
  }


findMovie("Star Wars");

// console.log("Value of movie:", movie);

var movie = "Thor: Ragnarok";

console.log(movies);
console.log("Value of movie:", movie);

findMovie(movie);


