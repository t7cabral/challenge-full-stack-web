import express from "express";
import bodyParser from "body-parser";
import path from 'path';
import cors from 'cors';

import studentRouters from './routes/student';

const app = express()

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/student', studentRouters);

// Home page
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname + '/pages/home.html'));
});

export default app;
