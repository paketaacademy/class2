import express from 'express';
import cors from 'cors';
import market from './modules/market.js';
import coinOfTheDay from './modules/coinOfTheDay.js';
import feed from './modules/feeds.js';

const app = express()

app.use(cors())
app.use(express.json())

app.use(market)
app.use(coinOfTheDay)
app.use(feed)

export default app