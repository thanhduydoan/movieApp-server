// Import the 'fs' module to work with the file system, specifically the Promise-based version of 'fs'
const fs = require('fs').promises;

// Import the 'path' module to work with file and directory paths
const path = require('path');

// Define the path to the 'videoList.json' file
const pathJSON = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'videoList.json'
)

// Define a function to check if a video's id matches the given id
const getVideoById = (video, id) => video.id === id;

// Define a function to sort videos by 'published_at' date in descending order
const sortByDate = (a, b) => Date.parse(b.published_at) - Date.parse(a.published_at);

// Define a function to check if a video is an official YouTube video
const isOfficialYouTubeVideo = video => video.official && video.site === 'YouTube';

// Define an object 'videoList' with a method 'trailler'
const videoList = {
    trailler: function (id) {
        // Read the 'videoList.json' file and return a Promise
        return fs.readFile(pathJSON)
            .then(data => {
                // Parse the data from the file to a JavaScript object
                let videos = JSON.parse(data);
                // Filter the videos by id
                let filteredVideos = videos.filter(video => getVideoById(video, id));
                // Sort the filtered videos by date
                let sortedVideos = filteredVideos.sort(sortByDate);
                // Filter the sorted videos to get only the official YouTube videos
                return sortedVideos.filter(isOfficialYouTubeVideo);
            })
            // Catch any errors that occur during the file reading or processing
            .catch(err => console.error(err));
    }
}

// Export the 'videoList' object
exports.videoList = videoList;