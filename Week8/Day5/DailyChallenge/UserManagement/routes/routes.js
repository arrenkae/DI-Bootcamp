import express from 'express';
import { register, login, getUsers, getUserById, updateUser } from '../controllers/controller.js';

export const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);