const { response } = require("express");
const { users } = require("../config/db.js");

const getAllUsers = (request, response) => {
    response.json(users);
}

const searchUserName = (request, response) => {
    const {name} = request.query;
    const results = users.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
    if (results.length === 0) return response.status(404).json({msg: 'Users not found'});
    response.json(results);
}

const getUser = (request, response) => {
    const {id} = request.params;
    const user = users.find(item => item.id == id);
    if (!user) return response.status(404).json({msg: 'User to get not found'});
    response.send(`Name: ${user.name}, email: ${user.email}`);
}

const addUser = (request, response) => {
    console.log(request.body);
    const new_user = {...request.body, id: users.length + 1};
    users.push(new_user);
    response.json(users);
}

const updateUser = (request, response) => {
    const {id} = request.params;
    const { name, email } = request.body;
    const index = users.findIndex(item => item.id == id);
    if (index === -1) return response.status(404).json({msg: 'User to update not found'});
    users[index] = {...users[index], name: name, email: email};
    response.json(users);
}

const deleteUser = (request, response) => {
    const {id} = request.params;
    const index = users.findIndex(item => item.id == id);
    if (index === -1) return response.status(404).json({msg: 'User to delete not found'});
    users.splice(index, 1);
    response.json(users);
}

module.exports = { getAllUsers, getUser, searchUserName, addUser, updateUser, deleteUser };