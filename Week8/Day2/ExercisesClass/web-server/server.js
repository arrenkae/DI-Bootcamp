/** API Restful API */
/** CRUD */

const express = require('express');
const app = express();

console.log('hi from server');

app.listen(3001, () => {
    console.log('run on port 3001');
});

/*
app.get
app.post
app.put
app.delete
*/

app.use('/', express.static(__dirname + '/public'));

const users = [
    {id:1, name:'John', email:'jjj@gmail.com'},
    {id:2, name:'Marry', email:'mmm@gmail.com'},
    {id:3, name:'Anne', email:'aaa@gmail.com'},
]

app.get('/users', (request, response) => {
    response.json(users); // stringify automatically
});

app.get('/api', (request, response) => {
    response.send('<h1>API</h1>');
});

// params
app.get('/users/:id', (request, response) => {
    const {id} = request.params;
    const user = users.find(item => item.id == id);
    if (!user) return response.status(404).json({msg: 'User not found'});
    response.send(`Name: ${user.name}, email: ${user.email}`);
});

// query
app.get('/search', (request, response) => {
    const {name} = request.query;
    const results = users.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
    if (results.length === 0) return response.status(404).json({msg: 'Users not found'});
    response.json(results);
});
