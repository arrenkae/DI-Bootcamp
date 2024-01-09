const axios = require('axios');

const fetchPosts = async() => {
    try {
        return await axios.get('https://jsonplaceholder.typicode.com/posts');
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = { fetchPosts };