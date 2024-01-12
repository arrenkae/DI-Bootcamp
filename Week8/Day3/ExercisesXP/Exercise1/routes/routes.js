import express from 'express';

export const router = express.Router();

router.get('/', (request, response) => {
    response.send('Homepage');
});

router.get('/about', (request, response) => {
    response.send('About Us');
});

