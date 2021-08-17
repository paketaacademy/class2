import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
const routes = express()
const corsOpition = {
  exposedHeaders: 'auth-token'
}

dotenv.config()
routes.use(express.json())
routes.use(cors(corsOpition))

export default routes