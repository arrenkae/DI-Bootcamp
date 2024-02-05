import { register, login, all } from "../models/users.models.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

export const _login = async(req, res) => {
    try {
        const {email, password} = req.body;
        const row = await login(email.toLowerCase());
        if (row.length === 0) {
            return res.status(404).json({msg: 'email not found'});
        }
        const match = bcrypt.compareSync(password+"", row[0].password);
        if (!match) return res.status(404).json({msg: 'invalid password'});

        const userid = row[0].id;
        const useremail = row[0].email;

        const secret = process.env.ACCESS_TOKEN_SECRET;

        const accesstoken = jwt.sign({userid, useremail}, secret, {
            expiresIn: '60s',
        });

        res.cookie('token', accesstoken, {
            maxAge: 60 * 1000,
            httpOnly: true,
        });

        res.json({token: accesstoken});

    } catch (error) {
        console.log('_login=>', error);
        res.status(404).json({msg: 'unable to login'});
    }
}

export const _register = async(req, res) => {
    const {email, password} = req.body;
    const loweremail = email.toLowerCase();

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password + "", salt);

    try {
        const row = await register(loweremail, hash);
        res.json(row);
    } catch (error) {
        console.log('_register=>', error);
        res.status(404).json({msg: 'email exists'});
    }

}

export const _all = async(req, res) => {
    try {
        const rows = await all();
        res.json(rows);
    } catch (error) {
        console.log('_all=>', error);
        res.status(404).json({msg: 'not found'});
    }

}