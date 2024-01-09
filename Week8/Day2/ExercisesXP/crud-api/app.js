// Exercise 3: Building a Basic CRUD API with Express and Axios using a Data Module

// Part 1: Setting Up the Express Server
// 1. Create a new directory named crud-api.
// 2. Inside the crud-api directory, initialize a new Node.js project and install the express and axios packages.
// 3. Create a new file named app.js in the crud-api directory.
// 4. In app.js, import the express module and create an instance of an Express app.
// 5. Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.

const express = require('express');
const app = express();
const { fetchPosts } = require('./data/dataService.js')

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

app.get('/posts', (request, response) => {
    fetchPosts()
    .then((data) => {
        response.json(data.data);
        console.log('Data retrieved successfully')
    })
    .catch((error) => console.log(error.message))
});

