// Importing required modules
const dataMovie = require('../models/movie');
const dataVideo = require('../models/videoList');
const util = require('../utils/paginate');
const auth = require('../middleware/middleware');

// Setting the number of items per page
const numberOfPage = 20;

// Function to handle requests for trending movies
exports.movieTrending = (req, res, next) => {
    // Extracting the token from the request parameters
    let token = req.params.token;
    // Checking if the request is authorized
    if (auth.auth(token)) {
        // Fetching the trending movies
        let data = dataMovie.movie.trending();
        // Getting the page number from the request query, defaulting to 0 if not provided
        let page = req.query.page == undefined ? 0 : req.query.page;
        // Paginating the results
        let itemOfPage = util.paginate(data, page, numberOfPage);
        try {
            // Sending the paginated results in the response
            res.status(200);
            res.send({
                results: itemOfPage,
                page: page,
                total_pages: data.length
            });
        } catch (err) {
            // Sending a 400 Bad Request status if an error occurs
            res.send(400, err);
        }
        // Ending the response
        res.end();
    } else {
        // Sending a 401 Unauthorized status if the request is not authorized
        res.status(401).send('<h1>Unauthorized</h1>')
    }
}

exports.movieRating = (req, res, next) => {
    // Extracting the token from the request parameters
    let token = req.params.token;
    // Checking if the request is authorized
    if (auth.auth(token)) {
        // Fetching the movies sorted by rating
        let data = dataMovie.movie.rating();
        let page = req.query.page == undefined ? 0 : req.query.page;
        let itemOfPage = util.paginate(data, page, numberOfPage);
        try {
            res.status(200);
            res.send({
                results: itemOfPage,
                page: page,
                total_pages: data.length
            });
        } catch (err) {
            res.status(400).message('Not found film_id parram');
        }
        res.end();
    } else {
        res.status(401).send('<h1>Unauthorized</h1>')
    }
}

exports.movieCategory = (req, res, next) => {
    // Extracting the token and category from the request parameters
    let token = req.params.token;
    // Checking if the request is authorized
    if (auth.auth(token)) {
        // Fetching the movies in the specified category
        let category = req.params.category == 'all' ? '' : req.params.category;
        let idCategory = category == '' ? 0 : dataMovie.movie.idOfCategory(category);
        let data = idCategory == 0 ? dataMovie.movie.all() : dataMovie.movie.movieCategory(idCategory);
        // Paginating the results and sending them in the response
        let page = req.query.page == undefined ? 0 : req.query.page;
        let itemOfPage = util.paginate(data, page, numberOfPage);
        try {
            res.status(200);
            res.send({
                results: itemOfPage,
                page: page,
                total_pages: data.length,
                genre_ids: category
            });
        } catch (err) {
            res.status(400).message('Not found film_id parram');
        }
        res.end();
    } else {
        // Sending a 401 Unauthorized status if the request is not authorized
        res.status(401).send('<h1>Unauthorized</h1>')
    }
}

exports.videoList = (req, res, next) => {
    let token = req.params.token;
    if (auth.auth(token)) {
        let idVideo = req.query.id;
        let videoList = dataVideo.videoList.trailler(idVideo);
        // Sending the videos in the response
        try {
            res.status(200);
            res.send(videoList);
        } catch (err) {
            res.status(400).message('Not found film_id param');
            res.status(404).message('Not found video')
        }
    } else {
        res.status(401).send('<h1>Unauthorized</h1>')
    }
}

exports.search = (req, res, next) => {
    let token = req.params.token;
    if (auth.auth(token)) {
        // Fetching the movies that match the search query
        let search = req.query.search;
        let dataSearch = dataMovie.movie.search(search);
        // Paginating the results and sending them in the response
        let page = req.query.page == undefined ? 0 : req.query.page;
        let itemOfPage = util.paginate(dataSearch, page, numberOfPage);
        try {
            res.status(200);
            res.send({
                results: itemOfPage,
                page: page,
                total_pages: dataSearch.length
            });
        } catch (err) {
            res.status(400).message('Not found keyword parram');
        }
        res.end();
    } else {
        res.status(401).send('<h1>Unauthorized</h1>')
    }
}
