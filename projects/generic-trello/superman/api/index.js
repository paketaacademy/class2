import express from 'express'
const app = express()

const { LISTEN_DOOR } = process.env

app.use(express.json())

app.listen(LISTEN_DOOR)