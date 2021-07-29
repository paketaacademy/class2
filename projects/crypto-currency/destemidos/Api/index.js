import feeds from './routes/feeds.js'
import market from './routes/market.js'
import influencers from './routes/influencer.js'
import teste from './routes/teste.js'

import express from 'express'
import cors from 'cors'
const app = express()

app.use(cors())
app.use(express.json())

app.use(feeds)
app.use(market)
app.use(influencers)
app.use(teste)



app.listen(3000)