import express from 'express';


const app = express();


const PORT = 8000

app.listen(PORT, () => console.log (`Server Is running successfully on PORT ${PORT} Hello`));
