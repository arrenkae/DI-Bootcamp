import fs from 'fs';

export const getAllTasks = (req, res) => {
    fs.readFile('./config/tasks.json', (err, data) => {
        if(err) return res.status(404).json({msg: 'Unable to read file'});
        res.status(200).json(JSON.parse(data));
    });
};

export const getTaskById = (req, res) => {
    const {id} = req.params;
    fs.readFile('./config/tasks.json', (err, data) => {
        if(err) return res.status(404).send({msg: 'Unable to read file'});
        const task = JSON.parse(data).find(item => item.id == id);
        if (!task) return res.status(404).json({msg: 'Task not found'});
        res.status(200).json(task);
    });
};

export const newTask = (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(404).json({msg: 'Task name required'});
    fs.readFile('./config/tasks.json', (err, data) => {
        if(err) return res.status(404).send({msg: 'Unable to read file'});
        const parsedData = JSON.parse(data);
        const id = JSON.parse(data).length + 1;
        const newTask = JSON.stringify({ id, name, done: false });
        parsedData.push(JSON.parse(newTask));
        fs.writeFile('./config/tasks.json', JSON.stringify(parsedData), err => {
            if(err) return res.status(404).send({msg: 'Unable to write to file'});
            res.status(201).json(parsedData);
        });
    });
}

export const updateTask = (req, res) => {
    const {id} = req.params;
    let name;
    let done;
    let body = req.body;
    fs.readFile('./config/tasks.json', (err, data) => {
        if(err) return res.status(404).send(err.message);
        const parsedData = JSON.parse(data);
        const index = parsedData.findIndex(item => item.id == id);
        if (index === -1) return res.status(404).json({msg: 'Task not found'});
        if (!body.name) {
            name = parsedData[index].name;
        } else {
            name = body.name;
        }
        if (typeof body.done != 'boolean') {
            done = parsedData[index].done;
        } else {
            done = body.done;
        }
        parsedData[index] = { id, name, done };
        fs.writeFile('./config/tasks.json', JSON.stringify(parsedData), err => {
            if(err) return res.status(404).send(err.message);
            res.status(201).json(parsedData);
        });
    });
}

export const deleteTask =  (req, res) => {
    const {id} = req.params;
    fs.readFile('./config/tasks.json', (err, data) => {
        if(err) return res.status(404).send({msg: 'Unable to read file'});
        const parsedData = JSON.parse(data);
        const index = parsedData.findIndex(item => item.id == id);
        if (index === -1) return res.status(404).json({msg: 'Task not found'});
        parsedData.splice(index, 1);
        fs.writeFile('./config/tasks.json', JSON.stringify(parsedData), err => {
            if(err) return res.status(404).send({msg: 'Unable to write to file'});
            res.status(200).json(parsedData);
        });
    });
};