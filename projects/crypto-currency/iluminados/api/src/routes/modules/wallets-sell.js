import express from 'express'
import { walletValidation } from './validation.js'
import { Mongoose, walletSchema, bankSchema } from './configs/data-base.js'
import verifyToken from './configs/verify-token.js'

const app = express()
app.use(express.json())

app.patch('/wallet/sell', verifyToken, async (req, res) => {
  const { error } = walletValidation(req.body)
  if (error) {
    return res
      .status(400)
      .send(error.details[0].message)
  }

  try{
    const bankModel = Mongoose.model("bank", bankSchema, "bank")
    const walletModel = Mongoose.model('wallet', walletSchema, 'wallet')
    const { coinName, coinPrice, coinQuantity, balance } = req.body
    const userId = req.user._id
    const currentUser = await bankModel.findOne({ user: userId })

    if(){

    }

  } catch (error) {
    return res.status(400).send({
      error: `Ocorreu um erro - ${error}`,
    })
  }
})

export default app