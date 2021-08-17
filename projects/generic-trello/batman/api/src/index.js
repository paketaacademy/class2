import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
const app = express()
const corsOpition = {
  exposedHeaders: 'auth-token'
}

dotenv.config()
app.use(express.json())
app.use(cors(corsOpition))

export default app