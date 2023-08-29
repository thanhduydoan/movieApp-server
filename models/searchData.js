const { allMovies } = require('./movieData');

// Function to check if movie details include the search term
const includesSearchTerm = (detail, keyword) =>
    detail?.toLowerCase().includes(keyword.toLowerCase());

exports.search = function (keyword) {
    const allMoviesData = allMovies();
    return allMoviesData.filter(movie =>
        includesSearchTerm(movie.title, keyword) ||
        includesSearchTerm(movie.overview, keyword)
    );
}