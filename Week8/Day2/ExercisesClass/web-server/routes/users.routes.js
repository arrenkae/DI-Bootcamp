const express = require('express');
const { auth, logger} = require('../middlewares/utils.js');
const { getAllUsers, getUser, searchUserName, addUser, updateUser, deleteUser } = require("../controllers/users.controller.js");

const users_router = express.Router();

users_router.get('/', [auth, logger], getAllUsers);
users_router.get('/search', searchUserName);
users_router.get('/:id', getUser);
users_router.post('/', addUser);
users_router.put('/:id', updateUser);
users_router.delete('/:id', deleteUser);

module.exports = { users_router };