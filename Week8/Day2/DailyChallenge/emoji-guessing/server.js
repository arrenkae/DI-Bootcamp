import express from 'express';
import path from 'path';
import { emojis } from './data/emojis.js';
import { scores } from './data/scores.js';

const app = express();
const __dirname = path.resolve();

app.use('/', express.static(__dirname + '/public'));
app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/emojis', (request, response) => {
    shuffle(emojis);
    response.json(emojis);
});

app.get('/scores', (request, response) => {
    response.json(scores);
});

app.post('/emojis', (request, response) => {
    const { name, guess } = request.body;
    if ( name === guess ) {
        scores.score++;
        return response.json({message: 'Correct!', color: '#7FFFD4'})
    }
    else { return response.json({message: 'Wrong!', color: '#8B0000'})}
});


const shuffle = (arr) => {
    arr.sort(() => Math.random() - 0.5);
}