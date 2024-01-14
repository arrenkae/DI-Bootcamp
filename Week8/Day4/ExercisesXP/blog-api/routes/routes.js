import express from 'express';
import { getPosts, getPostById, newPost, updatePost, deletePost } from '../controllers/controller.js';

export const router = express.Router();

router.get('/posts', getPosts);
router.get('/posts/:id', getPostById);
router.post('/posts', newPost);
router.put('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);