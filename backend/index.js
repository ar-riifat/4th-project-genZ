import express from 'express';
import dotenv from 'dotenv';

import Connection from './database/db.js';
import DefaultData from './default.js';

const app = express();

dotenv.config();


const PORT = 8000

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection( USERNAME,PASSWORD);

app.get("/", (req,res) => {
    res.send("welcome to home page ");
  });

app.listen(PORT, () => console.log (`Server Is running successfully on PORT ${PORT} Hello`));

DefaultData();