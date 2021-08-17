import home from './routes/home.js'
import express from 'express'
const app = express()

const { LISTEN_DOOR } = process.env

app.use(express.json())
app.use(home)

app.listen(LISTEN_DOOR)