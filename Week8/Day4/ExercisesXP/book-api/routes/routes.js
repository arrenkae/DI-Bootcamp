import express from 'express';
import { readAll, readBook, addBook } from '../controllers/controller.js';

export const router = express.Router();

router.get('/api/books', readAll);
router.get('/api/books/:bookId', readBook);
router.post('/api/books/', addBook);