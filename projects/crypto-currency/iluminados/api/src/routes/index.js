import express from 'express';
import cors from 'cors';
import allMarket from './modules/allMarket.js';
import coinOfTheDay from './modules/coinOfTheDay.js';

const app = express()

app.use(cors())
app.use(express.json())

app.use(allMarket)
app.use(coinOfTheDay)


export default app