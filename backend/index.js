import express from 'express';
import dotenv from 'ditenv';

import Connection from './database/db.js';


const app = express();

dotenv.config();


const PORT = 8000

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;



app.listen(PORT, () => console.log (`Server Is running successfully on PORT ${PORT} Hello`));
Connection( USERNAME,PASSWORD);