// Exercise 1: Building a RESTful API

// You’re tasked with building a RESTful API for a blog platform.
// Users should be able to create, read, update, and delete blog posts using different endpoints.

// 1. Create a directory named blog-api.
// 2. Inside the blog-api directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.
// 3. Install the express package by running npm install express in the terminal.
// 4. Create a file named server.js.
// 5. In server.js, require the express package and set up an Express app.
// 6. Create a data array to simulate a database. Each item in the array should represent a blog post with properties like id, title, and content.
// 7. Implement the following routes using Express:
//  - GET /posts: Return a list of all blog posts.
//  - GET /posts/:id: Return a specific blog post based on its id.
//  - POST /posts: Create a new blog post.
//  - PUT /posts/:id: Update an existing blog post. 
//  - DELETE /posts/:id: Delete a blog post.
// 8. Implement error handling for invalid routes and server errors.
// 9. Start the Express app and listen on a specified port (e.g., 3000).

const express = require('express');

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

const posts = [
    {
        id: 1,
        title: 'Lorem ipsum',
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    {
        id: 2,
        title: 'Cicero',
        content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    },
    {
        id: 3,
        title: 'Li Europan lingues',
        content: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.'
    },
    {
        id: 4,
        title: 'Far far away',
        content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    },
    {
        id: 5,
        title: 'Kafka',
        content: 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.'
    }
]

app.get('/posts', (request, response) => {
    response.json(posts);
});

app.get('/posts/:id', (request, response) => {
    const {id} = request.params;
    const post = posts.find(item => item.id == id);
    if (!post) return response.status(404).json({msg: 'Post not found'});
    response.json(post);
});

app.post('/posts', (request, response) => {
    const newPost = {...request.body, id: posts.length + 1};
    posts.push(newPost);
    response.status(201).json(newPost);
});

app.put('/posts/:id', (request, response) => {
    const {id} = request.params;
    const { title, content } = request.body;
    const index = posts.findIndex(item => item.id == id);
    if (index === -1) return response.status(404).json({msg: 'Post not found'});
    posts[index] = {...posts[index], title: title, content: content};
    response.status(200).json('Post updated');
});

app.delete('/posts/:id', (request, response) => {
    const {id} = request.params;
    const index = posts.findIndex(item => item.id == id);
    if (index === -1) return response.status(404).json({msg: 'Post not found'});
    posts.splice(index, 1);
    response.status(200).json('Post deleted');
});