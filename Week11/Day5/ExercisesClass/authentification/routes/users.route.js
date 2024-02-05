import express from 'express';
import { _all, _register, _login } from '../controllers/users.controllers.js';
import { verifytoken } from '../middlewares/verifytoken.js';

const usersrouter = express.Router();

usersrouter.post('/register', _register);
usersrouter.post('/login', _login);
usersrouter.get('/', verifytoken, _all);

usersrouter.get('/verify', verifytoken, (req, res) => {
    res.sendStatus(200);
});

export default usersrouter;