import home from './routes/home.js'

import express from 'express'
import cors from 'cors'

const app = express()

const { SERVER } = process.env

app.use(cors())
app.use(express.json())

app.use(home)

app.listen(SERVER)