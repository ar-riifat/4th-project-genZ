import express from 'express';

import Connection from './database/db.js';


const app = express();


const PORT = 8000



app.listen(PORT, () => console.log (`Server Is running successfully on PORT ${PORT} Hello`));
Connection();