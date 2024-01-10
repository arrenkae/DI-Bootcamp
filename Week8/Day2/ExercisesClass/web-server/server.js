/** API Restful API */
/** CRUD */

const express = require('express');
const bp = require('body-parser');

const app = express();
app.use(bp.urlencoded({extended:true}));
app.use(bp.json());

app.listen(3001, () => {
    console.log('run on port 3001');
});

app.use('/', express.static(__dirname + '/public'));

/*
app.get
app.post
app.put
app.delete
*/
/** CRUD
 * C - Create - POST
 * R - Read - GET
 * U - Update - PUT
 * D - Delete - DELETE
*/

const users = [
    {id:1, name:'John', email:'jjj@gmail.com'},
    {id:2, name:'Marry', email:'mmm@gmail.com'},
    {id:3, name:'Anne', email:'aaa@gmail.com'},
]
/** Read */

app.get('/users', (request, response) => {
    response.json(users); // stringify automatically
});
/** Read */

app.get('/api', (request, response) => {
    response.send('<h1>API</h1>');
});
/** Read */

// params
app.get('/users/:id', (request, response) => {
    const {id} = request.params;
    const user = users.find(item => item.id == id);
    if (!user) return response.status(404).json({msg: 'User not found'});
    response.send(`Name: ${user.name}, email: ${user.email}`);
});
/** Read */

// query
app.get('/search', (request, response) => {
    const {name} = request.query;
    const results = users.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
    if (results.length === 0) return response.status(404).json({msg: 'Users not found'});
    response.json(results);
});
/** Read */

/** Create a new user - POST */
app.post('/users', (request, response) => {
    console.log(request.body);
    const new_user = {...request.body, id: users.length + 1};
    users.push(new_user);
    response.json(users);
});

/** Update - update a user */
/** user id to update - params
 * data - name, email to update - body
 */
app.put('/users/:id', (request, response) => {
    const {id} = request.params;
    const { name, email } = request.body;
    const index = users.findIndex(item => item.id == id);
    if (index === -1) return response.status(404).json({msg: 'User not found'});
    users[index] = {...users[index], name: name, email: email};
    response.json(users);
});

/** Delete - delete a user */
/** user id to update - params
*/
 
app.delete('/users/:id', (request, response) => {
    const {id} = request.params;
    const index = users.findIndex(item => item.id == id);
    if (index === -1) return response.status(404).json({msg: 'User not found'});
    users.splice(index, 1);
    response.json(users);
});
