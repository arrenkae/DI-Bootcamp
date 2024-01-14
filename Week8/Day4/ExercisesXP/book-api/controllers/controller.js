import { _readAll, _readBook, _addBook } from '../models/models.js';

export const readAll = (req, res) => {
    _readAll()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(404).json({ msg: "Not found" })
    })
}

export const readBook = (req, res) => {
    const {bookId} = req.params;
    _readBook(bookId)
    .then(data => {
        if(data.length === 0) return res.status(404).json({msg: 'Book not found'});
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(404).json({msg: 'Book not found'});
    })
};

export const addBook = (req, res) => {
    const { title, author, publishedyear } = req.body;
    _addBook(title, author, publishedyear )
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(404).json({msg: 'Cannot add book'});
    })
}