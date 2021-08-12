import express from "express"
import { bankValidation } from "./validation.js"
import { Mongoose, bankSchema } from "./configs/data-base.js"
import verifyToken from "./configs/verify-token.js"

const app = express()
app.use(express.json())

app.post("/bank", verifyToken, async (req, res) => {
  const { error } = bankValidation(req.body)
  if (error) {
    return res
      .status(400)
      .send(error.details[0].message)
  }

  try {
    const { balance } = req.body
    const bankModel = Mongoose.model("bank", bankSchema, "bank")

    const userId = req.user._id
    const currentUser = await bankModel.findOne({ user: userId })
    
    if(currentUser) {
      return res
          .status(400)
          .send({
            error:'Conta já existente'
          })
    }
    await bankModel.create({
      user: userId,
      balance,
    })
    return res.status(201).send("Saldo inserido")

  } catch (error) {
    return res.status(400).send({
      error: `Ocorreu um erro - ${error}`,
    })
  }
});

export default app
