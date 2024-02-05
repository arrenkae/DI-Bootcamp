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
        if (!match) return res.status(404).json({msg: 'Invalid password'});

        const secret = process.env.ACCESS_TOKEN_SECRET;
        const user = {
            id: row[0].id,
            username: row[0].username
        }

        const accesstoken = jwt.sign({ user }, secret, {
            expiresIn: '1h',
        });
        console.log(accesstoken);
        const refreshtoken = jwt.sign({user }, secret, {
            expiresIn: '1d',
        });

        res
        .cookie('refreshtoken', refreshtoken, {
            httpOnly: true,
            sameSite: 'strict'
        })
        .header('Authorization', accesstoken)
        .status(200).json({ user, msg: 'Login successful' });

    } catch (error) {
        console.log('login=>', error);
        res.status(404).json({msg: 'Unable to login'});
    }
}

export const refresh = async(req, res) => {
    const refreshtoken = req.cookies['refreshtoken'];
    if (!refreshtoken) {
        res.status(401).json({msg: 'No refresh token provided'});
    }

    const secret = process.env.ACCESS_TOKEN_SECRET;

    try {
        const decoded = jwt.verify(refreshtoken, secret);
        const accesstoken = jwt.sign({ user: decoded.user }, secret, {
            expiresIn: '1h',
        });
        res
        .header('Authorization', accesstoken)
        .status(200).json({ user: decoded.user, msg: 'Token refreshed' });

    } catch (error) {
        res.status(400).json({msg: 'Ivalid refresh token'});
    }
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