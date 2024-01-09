const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.use('/', express.static(__dirname + '/public'));

const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🌚', name: 'Moon' },
    { emoji: '🧛', name: 'Vampire' },
    { emoji: '🦄', name: 'Unicorn' },
    { emoji: '✡️', name: 'Star of David' },
    { emoji: '🗿', name: 'Moai' },
    { emoji: '💩', name: 'Poop' }
];

app.get('/api/emojis', (request, response) => {
    response.json(emojis);
});