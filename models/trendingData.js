const { allMovies } = require('./movieData');

exports.trending = function () {
    const allMoviesData = allMovies();
    // console.log(tredingData, allMoviesData)
    return allMoviesData.sort((a, b) => b.popularity - a.popularity);
}