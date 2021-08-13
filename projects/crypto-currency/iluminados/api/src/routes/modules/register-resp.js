import express from 'express'
import { Mongoose, userSchema } from './configs/data-base.js'
import verifyToken from './configs/verify-token.js'

const app = express()
app.use(express.json())

app.get('/register', verifyToken, async function (req, res) {

  try {

    const usersModel = Mongoose.model('users', userSchema, 'users')
    const { userId } = req.user

    const response = await usersModel.findOne({ user:userId }).exec()

    const user ={
      firstName: response.firstName,
      lastName: response.lastName,
      email: response.email,
    }
    
    return res.send(user).status(200)

  } catch (error) {
    return res.status(400).send({
      error: `Ocorreu um erro - ${error}`,
    })
  }
})

export default app