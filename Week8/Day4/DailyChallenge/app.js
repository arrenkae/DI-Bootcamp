import express from 'express';
import { router } from './routes/routes.js';

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(3000, () => {
    console.log('Server runs on port 3000');
});

app.use('/', router);