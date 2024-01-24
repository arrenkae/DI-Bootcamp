const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.listen(process.env.PORT || 3001, () => {
    console.log('Server is running on port 3001');
});

app.get('/hello', (req, res) => {
    res.json({msg: 'Hello'});
});

app.get('/hello/:name', (req, res) => {
    const { name } = req.params;
    res.send({msg: `Hello ${name}`});
});