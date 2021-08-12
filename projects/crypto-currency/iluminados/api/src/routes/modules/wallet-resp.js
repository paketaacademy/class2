import express from 'express'
import { Mongoose, walletSchema } from './configs/data-base.js'
import verifyToken from './configs/verify-token.js'

const app = express()
app.use(express.json())

app.get('/wallet', verifyToken, async function (req, res) {
    
  try {

    const walletModel = await Mongoose.model('wallet', walletSchema, 'wallet')
    const { userId } = req.user._id

    const response = await walletModel.find({ userId })
    return res.send(response).status(200)

  } catch (error) {
    return res.status(400).send({
      error: `Ocorreu um erro - ${error}`,
    })
  }
})

export default app


