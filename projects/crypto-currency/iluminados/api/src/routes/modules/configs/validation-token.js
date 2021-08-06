import express from 'express'
import verify from './verify-token.js'

const app = express()
app.use(express.json())

app.get('/teste', verify, (req, res) => {
    res.send(req.user)
})

export default app