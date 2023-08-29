const fs = require('fs');
const path = require('path');

// Create absolute path to file movieList.json
const moviesPath = path.join(path.dirname(process.mainModule.filename), 'data', 'movieList.json');

// Function that reads the contents of the JSON file and returns a JavaScript object
const readJsonFile = (filePath) => JSON.parse(fs.readFileSync(filePath, 'utf8'));

exports.allMovies = function () {
    return readJsonFile(moviesPath);
};