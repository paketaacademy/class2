import express from 'express'
import cors from 'cors'
import market from './modules/market.js'
import coinOfTheDay from './modules/coin-of-the-day.js'
import register from './modules/register.js'
import influencers from './modules/influencers.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(register)

app.use(market)
app.use(coinOfTheDay)
app.use(influencers)

export default app