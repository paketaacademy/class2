import express from 'express'
import upload from 'express-fileupload'
import cors from 'cors'
import dotenv from 'dotenv'

const app = express()

app.use(upload())
app.use(cors())
app.use(express.json())

dotenv.config()

export default app