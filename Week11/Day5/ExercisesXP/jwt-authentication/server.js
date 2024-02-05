import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import usersrouter from "./routes/users.route.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

app.use('/users', usersrouter);