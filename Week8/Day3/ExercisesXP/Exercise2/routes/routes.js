import express from 'express';
import { todos } from './todos.js';

export const router = express.Router();

router.get('/', (req, res) => {
    res.json(todos);
});

router.post('/', (req, res) => {
    const newTodo = {...req.body, id: todos.length + 1};
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const { todo, done } = req.body;
    const index = todos.findIndex(item => item.id == id);
    if (index === -1) return res.status(404).json({msg: 'Todo not found'});
    todos[index] = {...todos[index], todo: todo, done: done};
    res.status(200).send('Todo updated successfully');
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    const index = todos.findIndex(item => item.id == id);
    if (index === -1) return res.status(404).json({msg: 'Todo not found'});
    todos.splice(index, 1);
    res.status(200).send('Todo deleted successfully');
});