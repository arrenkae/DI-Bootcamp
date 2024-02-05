import express from 'express';
import { register, login, refresh, all } from '../controllers/users.controllers.js';
import { verifytoken } from '../middlewares/verifytoken.js';

const usersrouter = express.Router();

usersrouter.post('/register', register);
usersrouter.post('/login', login);
usersrouter.get('/refresh', refresh);
usersrouter.get('/', verifytoken, all);

usersrouter.get('/profile', verifytoken, (req, res) => {
    res.json({ msg: `Welcome, ${req.user.username}!` });
});

usersrouter.get('/verify', verifytoken, (req, res) => {
    res.sendStatus(200);
});

usersrouter.get('/logout', (req, res) => {
    res.status(200).clearCookie('accesstoken').json({ msg: 'Logged out'})
});

export default usersrouter;