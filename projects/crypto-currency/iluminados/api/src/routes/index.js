import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import market from './modules/market.js'
import coinOfTheDay from './modules/coin-of-the-day.js'
import register from './modules/register.js'
import influencers from './modules/influencers.js'
import login from './modules/login.js'
import logout from './modules/logout.js'
import bank from './modules/bank.js'
import updateBank from './modules/update-bank.js'
import wallet from './modules/wallets-buy.js'

const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())

app.use(register)
app.use(login)
app.use(logout)
app.use(bank)
app.use(updateBank)
app.use(wallet)

app.use(market)
app.use(coinOfTheDay)
app.use(influencers)

export default app