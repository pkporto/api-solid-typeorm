import express from 'express';
import router from './routes';
import 'reflect-metadata';

import './database/connect';
const app = express();

app.use(express.json());
app.use(router);


app.listen(3000, ()=> console.log('Server startou em 3000.'));