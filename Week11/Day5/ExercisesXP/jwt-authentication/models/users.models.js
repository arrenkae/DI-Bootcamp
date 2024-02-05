import { db } from '../config/db.js';

export const _register = (username, password) => {
    return db('users').insert({username, password}, ['id', 'username']);
};

export const _login = (username) => {
    return db('users').select('id', 'username', 'password').where({ username });
};

export const _all = () => {
    return db('users').select('id', 'username', 'password').orderBy('id');
}