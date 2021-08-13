import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import market from './modules/market.js'
import feeds from './modules/feeds.js'
import CoinOfTheDay from './modules/CoinOfTheDay.js'
import register from './modules/register.js'
import Influencer from './modules/Influencer.js'
import login from './modules/login.js'
import logout from './modules/logout.js'
import bank from './modules/bank.js'
import bankUpdate from './modules/bank-update.js'
import walletsBuy from './modules/wallets-buy.js'
import walletsSell  from './modules/wallets-sell.js'
import walletResp from './modules/wallet-resp.js'

const corsOption = {
  exposedHeaders: 'auth-token'
}

const app = express()
dotenv.config()
app.use(cors(corsOption))
app.use(express.json())

app.use(register)
app.use(login)
app.use(logout)
app.use(bank)
app.use(bankUpdate)
app.use(walletsBuy)
app.use(walletsSell)

app.use(market)
app.use(CoinOfTheDay)
app.use(Influencer)
app.use(feeds)
app.use(walletResp)

export default app