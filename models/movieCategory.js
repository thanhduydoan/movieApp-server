const { allMovies } = require('./movieData');

exports.movieCategory = function (categoryId) {
    const allMoviesData = allMovies();
    return allMoviesData.filter(movie => movie.genre_ids && movie.genre_ids.includes(categoryId))
}