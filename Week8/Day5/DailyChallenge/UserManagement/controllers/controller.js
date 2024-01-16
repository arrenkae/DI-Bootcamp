import fs from 'fs';

export const getAllTasks = (req, res) => {
    fs.readFile('./config/tasks.json', (error, data) => {
        if (error) {
            console.log(error);
            return;
        }
        res.status(200).send(data);
    });
};

export const getTaskById = (req, res) => {
    const {id} = req.params;
    const task = tasks.find(item => item.id == id);
    if (!task) return res.status(404).json({msg: 'Task not found'});
    res.status(200).json(task);
};

export const newTask = (req, res) => {
    const newTask = {...req.body, id: tasks.length + 1};
    tasks.push(newTask);
    res.status(201).json(newTask);
};

export const updateTask = (req, res) => {
    const {id} = req.params;
    const { name, done } = req.body;
    const index = tasks.findIndex(item => item.id == id);
    if (index === -1) return res.status(404).json({msg: 'Task not found'});
    tasks[index] = {...tasks[index], task: task, done: done};
    res.status(200).send('Task updated successfully');
};

export const deleteTask =  (req, res) => {
    const {id} = req.params;
    const index = tasks.findIndex(item => item.id == id);
    if (index === -1) return res.status(404).json({msg: 'Task not found'});
    tasks.splice(index, 1);
    res.status(200).send('Task deleted successfully');
};