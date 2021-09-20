import express from "express"
import dotenv from "dotenv"
import { router } from "../routes"
import mongoose from "mongoose"

const app = express()
dotenv.config()

app.use(express.json())
app.use(router)

const { MONGO } = process.env

mongoose.connect(MONGO, () => {
  "Connected to DB."
})

export { mongoose as Mongoose }
export { app }