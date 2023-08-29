const fs = require('fs');
const path = require('path');

const genresPath = path.join(path.dirname(process.mainModule.filename), 'data', 'genreList.json');

const readJsonFile = (filePath) => JSON.parse(fs.readFileSync(filePath, 'utf8'));

exports.idOfCategory = function (category) {
    const categories = readJsonFile(genresPath);
    const categoryItem = categories.find(item => item.name === category);
    return categoryItem ? categoryItem.id : 0;
};