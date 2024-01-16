import fs from 'fs';
import bcrypt from 'bcrypt';

export const register = (req, res) => {
    const { ...userdata } = req.body;
    if (!userdata.username || !userdata.password || !userdata.email || !userdata.fname || !userdata.lname ) {
        return res.status(404).json({msg: 'All fields need to be filled'});
    }
    fs.readFile('./config/users.json', (err, data) => {
        if(err) return res.status(404).send({msg: 'Unable to read file'});
        if (JSON.parse(data).find(user => user.username == userdata.username)) {
            return res.status(404).send({msg: 'User already exists'});
        }
        if (JSON.parse(data).find(user => user.email == userdata.email)) {
            return res.status(404).send({msg: 'Email already exists'});
        }
        const parsedData = JSON.parse(data);
        const id = parsedData.length + 1;
        const salt = bcrypt.genSaltSync(10);
        const newUser = JSON.stringify({ id, username: userdata.username, password: bcrypt.hashSync(userdata.password, salt), email: userdata.email, fname: userdata.fname, lname: userdata.lname });
        parsedData.push(JSON.parse(newUser));
        fs.writeFile('./config/users.json', JSON.stringify(parsedData), err => {
            if(err) return res.status(404).send({msg: 'Unable to write to file'});
            res.status(201).json(parsedData);
        });
    });
}

export const login = (req, res) => {
    const { username, password } = req.body;
    if ( !username || !password ) return res.status(404).json({msg: 'Provide username and password'});
    fs.readFile('./config/users.json', (err, data) => {
        if(err) return res.status(404).send({msg: 'Unable to read file'});
        const user = JSON.parse(data).find(user => user.username == username);
        if (!user) return res.status(404).json({msg: 'User not found'});
        if (bcrypt.compareSync(password, user.password)){
            res.status(200).send({msg:`Hi ${user.fname}, welcome back again!`})
        }
        else{
            res.status(404).send({msg: 'Invalid password'});
        }
    });
};

export const getUsers = (req, res) => {
    fs.readFile('./config/users.json', (err, data) => {
        if(err) return res.status(404).json({msg: 'Unable to read file'});
        res.status(200).json(JSON.parse(data));
    });
};

export const getUserById = (req, res) => {
    const {id} = req.params;
    fs.readFile('./config/users.json', (err, data) => {
        if(err) return res.status(404).send({msg: 'Unable to read file'});
        const user = JSON.parse(data).find(user => user.id == id);
        if (!user) return res.status(404).json({msg: 'User not found'});
        res.status(200).json(user);
    });
};

export const updateUser = (req, res) => {
    const {id} = req.params;
    let userdata = { id };
    let { ...body } = req.body;
    if (body.password) {
        const salt = bcrypt.genSaltSync(10);
        body.password = bcrypt.hashSync(body.password, salt);
    }
    fs.readFile('./config/users.json', (err, data) => {
        if(err) return res.status(404).send(err.message);
        const parsedData = JSON.parse(data);
        const index = parsedData.findIndex(user => user.id == id);
        if (index === -1) return res.status(404).json({msg: 'User not found'});
        for (let key in parsedData[index]) {
            if (body[key]) {
                userdata[key] = body[key];
            } else {
                userdata[key] = parsedData[index][key];
            }
        }
        parsedData[index] = userdata;
        fs.writeFile('./config/users.json', JSON.stringify(parsedData), err => {
            if(err) return res.status(404).send(err.message);
            res.status(201).json(parsedData);
        });
    });
}

export const deleteUser =  (req, res) => {
    const {id} = req.params;
    fs.readFile('./config/users.json', (err, data) => {
        if(err) return res.status(404).send({msg: 'Unable to read file'});
        const parsedData = JSON.parse(data);
        const index = parsedData.findIndex(user => user.id == id);
        if (index === -1) return res.status(404).json({msg: 'User not found'});
        parsedData.splice(index, 1);
        fs.writeFile('./config/users.json', JSON.stringify(parsedData), err => {
            if(err) return res.status(404).send({msg: 'Unable to write to file'});
            res.status(200).json(parsedData);
        });
    });
};