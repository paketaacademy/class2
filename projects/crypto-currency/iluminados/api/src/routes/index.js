import express from 'express';
import cors from 'cors';
import allMarket from './modules/allMarket.js';

const app = express()

app.use(cors())
app.use(express.json())

app.use(allMarket)


export default app