import express from 'express';
import { books } from './books.js';

export const router = express.Router();

router.get('/', (req, res) => {
    res.json(books);
});

router.post('/', (req, res) => {
    const newBook = {...req.body, id: books.length + 1};
    books.push(newBook);
    res.status(201).json(newBook);
});

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const { title, author, publishedYear } = req.body;
    const index = books.findIndex(item => item.id == id);
    if (index === -1) return res.status(404).json({msg: 'Book not found'});
    books[index] = {...books[index], title: title, author: author, publishedYear: publishedYear};
    res.status(200).send('Book updated successfully');
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    const index = books.findIndex(item => item.id == id);
    if (index === -1) return res.status(404).json({msg: 'Book not found'});
    books.splice(index, 1);
    res.status(200).send('Book deleted successfully');
});