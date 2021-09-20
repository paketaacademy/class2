import register from './routes/register.js'
import login from './routes/login.js'
import importData from './routes/importData.js'

import { createRequire } from "module"
import swaggerUi from 'swagger-ui-express'
const require = createRequire(import.meta.url)
const swaggerDocument = require('./routes/configs/swagger-output.json')

import express from 'express'
import cors from 'cors'

const app = express()

const { SERVER } = process.env

const corsOptions = {
  exposedHeaders: 'auth-token'
}

app.use(cors(corsOptions))
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use(register)
app.use(login)
app.use(importData)

app.listen(SERVER)