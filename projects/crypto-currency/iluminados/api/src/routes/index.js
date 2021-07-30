import express from 'express'
import cors from 'cors'
import market from './modules/market.js'
import coinOfTheDay from './modules/coinOfTheDay.js'
import feeds from './modules/feeds.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use(market)
app.use(coinOfTheDay)
app.use(feeds)


export default app