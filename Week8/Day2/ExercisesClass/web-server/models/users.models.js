const { db } = require('../config/db.js');

const _getAllUsers = () => {
    return db('users').select('*').orderBy('name');
}

const _getUser = (userId) => {
    return db('users').select('*').where({ id: userId });
}

const _addUser = (name, email, password) => {
    return db('users')
    .insert({name, email, password})
    .returning('*');
}

const _updateUser = (userId, name, email, password) => {
    return db('users')
    .update({name, email, password})
    .where({ id: userId })
    .returning('*');
}

const _deleteUser = (userId) => {
    return db('users').del().where({ id: userId }).returning('*');
}

module.exports = { _getAllUsers, _getUser, _addUser, _updateUser, _deleteUser };