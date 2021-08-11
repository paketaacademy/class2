import express from 'express'
import { walletValidation } from './validation.js'
import { Mongoose, walletSchema, bankSchema } from './configs/data-base.js'
import verifyToken from "./configs/verify-token.js"

const app = express()
app.use(express.json())

app.post('/wallet/buy', verifyToken, async (req, res) =>{
  const { error } = walletValidation(req.body)
  if (error) {
    return res
      .status(400)
      .send(error.details[0].message)
  }
  
  try{
    const bankModel = Mongoose.model("bank", bankSchema, "bank")
    const { coinInitials, coinName, coinPrice, coinQuantity } = req.body
    const walletModel = Mongoose.model('wallet', walletSchema, 'wallet')

    const totalPrice = coinPrice * coinQuantity
    const userId = req.user._id
    const currentUser = await bankModel.findOne({ user: userId })

    const newBalance = currentUser.balance - totalPrice
    
    if(totalPrice > currentUser.balance){      
      return res
      .status(400)
      .send('Saldo insuficiente')
    } 

    await bankModel.updateOne({
      user: userId,
      $set: {
        balance: newBalance,
      },
    })
  
    const currentCoin = await walletModel.findOne({ coinName, user: userId })
    if(currentCoin){
      await walletModel.updateOne ({
        user: userId,
        coinName,
        $set: {
        coinQuantity: currentCoin.coinQuantity + coinQuantity,
      }})
    } else {
      await walletModel.create ({
        user: userId,
        coinInitials,
        coinName,
        coinPrice,
        coinQuantity,
      })
    }

    return res.status(200).send({
      message: "Compra realizada com sucesso"
    })

  } catch (error) {
    return res.status(400).send({
      error: `Ocorreu um erro - ${error}`,
    })
  }
})

export default app


