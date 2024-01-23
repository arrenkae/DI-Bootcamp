import express from 'express';

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

app.get('/api/hello', (req, res) => {
    res.send('Hello From Express');
});

app.post('/api/world', (req, res) => {
    const { message } = req.body;
    res.send(`I received your POST request. This is what you sent me: ${message}`);
});