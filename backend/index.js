import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import Connection from './database/db.js';
import DefaultData from './default.js';
import Router from './routes/route.js';

const app = express();

dotenv.config();

app.use('/', Router);

const PORT = 8000

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection( USERNAME,PASSWORD);

app.get("/", (req,res) => {
    res.send("welcome to home page ");
  });

app.listen(PORT, () => console.log (`Server Is running successfully on PORT ${PORT} Hello`));

DefaultData();