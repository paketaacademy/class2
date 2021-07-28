import express from 'express';
import cors from 'cors';
import market from './modules/market.js';
import coinOfTheDay from './modules/coinOfTheDay.js';

const app = express()

app.use(cors())
app.use(express.json())

app.use(market)
app.use(coinOfTheDay)


export default app