import register from './routes/register.js'
import login from './routes/login.js'
import profile from './routes/profile.js'
import home from './routes/home.js'
import list from './routes/list.js'

import express from 'express'
import cors from 'cors'

const app = express()

const { LISTEN_DOOR } = process.env

const corsOptions = {
  exposedHeaders: 'auth-superman'
}

app.use(cors(corsOptions))
app.use(express.json())

app.use(register)
app.use(login)
app.use(profile)
app.use(home)
app.use(list)

app.listen(LISTEN_DOOR)