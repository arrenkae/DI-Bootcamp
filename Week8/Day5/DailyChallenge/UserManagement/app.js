import express from 'express';
import path from 'path';
import { router } from './routes/routes.js';

const app = express();
const __dirname = path.resolve();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(3000, () => {
    console.log('Server runs on port 3000');
});

app.use('/', express.static(__dirname + '/public'));
app.use('/', router);