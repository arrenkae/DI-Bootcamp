const { response } = require("express");
const { _getAllUsers, _getUser, _addUser, _updateUser, _deleteUser } = require('../models/users.models.js')

const getAllUsers = (request, response) => {
    _getAllUsers()
    .then(data => {
        response.json(data);
    })
    .catch(err => {
        response.status(404).json({ msg: "Not found" })
    })
}

// const searchUserName = (request, response) => {
//     const {name} = request.query;
//     const results = users.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
//     if (results.length === 0) return response.status(404).json({msg: 'Users not found'});
//     response.json(results);
// }

const getUser = async(request, response) => {
    const {id} = request.params;
    try {
        const data = await _getUser(id);
        if(data.length === 0) return response.status(404).json({msg: 'User not found'});
        response.status(200).json(data);
    } catch (error) {
        return response.status(404).json({msg: 'Users not found'});
    }
};

const addUser = (request, response) => {
    const { name, email, password } = request.body;
    _addUser(name, email, password)
    .then(data => {
        response.json(data);
    })
    .catch(err => {
        response.status(404).json({msg: 'Cannot add user'});
    })
}

const updateUser = (request, response) => {
    const {id} = request.params;
    const { name, email, password } = request.body;
    _updateUser(id, name, email, password)
    .then(data => {
        response.json(data);
    })
    .catch(err => {
        response.status(404).json({msg: 'Cannot update user'});
    })
}

const deleteUser = (request, response) => {
    const {id} = request.params;
    _deleteUser(id)
    .then(data => {
        response.json(data);
    })
    .catch(err => {
        response.status(404).json({msg: 'Cannot delete user'});
    })
}

module.exports = { getAllUsers, getUser, searchUserName, addUser, updateUser, deleteUser };