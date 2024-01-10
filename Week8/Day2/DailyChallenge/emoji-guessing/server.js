import express from 'express';
import path from 'path';
import { emojis } from './emojis/emojis.js';
const app = express();
const __dirname = path.resolve();

app.use('/', express.static(__dirname + '/public'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/emojis', (request, response) => {
    shuffle(emojis);
    response.json(emojis);
});

const shuffle = (arr) => {
    arr.sort(() => Math.random() - 0.5);
}