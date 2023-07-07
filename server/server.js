import express from 'express';
import router from './routes/routes.js'
import DBConnection from './database/db.js';
import cors from 'cors';
import dotenv from 'dotenv';
const app = express();
dotenv.config();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);
DBConnection();

app.listen(4000, () => {
    console.log("Server is listening on Port:4000");
});