import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import routes from './routes/index.js'
const app = express()
app.use(express.json())
app.use(routes)

const corsOpition = {
  exposedHeaders: 'auth-token'
}
app.use(cors(corsOpition))

dotenv.config()

const params = {
    'useNewUrlParser': true,
    'useUnifiedTopology': true
}
const { MONGO_URI } = process.env
mongoose.connect(MONGO_URI, params, () => console.log ('Connect to dataBase'))

export { mongoose as Mongoose }

export default app

