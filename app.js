// Importing required modules
const http = require('http'); // Node.js built-in module for creating HTTP server
const express = require('express'); // Express.js framework for building web applications
const cors = require('cors'); // Middleware to enable CORS (Cross-Origin Resource Sharing)

// Creating an Express application
const app = express();

// Creating an HTTP server using the Express application
const server = http.createServer(app);

// Importing the movie router
const routerMovie = require('./routes/routes');

// Using CORS middleware to allow cross-origin requests
app.use(cors());

// Using the movie router for handling routes related to movies
app.use(routerMovie.routerMovie);

// Middleware for handling 404 errors (route not found)
app.use((req, res, next) => {
    res.status(400).send({
        message: "Route not found"
    })
})

// Starting the server on port 8080
server.listen(8080)