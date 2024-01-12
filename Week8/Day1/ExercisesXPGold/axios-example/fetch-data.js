// Exercise 2 : Fetching and Displaying Data with Axios (pt.1)

// 1. Create a directory named axios-example.
// 2. Inside the axios-example directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.
// 3. Install the axios package by running npm install axios in the terminal.
// 4. Create a file named fetch-data.js inside the axios-example directory.
// 5. In fetch-data.js, require the axios package and use it to make an HTTP GET request to a JSON placeholder API (e.g., https://jsonplaceholder.typicode.com/posts) and fetch a list of posts.
// 6. Display the title of each post in the terminal.

import axios from "axios";

export const getPosts = async() => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        for (let post of response.data) {
            console.log(post.title);
        }
    } catch (error) {
        console.log(error);
    }
};