import { _getPosts, _getPostById, _newPost, _updatePost, _deletePost } from '../models/models.js';

export const getPosts = (req, res) => {
    _getPosts()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(404).json({ msg: "Not found" })
    })
}

export const getPostById = (req, res) => {
    const {id} = req.params;
    _getPostById(id)
    .then(data => {
        if(data.length === 0) return res.status(404).json({msg: 'Post not found'});
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(404).json({msg: 'Post not found'});
    })
};

export const newPost = (req, res) => {
    const { title, content } = req.body;
    _newPost(title, content)
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(404).json({msg: 'Cannot add post'});
    })
}

export const updatePost = (req, res) => {
    const {id} = req.params;
    const { title, content } = req.body;
    _updatePost(id, title, content)
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(404).json({msg: 'Cannot update post'});
    })
}

export const deletePost = (req, res) => {
    const {id} = req.params;
    _deletePost(id)
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(404).json({msg: 'Cannot delete post'});
    })
}