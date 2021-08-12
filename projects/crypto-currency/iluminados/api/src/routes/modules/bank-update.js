import express from "express"
import { bankValidation } from "./validation.js"
import { Mongoose, bankSchema } from "./configs/data-base.js"
import verifyToken from "./configs/verify-token.js"

const app = express()
app.use(express.json())

app.patch("/bank", verifyToken, async (req, res) => {
  const { error } = bankValidation(req.body)
  if (error) {
    return res.status(400).send(error.details[0].message)
  }

  try {
    const { balance } = req.body
    const bankModel = Mongoose.model("bank", bankSchema, "bank")

    const userId = req.user._id

    const currentBank = await bankModel.findOne({ user: userId })

    const newBalance = parseFloat(currentBank.balance) + parseFloat(balance)

    await bankModel.updateOne({
      user: userId,
      $set: {
        balance: newBalance,
      },
    })

    return res.status(201).send({
      message: "Saldo inserido com sucesso",
    })
  } catch (error) {
    return res.status(400).send({
      error: `Ocorreu um erro - ${error}`,
    })
  }
})

export default app
