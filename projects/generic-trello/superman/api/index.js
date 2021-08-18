import home from './routes/home.js'
import register from './routes/register.js'
import login from './routes/login.js'
import express from 'express'
import cors from 'cors'

const app = express()

const { LISTEN_DOOR } = process.env

const corsOptions = {
  exposedHeaders: 'auth-superman'
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(home)
app.use(register)
app.use(login)

app.listen(LISTEN_DOOR)