import mongoose from 'mongoose'
import express from 'express'
import dotenv from 'dotenv'
import routes from './routes/index.js'

const app = express()
app.use(express.json())
app.use(routes)

dotenv.config()


const DB = "mongodb+srv://dungeon:dungeon@cluster0.qzotv.mongodb.net/finalProject?retryWrites=true&w=majority"
mongoose.connect(DB, ()=> console.log('connect to database'))


export { mongoose as Mongoose }
export default app