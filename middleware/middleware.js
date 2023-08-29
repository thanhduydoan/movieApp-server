// Importing required modules
const path = require('path');
const fs = require('fs');

// Constructing the path to the user token file
const pathListUser = path.join(
    path.dirname(process.mainModule.filename), // Getting the directory of the main module
    'data', // Navigating to the 'data' subdirectory
    'userToken.json' // Specifying the 'userToken.json' file
)

// Function to authenticate a user based on a token
const auth = (token) => {
    // Reading the user token file and parsing it as JSON
    let listUser = JSON.parse(fs.readFileSync(pathListUser, 'utf-8'));
    // Finding a user in the list that has the provided token
    let isUser = listUser.find(item => item.token == token);
    // Checking if a user was found
    if (isUser.token != undefined) {
        // If a user was found, the token is valid, so return true
        return true;
    } else {
        // If no user was found, the token is not valid, so return false
        return false;
    }
}

// Exporting the auth function so it can be used in other files
exports.auth = auth;