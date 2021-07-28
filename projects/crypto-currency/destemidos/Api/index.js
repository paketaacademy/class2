import feeds from './routes/feeds.js'
import market from './routes/market.js'
import influencers from './routes/influencer.js'
import singin from './routes/singin.js'
import register from './routes/register.js'

import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors())
app.use(express.json())

app.use(feeds)
app.use(market)
app.use(influencers)
app.use(singin)
app.use(register)



app.listen(3000)