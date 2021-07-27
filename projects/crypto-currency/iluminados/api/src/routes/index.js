import express from 'express';
import cors from 'cors';
import allDatas from './modules/get.js';

const app = express();

app.use(cors())
app.use(allDatas)

export default app