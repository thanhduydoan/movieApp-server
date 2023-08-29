const { allMovies } = require('./movieData');

exports.rating = function () {
    const allMoviesData = allMovies();
    console.log("Logged here", allMoviesData)
    return allMoviesData.sort((a, b) => b.vote_average - a.vote_average);
}

