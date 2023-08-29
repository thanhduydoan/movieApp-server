const express = require('express');
const routerMovie = express.Router();

const controllerMovie = require('../controller/controller')

routerMovie.get('/api/movies/trending/all/:token', controllerMovie.movieTrending);
routerMovie.get('/api/movies/top-rate/:token', controllerMovie.movieRating);
routerMovie.get('/api/movies/discover/:category/:token', controllerMovie.movieCategory);
routerMovie.get('/api/search/:token', controllerMovie.search);

exports.routerMovie = routerMovie;  
