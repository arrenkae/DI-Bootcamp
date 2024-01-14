import { db } from '../config/db.js';

export const _readAll = () => {
    return db('books').select('*').orderBy('id');
}

export const _readBook = (bookId) => {
    return db('books').select('*').where({ id: bookId });
}

export const _addBook = (title, author, publishedyear) => {
    return db('books')
    .insert({title, author, publishedyear})
    .returning('*');
}