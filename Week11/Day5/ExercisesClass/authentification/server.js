import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import usersrouter from "./routes/users.route.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

app.listen(process.env.PORT || 3001, () => {
    console.log(`Server runs on port ${process.env.PORT || 3001}`);
});

app.use('/users', usersrouter);