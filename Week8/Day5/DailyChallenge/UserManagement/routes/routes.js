import express from 'express';
import { getAllTasks, getTaskById, newTask, updateTask, deleteTask } from '../controllers/controller.js';

export const router = express.Router();

router.get('/', getAllTasks);
router.get('/tasks/:id', getTaskById);
router.post('/tasks', newTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);