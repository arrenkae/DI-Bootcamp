import { _register, _login, _all } from "../models/users.models.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

export const register = async(req, res) => {
    const { username, password } = req.body;

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password + "", salt);

    try {
        const row = await _register(username, hashedPassword);
        res.json(row);
    } catch (error) {
        console.log('register=>', error);
        res.status(404).json({msg: 'User already exists'});
    }

}

export const login = async(req, res) => {
    try {
        const {username, password} = req.body;
        const row = await _login(username);
        if (row.length === 0) {
            return res.status(404).json({msg: 'Username not found'});
        }
        const match = bcrypt.compareSync(password + "", row[0].password);
        if (!match) return res.status(401).json({msg: 'Invalid password'});

        const secret = process.env.ACCESS_TOKEN_SECRET;
        const user = {
            id: row[0].id,
            username: row[0].username
        }

        const accesstoken = jwt.sign({ user }, secret, {
            expiresIn: '1h',
        });
        console.log(accesstoken);
        const refreshtoken = jwt.sign({ user }, secret, {
            expiresIn: '7d',
        });

        res.cookie('token', accesstoken, { httpOnly: true })
        res.cookie('refreshtoken', refreshtoken, { httpOnly: true })

        res.status(200).json({ msg: 'Login successful' });

    } catch (error) {
        console.log('login=>', error);
        res.status(404).json({msg: 'Unable to login'});
    }
}

export const refresh = async(req, res) => {
    const refreshtoken = req.cookies.refreshtoken;
    if (!refreshtoken) {
        res.status(401).json({msg: 'Refresh token not found'});
    }

    const secret = process.env.ACCESS_TOKEN_SECRET;

    jwt.verify(refreshtoken, secret, (err, user) => {
        if (err) {
          return res.status(403).json({ message: 'Refresh token verification failed' });
        }
    
        const accesstoken = jwt.sign({ id: user.id, username: user.username }, secret, {
          expiresIn: '1h'
        });
 
        res.cookie('token', accesstoken, { httpOnly: true });
    
        res.status(200).json({ message: 'Token refreshed successfully' });
    });
}

export const all = async(req, res) => {
    try {
        const rows = await _all();
        res.json(rows);
    } catch (error) {
        console.log('all=>', error);
        res.status(404).json({msg: 'Not found'});
    }

}