import bcrypt from 'bcrypt';
import { db } from '../config/db.js';

export const _register = (username, password, email, first_name, last_name) => {
    const salt = bcrypt.genSaltSync(10);
    return db('users')
    .insert({
        username,
        email,
        first_name,
        last_name
    })
    .then(() => {
        return db('hashpwd')
        .insert({
            username,
            password:bcrypt.hashSync(password, salt),
        })
    })
}

export const _login = (username) => {
    return db('hashpwd').select('*').where({ username: username });
}

export const _getUsers = () => {
    return db('users').select('*').orderBy('id');
}

export const _getUserById = (userId) => {
    return db('users').select('*').where({ id: userId });
};

export const _updateUser = (userId, username, email, first_name, last_name) => {
    return db('users')
    .update({username, email, first_name, last_name})
    .where({ id: userId })
    .returning('*');
}