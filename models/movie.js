const { allMovies } = require('./movieData');
const { idOfCategory } = require('./categoryData');
const { rating } = require('./ratingData');
const { trending } = require('./trendingData');
const { search } = require('./searchData');
const { movieCategory } = require('./movieCategory');

const movie = {
    all: allMovies,
    idOfCategory: idOfCategory,
    trending: trending,
    rating: rating,
    search: search,
    movieCategory: movieCategory
}

exports.movie = movie;








