import express from 'express'
import { Mongoose, bankSchema } from './configs/data-base.js'
import verifyToken from './configs/verify-token.js'

const app = express()
app.use(express.json())

app.get('/bank', verifyToken, async function (req, res) {

  try {

    const userId = req.user._id

    const bankModel = Mongoose.model("bank", bankSchema, "bank")
    const response = await bankModel.findOne({ user: userId }).exec()
   
    return res.send(response).status(200)

  } catch (error) {
    return res.status(400).send({
      error: `Ocorreu um erro - ${error}`,
    })
  }
})

export default app