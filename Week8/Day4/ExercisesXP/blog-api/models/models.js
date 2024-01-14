import { db } from '../config/db.js';

export const _getPosts = () => {
    return db('blogposts').select('*').orderBy('id');
}

export const _getPostById = (postId) => {
    return db('blogposts').select('*').where({ id: postId });
}

export const _newPost = (title, content) => {
    return db('blogposts')
    .insert({title, content})
    .returning('*');
}

export const _updatePost = (postId, title, content) => {
    return db('blogposts')
    .update({title, content})
    .where({ id: postId })
    .returning('*');
}

export const _deletePost = (postId) => {
    return db('blogposts').del().where({ id: postId });
}