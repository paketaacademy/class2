import dotenv from 'dotenv'
import feeds from './routes/feeds.js'
import market from './routes/market.js'
import influencers from './routes/influencer.js'
import singin from './routes/singin.js'
import singup from './routes/singup.js'
import balance from './routes/balance.js'
import buyCoin from './routes/buy-coin.js'
import saleCoin from './routes/sale-coin.js'
import profile from './routes/profile.js'

import express from 'express'
import cors from 'cors'
const app = express()
const corsOptions = {
  exposedHeaders: 'auth-token'
}
app.use(cors(corsOptions))
app.use(cors())
app.use(express.json())

const { LISTEN_DOOR } = process.env

app.use(feeds)
app.use(market)
app.use(influencers)
app.use(singin)
app.use(singup)
app.use(balance)
app.use(buyCoin)
app.use(saleCoin)
app.use(profile)

app.listen(LISTEN_DOOR)