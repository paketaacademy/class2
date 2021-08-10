import express from 'express'
import { walletValidation } from './validation.js'
import { Mongoose, walletSchema, bankSchema } from './configs/data-base.js'
import verifyToken from "./configs/verify-token.js"

const app = express()
app.use(express.json())

app.post('/wallet', verifyToken, async (req, res) =>{
  const { error } = walletValidation(req.body)
  if (error) {
    return res
      .status(400)
      .send(error.details[0].message)
  }
  
  try{
    const { coinName, coinPrice, coinQuantity } = req.body
    const walletModel = Mongoose.model('wallet', walletSchema, 'wallet')
    const { balance } = req.body
    const bankModel = Mongoose.model("bank", bankSchema, "bank")
    const currentBank = await bankModel.findOne({ user: userId });

    await walletModel.create ({
      coinName,
      coinPrice,
      coinQuantity,
    })

  } catch (error) {
    return res.status(400).send({
      error: `Ocorreu um erro - ${error}`,
    })
  }
})

export default app


