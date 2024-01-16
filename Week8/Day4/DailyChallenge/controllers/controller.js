import bcrypt from 'bcrypt';
import { _register, _login, _getUsers, _getUserById, _updateUser } from '../models/models.js';

export const register = (req, res) => {
    const { username, password, email, first_name, last_name } = req.body;
    _register( username, password, email, first_name, last_name )
    .then(() => {
        res.status(201).send('Registered successfully!');
    })
    .catch(err => {
        res.status(404).send(err.message)
    })
}

export const login = (req, res) => {
    const { username, password } = req.body;
    _login(username)
    .then(data => {
        if(data.length > 0){
            if(bcrypt.compareSync(password, data[0].password)){
                res.status(200).send({message:`Welcome, ${data[0].username}!`})
            }
            else{
                res.status(404).send('Invalid password');
            }
          }
          else {
            res.status(404).send('User not found');;
          }
    })
    .catch(err => {
        res.status(404).send(err.message)
    })
}

export const getUsers = (req, res) => {
    _getUsers()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(404).send('No users found');
    })
}

export const getUserById = (req, res) => {
    const {id} = req.params;
    _getUserById(id)
    .then(data => {
        if (data.length > 0) {
            res.status(200).json(data);
        } else {
            res.status(404).send('User not found');
        }
    })
    .catch(err => {
        res.status(404).send(err.message);
    })
};

export const updateUser = (req, res) => {
    const {id} = req.params;
    const { username, email, first_name, last_name } = req.body;
    _updateUser(id, username, email, first_name, last_name)
    .then(() => {
        res.status(201).send('Updated successfully!');
    })
    .catch(err => {
        res.status(404).send(err.message)
    })
}